import { TiHome } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";





const BottomNavbar = () => {
    return (
        <nav className="bg-white lg:hidden h-[63px] fixed bottom-0 w-full flex justify-between items-center px-5">
            <TiHome size={30} />
            <FaSearch size={30} />
            <FaPlusCircle size={30} />

            <IoMdChatbubbles size={30} />
            <FaUser size={30} />

        </nav>
    )
}

export default BottomNavbar;