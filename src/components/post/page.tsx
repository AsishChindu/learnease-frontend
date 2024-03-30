import Link from "next/link"
import { MdOutlineAccountCircle, MdAccountCircle, MdAddBox } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { PiVideoFill } from "react-icons/pi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiLanguage, HiMiniLanguage, HiHome, HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi2";
import { CiBoxList } from "react-icons/ci";
import { RiHome2Line } from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";


import { FaHome, FaUserFriends } from "react-icons/fa";



interface FooterLinkProps {
  href: string;
  icon: React.ElementType;
  iconName: string;
}

export default function Post() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-1 px-3 grid grid-cols-5 gap-4 border-t border-gray-100 bg-white shadow-3xl text-gray-400 z-1000 md:hidden">
    {/* <div className="sticky bottom-2  p-5 px-6 m-2   flex items-center justify-between   bg-gray-900 shadow-3xl text-gray-400 rounded-2xl"> */}
        <FooterLink href="/" icon={FaHome} iconName="Home" />
        <FooterLink href="/some-page" icon={FaUserFriends} iconName="My Network" />
        <FooterLink href="/search" icon={MdAddBox} iconName="Post" />
        <FooterLink href="/categories" icon={IoIosNotifications} iconName="Notifications" />
        <FooterLink href="/home" icon={MdAccountCircle} iconName="Account" />
    </div>
  );
}

function FooterLink({ href, icon: Icon, iconName }: FooterLinkProps) {
  return (
      <Link href={href}>
        <div className="flex flex-col items-center transition ease-in duration-200 text-gray-500 hover:text-gray-900 cursor-pointer">
          <div className="mb-1 text-xl">{<Icon />}</div>
          <p className="text-xs font-light text-center">{iconName}</p>
        </div>
      </Link>
  );
}