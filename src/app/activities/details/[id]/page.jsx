"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import getActivity from "@/services/getActivity";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SubscribeBtn from "@/components/SubscribeBtn";

export default function details() {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await getActivity(id);
      setActivity(data);
      setLoading(false);
    }
    fetchData();
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

              <SubscribeBtn
                activityId={activity.id}
                minAge={activity.minAge}
                maxAge={activity.maxAge}
                instructorId={activity.instructorId}
                href={`/calender/overview/${activity.id}`}
              />

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
