import Image from "next/image";

export default function activities() {
  return (
    <div className="h-screen w-full flex flex-col items-center pt-8 gap-8">
        <h1 className="text-4xl text-white text-start w-full pl-5">Aktiviteter</h1>
        <article>
            <figure className="relative">
                <Image src="/dancingImage.png" width={375} height={300} alt="Danser i en dansesal" className="rounded-l-[2.5rem] rounded-tr-[2.5rem]" />
                <figcaption className="absolute bottom-0 left-0 w-full font-semibold bg-[#E1A1E9] bg-opacity-60 p-6 rounded-tr-[2.5rem] rounded-bl-[2.5rem]">
                    <h2 className="pl-3">Junior Fitness Dance</h2>
                    <p className="pl-3">Alder: 10-12 år</p>
                </figcaption>
            </figure>
        </article>
        <article>
            <figure className="relative">
                <Image src="/dancingImage.png" width={375} height={300} alt="Danser i en dansesal" className="rounded-l-[2.5rem] rounded-tr-[2.5rem]" />
                <figcaption className="absolute bottom-0 left-0 w-full font-semibold bg-[#E1A1E9] bg-opacity-60 p-6 rounded-tr-[2.5rem] rounded-bl-[2.5rem]">
                    <h2 className="pl-3">Junior Fitness Dance</h2>
                    <p className="pl-3">Alder: 10-12 år</p>
                </figcaption>
            </figure>
        </article>
        <article>
            <figure className="relative">
                <Image src="/dancingImage.png" width={375} height={300} alt="Danser i en dansesal" className="rounded-l-[2.5rem] rounded-tr-[2.5rem]" />
                <figcaption className="absolute bottom-0 left-0 w-full font-semibold bg-[#E1A1E9] bg-opacity-60 p-6 rounded-tr-[2.5rem] rounded-bl-[2.5rem]">
                    <h2 className="pl-3">Junior Fitness Dance</h2>
                    <p className="pl-3">Alder: 10-12 år</p>
                </figcaption>
            </figure>
        </article>
    </div>
  );
}