import Link from "next/link"
import { MdOutlineAccountCircle, MdAccountCircle, MdAddBox } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { PiVideoFill } from "react-icons/pi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiLanguage, HiMiniLanguage, HiHome, HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi2";
import { CiBoxList } from "react-icons/ci";
import { RiHome2Line } from "react-icons/ri";
import { AiOutlineFire, AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";



import { FaHome, FaUserFriends } from "react-icons/fa";



export default function HeaderNav() {
  return (
    <div className="h-16 w-screen flex justify-center px-6 lg:px-0 bg-white fixed top-0 z-10">
      <div className="w-full lg:w-[1128px] h-full justify-between flex items-center">
        <span className="font-normal text-xl">LearnWise</span>
        <div>
          <IoIosNotifications size={24} />
        </div>
      </div>
    </div>
    // <div className="fixed top-0 left-0 right-0 ">
    //   <div className="p-1 px-3 grid grid-cols-8 gap-4 ">
    //     <div><img src="https://placehold.co/25x25" alt="" /></div>
    //     <div className="col-span-6"><HiOutlineSearch /></div>
    //     <div><AiFillMessage /></div>
    //   </div>
    //   <div className="p-1 px-3 grid grid-cols-5 gap-4 border-t border-gray-100 bg-white shadow-3xl text-gray-400 z-1000 hidden md:grid">
    //   {/* <div className="sticky bottom-2  p-5 px-6 m-2   flex items-center justify-between   bg-gray-900 shadow-3xl text-gray-400 rounded-2xl"> */}

    //       <HeaderLink href="/" icon={FaHome} iconName="Home" />
    //       <HeaderLink href="/some-page" icon={FaUserFriends} iconName="My Network" />
    //       <HeaderLink href="/search" icon={MdAddBox} iconName="Post" />
    //       <HeaderLink href="/categories" icon={IoIosNotifications} iconName="Notifications" />
    //       <HeaderLink href="/home" icon={MdAccountCircle} iconName="Account" />
    //     </div>
    // </div>
  );
}

// function HeaderLink({ href, icon: Icon, iconName }: FooterLinkProps) {
//   return (
//     <Link href={href}>
//       <div className="flex flex-col items-center transition ease-in duration-200 text-gray-500 hover:text-gray-900 cursor-pointer">
//         <div className="mb-1 text-xl">{<Icon />}</div>
//         <p className="text-xs font-light text-center">{iconName}</p>
//       </div>
//     </Link>
//   );
// }