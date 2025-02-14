import Link from "next/link";

export default function CalenderCard({ name, weekday, time, id }) {
  return (
    <li className="bg-white p-4 rounded-lg shadow-lg">
      <Link href={`/activities/details/${id}`}>
        <h2 className="line-clamp-1">{name}</h2>
      </Link>
      <p>
        {weekday} {time}
      </p>
    </li>
  );
}
