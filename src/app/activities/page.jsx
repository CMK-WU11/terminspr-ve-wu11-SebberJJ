"use client";

import Article from "@/components/Article";
import Footer from "@/components/Footer";
import getActivities from "@/services/getActivities";
import { useEffect, useState } from "react";

export default function activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getActivities();
      setActivities(data);
    }
    setLoading(false);
    fetchData();
  }, []);
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center pt-8 gap-8 pb-8">
        <h1 className="text-white text-start w-full pl-5">Aktiviteter</h1>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          activities.map((acti) => (
            <Article
              key={acti.id}
              src={acti.asset.url}
              alt={acti.name}
              name={acti.name}
              age={acti.minAge + "-" + acti.maxAge}
              linkId={acti.id}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  );
}
