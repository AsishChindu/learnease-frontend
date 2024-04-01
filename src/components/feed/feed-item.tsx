import Image from "next/image";
import { PiDotsThreeVertical } from "react-icons/pi";
import { FaEarthAfrica } from "react-icons/fa6";
import { PiHeartFill } from "react-icons/pi";
import { LiaCommentSolid } from "react-icons/lia";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

import { useState } from "react";

interface FeedItemProps {
  title: string;
  post: string;
}

export default function FeedItem({title, post}: FeedItemProps) {
  const [userLikes, setUserLikes] = useState(23);
  const [heartColorClass, setHeartColorClass] = useState('text-gray-400');
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const handleHeartColorClassClick = () => {
    setHeartColorClass(heartColorClass === 'text-gray-400' ? 'text-red-500' : 'text-gray-400');
    setUserLikes(heartColorClass === 'text-gray-400' ? userLikes + 1 : userLikes - 1);
  };

  return (
    <div className="mb-3 px-6 py-2 bg-white">

      <div className="flex justify-between items-start">
        <div className="flex">
          <img 
            className="border-0 rounded-full" 
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg" 
            alt="user image" 
            style={{width: 50, height: 50}}
          />

          <div className="flex flex-col ml-3">
            <p className="text-base font-medium">{"Deepak Verma"}</p>
            <p className="text-xs font-light text-gray-400 flex items-center">
              <FaEarthAfrica />
              <span className="ml-1">1 minutes ago</span>
            </p>
          </div>
        </div>
        <div>
          <PiDotsThreeVertical size={30} />
        </div>
      </div>
      
      <div className="py-2">
        <p className="text-sm text-gray-500 relative" onClick={toggleText}>
          {showFullText ? post : `${post.slice(0, 150)}...`}
          {/* {post.length > 150 && (
            <button style={{ position: 'absolute', right: 0, bottom: 0 }} onClick={toggleText}>
              {showFullText ? 'See less' : 'See more'}
            </button>
          )} */}
          {/* </p>
            {post} */}
        </p>
      </div>

      <div>
        <div className="my-2">
          <img 
              className="w-full max-h-64 bg-cover"
              src="https://img.freepik.com/free-photo/winding-road-cuts-path-through-lush-green-mountains-hazy-sky_91128-4483.jpg?t=st=1711955562~exp=1711959162~hmac=ce0ef447d616eda7179ee98fc6461f5c9700073dbb5ae6125fdf2ffc975e062b&w=1800" 
              alt="user image"
              style={{width: 600}}
            />
        </div>
        
        <div className="py-2">
          <div className="flex justify-between">
            <div className="flex items-center">
              <PiHeartFill className="text-red-500 mr-1" /> 
              <span className="text-xs font-thin">{userLikes}</span>
            </div>

            <div className="text-xs font-thin">
              {11} comments
            </div>
          </div>
          <hr className="my-2" />
          <div className="grid grid-cols-4 gap-4">
            <div onClick={handleHeartColorClassClick} className="flex flex-col items-center hover:bg-gray-200 hover:rounded cursor-pointer p-3">
              <PiHeartFill 
                className={heartColorClass}
                size={24} 
              />
            </div>
            <div className="flex flex-col items-center text-gray-700 hover:bg-gray-200 hover:rounded cursor-pointer p-3">
              <LiaCommentSolid size={24} />
            </div>
            <div className="flex flex-col items-center text-gray-500 hover:bg-gray-200 hover:rounded cursor-pointer p-3">
              <IoBookmarkOutline size={24} />
            </div>
            <div className="flex flex-col items-center text-gray-500 hover:bg-gray-200 hover:rounded cursor-pointer p-3">
              <IoIosSend size={24} />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}