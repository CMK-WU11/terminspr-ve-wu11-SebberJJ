"use client";

import Footer from "@/components/Footer";
import getActivity from "@/services/getActivity";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import cookieStore from "@/services/cookieStore";

export default function overview() {
  const [activity, setActivity] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const data = await getActivity(id);
      setActivity(data);
      setLoading(false);

      const userCookies = await cookieStore()
      setUserInfo(userCookies)
    }
    fetchData();
  }, [id]);
  console.log(userInfo)
  console.log(activity);


  useEffect(() => {
    if (!loading && userInfo.role === "default" || userInfo.role === "") {
      router.push("/activities/details/" + activity.id);
    }
  }, [loading, userInfo]);


  return (
    <>
      <div className="min-h-screen text-white p-6">
        <h1 className="line-clamp-1 pb-2">{activity.name}</h1>
        <ul>
          {!loading && userInfo.role === "instructor" && activity.users.length > 0 ? (
            activity.users.map((user) => (
              <li key={user.id}>
                <p>{user.firstname + " " + user.lastname}</p>
              </li>
            ))
          ) : (
            <p>Ingen brugere deltager i denne aktivitet.</p>
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
}
