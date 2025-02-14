import getUserInfo from "@/services/getUserInfo";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function subscribeBtn({ minAge, maxAge, instructorId, href }) {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const user = await getUserInfo();
      setUserInfo(user);
    }
    fetchData();
    setLoading(false);
  }, []);

  if (loading === false) {
    console.log(userInfo);
  }

  return (
    <div className="absolute bottom-6 right-8">
      {loading === false && userInfo ? (
        userInfo.role === "default" &&
        userInfo.age >= minAge &&
        userInfo.age <= maxAge &&
        userInfo.instructorId !== instructorId ? (
          <button className="rounded-md bg-[#5E2E53] p-3 px-24 shadow-md shadow-[#2e1a29] text-white">
            Tilmeld
          </button>
        ) : userInfo.role === "instructor" ? (
          <Link
            href={href}
            className="rounded-md bg-[#5E2E53] p-3 px-12 shadow-md shadow-[#2e1a29] text-white">
            Vis hold
          </Link>
        ) : null
      ) : null}
    </div>
  );
}
