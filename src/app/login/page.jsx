import Image from "next/image";

export default function login() {
    return (
        <div className="bg-[url('/background.png')] min-h-screen w-full bg-cover bg-center flex flex-col justify-center items-center">
            <div className="relative w-[225%] p-72 bg-[#5E2E53] opacity-50 rounded-xl shadow-lg transform rotate-[-25deg] mb-16"></div>
            <form action="" className="flex flex-col gap-2 absolute w-full px-8">
                <h1 className="text-white">Log Ind</h1>
                <input type="text" name="username" placeholder="brugernavn" className="p-2" />
                <input type="password" name="password" placeholder="adgangskode" className="p-2" />
                <button className="rounded-md bg-[#5E2E53] py-3 shadow-sm shadow-[#2e1a29] text-white mx-10 mt-5">Log ind</button>
            </form>
        </div>
    );
}