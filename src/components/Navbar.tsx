import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className="h-[63px] w-screen flex justify-center px-5 lg:px-0 bg-white fixed top-0">
            <div className="w-full lg:w-[1128px] h-full justify-between flex items-center">
                <span className=" font-bold text-2xl">LearnWise</span>
                <div>
                    <IoNotifications size={30} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;