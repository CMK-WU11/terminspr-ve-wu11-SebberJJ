"use client";

import CalenderCard from "@/components/CalenderCard";
import Footer from "@/components/Footer";
import getUserInfo from "@/services/getUserInfo";
import { useEffect, useState } from "react";

export default function calender() {
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const user = await getUserInfo();
      setUserInfo(user);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (!loading) {
    console.log(userInfo);
  }

  return (
    <>
      <div className="min-h-screen flex flex-col p-6 gap-2">
        <h1 className="text-white">Kalender</h1>
        <ul className="flex flex-col gap-6">
          {!userInfo ? (
            <p className="text-white">Loading...</p>
          ) : userInfo.activities.length === 0 ? (
            <p className="text-white">Ingen aktiviteter</p>
          ) : (
            userInfo.activities.map((acti) => (
              <CalenderCard
                key={acti.name + acti.id}
                id={acti.id}
                name={acti.name}
                time={acti.time}
                weekday={acti.weekday}
                role={userInfo.role}
              />
            ))
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
}
