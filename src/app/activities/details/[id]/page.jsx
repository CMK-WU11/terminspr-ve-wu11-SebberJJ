"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import getActivity from "@/services/getActivity";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function details() {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await getActivity(id);
      setActivity(data);
    }
    fetchData();
    setLoading(false);
  }, [id]);
  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <>
            <div className="relative w-full flex items-end justify-end">
              {activity?.asset?.url ? (
                <Image
                  src={activity.asset.url}
                  alt={activity.name}
                  width={375}
                  height={375}
                  className="w-full"
                />
              ) : (
                <p className="text-white">Billede indlæses...</p>
              )}

              <div className="absolute bottom-6 right-8">
                <button className="rounded-md bg-[#5E2E53] p-3 px-24 shadow-md shadow-[#2e1a29] self-center flex text-white">
                  Tilmeld
                </button>
              </div>
            </div>
            <article className="flex flex-col p-6 text-white gap-3">
              <div>
                <h2 className="font-bold">{activity.name}</h2>
                <p>{activity.minAge + "-" + activity.maxAge} år</p>
              </div>
              <p>{activity.description}</p>
            </article>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
