import Footer from "@/components/Footer";
import Image from "next/image";

export default function details() {
    return (
        <>
        <div className="min-h-screen w-full flex flex-col">
            <div className="relative w-full flex items-end justify-end">
                <Image src="/dancingImage.png" alt="danser i en dansesal" width={375} height={375} className="w-full"/>
                <div className="absolute bottom-6 right-8">
                    <button className="rounded-md bg-[#5E2E53] p-3 px-24 shadow-md shadow-[#2e1a29] self-center flex text-white">Tilmeld</button>
                </div>
            </div>
                <article className="flex flex-col p-6 text-white gap-3">
                    <div>
                        <h2 className="font-bold text-2xl">Junior Fitness Dance</h2>
                        <p>10-12 år</p>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, commodi? Optio illo provident itaque, error nulla suscipit quisquam tempore exercitationem vel eos nobis eum sed reprehenderit culpa dignissimos sunt sint nam. Inventore, delectus? Explicabo voluptatibus, facere quia repellat eligendi, dolorum maiores praesentium voluptate veritatis beatae necessitatibus. Ducimus debitis eaque saepe.</p>
                </article>
        </div>
        <Footer />
        </>
        
    );
}