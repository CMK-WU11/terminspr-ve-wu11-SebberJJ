import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('/background.png')] h-screen w-full bg-cover bg-center flex flex-col justify-end">
        <Image src="/logo.png" alt="landrup logo" width={375} height={375}/>
        <Link href="/activities" className="fade-in-button rounded-md bg-[#5E2E53] h-12 w-3/5 mb-16 shadow-md shadow-[#2e1a29] self-center mt-48 flex justify-center items-center text-white">
          Kom i gang
        </Link>
    </div>
  );
}
