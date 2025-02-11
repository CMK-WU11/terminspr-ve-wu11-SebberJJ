import Link from "next/link";
import { CiHome } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

export default function Footer() {
    return (
        <footer className="bg-white pt-3 pb-3 sticky bottom-0 w-full">
            <nav>
                <ul className="flex justify-around">
                    <li className="border border-black rounded-full p-2">
                        <Link href="/"><CiHome size={28} /></Link>
                    </li>
                    <li className="border border-black rounded-full p-2">
                        <Link href="/search"><IoSearchOutline size={28} /></Link>
                    </li>
                    <li className="border border-black rounded-full p-2">
                        <Link href="/"><CiCalendar size={28} /></Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}