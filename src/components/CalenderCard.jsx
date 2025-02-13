import { getInstuctorActivities } from "@/services/getActivities";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CalenderCard({ name, weekday, time, role, id, instructorId }) {
    const [actiInfo, setActiInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (role === "instructor") {
            async function fetchData() {
                const instructorActi = await getInstuctorActivities(instructorId);
                setActiInfo(instructorActi);
                setLoading(false);
            }
            fetchData();
        } else {
            setLoading(false);
        }
    }, [role, id]);

    return (
        <>
            {role === "default" ? (
                <li className="bg-white p-4 rounded-lg shadow-lg">
                    <Link href={"/activities/details/" + id}>
                        <h2 className="line-clamp-1">{name}</h2>
                    </Link>
                    <p>{weekday} {time} {role}</p>
                </li>
            ) : role === "instructor" && (
                <li className="bg-white p-4 rounded-lg shadow-lg">
                    <h2 className="line-clamp-1">Instruktør Aktiviteter:</h2>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul>
                            {actiInfo.map((activity) => (
                                <li key={activity.id} className="bg-white p-4 rounded-lg shadow-lg">
                                    <Link href={"/calendar/overview/" + activity.id}>
                                        <h3 className="line-clamp-1">{activity.name}</h3>
                                    </Link>
                                    <p>{activity.time}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            )}
        </>
    );
}