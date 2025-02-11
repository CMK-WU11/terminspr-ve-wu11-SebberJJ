import Article from "@/components/Article";
import Footer from "@/components/Footer";


export default function Search() {
  return (
    <>
    <div className="min-h-screen w-full flex flex-col items-center pt-8 gap-8 pb-8">
        <div className="flex flex-col gap-2 w-full px-6">
            <h1 className="text-white">Søg</h1>
            <input type="search" className="opacity-30 p-2 rounded-sm w-full" />
        </div>
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