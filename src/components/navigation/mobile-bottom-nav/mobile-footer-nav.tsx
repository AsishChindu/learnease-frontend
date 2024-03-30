import { MdAccountCircle, MdAddBox } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaHome, FaUserFriends } from "react-icons/fa";

import MobileFooterNavItem from "./mobile-footer-nav-item";


export default function MobileFooterNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-1 px-3 grid grid-cols-5 gap-4 border-t border-gray-100 bg-white shadow-3xl text-gray-400 z-1000 md:hidden h-16 justify-between">
    {/* <div className="sticky bottom-2  p-5 px-6 m-2   flex items-center justify-between   bg-gray-900 shadow-3xl text-gray-400 rounded-2xl"> */}
        <MobileFooterNavItem href="/feed" icon={FaHome} iconName="Home" />
        <MobileFooterNavItem href="/" icon={FaUserFriends} iconName="My Network" />
        <MobileFooterNavItem href="/" icon={MdAddBox} iconName="Post" />
        <MobileFooterNavItem href="/" icon={IoIosNotifications} iconName="Notifications" />
        <MobileFooterNavItem href="/profile" icon={MdAccountCircle} iconName="Account" />
    </div>
  );
}
