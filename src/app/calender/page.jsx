import CalenderCard from "@/components/CalenderCard";
import Footer from "@/components/Footer";

export default function calender() {
    return (
        <>
        <div className="min-h-screen flex flex-col p-6 gap-2">
            <h1 className="text-white">Kalender</h1>
            <ul className="flex flex-col gap-6">
                <CalenderCard />
                <CalenderCard />
                <CalenderCard />
                <CalenderCard />
                <CalenderCard />
                <CalenderCard />
                <CalenderCard />
            </ul>
        </div>
        <Footer />
        </>
    )
}