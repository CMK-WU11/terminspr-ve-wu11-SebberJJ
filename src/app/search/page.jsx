"use client";

import Article from "@/components/Article";
import Footer from "@/components/Footer";
import { getActivities } from "@/services/getActivities";
import { useEffect, useState } from "react";

export default function Search() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getActivities();
      setActivities(data);
    }
    setLoading(false);
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredActivities(
      activities.filter((acti) =>
        acti.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, activities]);

  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center pt-8 gap-8 pb-8">
        <form className="flex flex-col gap-2 w-full px-6">
          <h1 className="text-white">Søg</h1>
          <input
            type="search"
            className="opacity-30 p-2 rounded-sm w-full"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          filteredActivities.map((acti) => (
            <Article
              key={acti.id}
              src={acti.asset.url}
              alt={acti.name}
              name={acti.name}
              age={acti.minAge + "-" + acti.maxAge}
              instructorId={acti.instructorId}
              linkId={acti.id}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  );
}
