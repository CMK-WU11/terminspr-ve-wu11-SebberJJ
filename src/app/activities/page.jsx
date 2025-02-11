import Article from "@/components/Article";
import Footer from "@/components/Footer";

export default function activities() {
  return (
    <>
    <div className="min-h-screen w-full flex flex-col items-center pt-8 gap-8 pb-8">
        <h1 className="text-white text-start w-full pl-5">Aktiviteter</h1>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
    </div>
    <Footer />
    </>
  );
}