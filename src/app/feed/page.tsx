import BottomNavbar from "@/components/BottomNavbar";
import Feeds from "@/components/Feeds";
import Navbar from "@/components/Navbar";

const Feed = () => {
    return (
        <main className="flex flex-col gap-5">
            <Navbar />
            <div className="w-screen flex justify-center gap-3 px-5 lg:p-0">
                <Feeds />
            </div>
            <BottomNavbar />
        </main>
    )
}

export default Feed;