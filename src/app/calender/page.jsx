"use client";

import CalenderCard from "@/components/CalenderCard";
import Footer from "@/components/Footer";
import getUserInfo from "@/services/getUserInfo";
import { getInstuctorActivities } from "@/services/getActivities";
import { useEffect, useState } from "react";

export default function Calender() {
  const [userInfo, setUserInfo] = useState(null);
  const [instructorActivities, setInstructorActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const user = await getUserInfo();
      setUserInfo(user);

      if (user.role === "instructor") {
        const instructorActi = await getInstuctorActivities(user.id);
        setInstructorActivities(instructorActi);
        console.log("instruktør data:", instructorActi);
      }

      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col p-6 gap-2">
        <h1 className="text-white">Kalender</h1>
        <ul className="flex flex-col gap-6">
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : !userInfo ? (
            <p className="text-white">Ingen brugerinfo fundet</p>
          ) : userInfo.role === "instructor" ? (
            <>
              <h2 className="text-white">Aktiviteter:</h2>
              {instructorActivities.length > 0 ? (
                instructorActivities.map((acti) => (
                  <CalenderCard
                    key={`instructor-${acti.id}`}
                    id={acti.id}
                    name={acti.name}
                    time={acti.time}
                    weekday={acti.weekday}
                  />
                ))
              ) : (
                <p className="text-white">Ingen instruktøraktiviteter fundet</p>
              )}
            </>
          ) : userInfo.activities.length > 0 ? (
            userInfo.activities.map((acti) => (
              <CalenderCard
                key={`default-${acti.id}`}
                id={acti.id}
                name={acti.name}
                time={acti.time}
                weekday={acti.weekday}
              />
            ))
          ) : (
            <p className="text-white">Ingen aktiviteter</p>
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
}
