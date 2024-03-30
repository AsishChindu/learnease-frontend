import Image from "next/image";
import { PiDotsThreeVertical } from "react-icons/pi";
import { FaEarthAfrica } from "react-icons/fa6";
import { PiHeartFill } from "react-icons/pi";
import { LiaCommentSolid } from "react-icons/lia";
import { IoBookmarkOutline } from "react-icons/io5";
import { useState } from "react";

interface FeedItemProps {
  title: string;
  post: string;
}

export default function FeedItem({title, post}: FeedItemProps) {
  const [heartColorClass, setHeartColorClass] = useState('text-gray-400');
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const handleHeartColorClassClick = () => {
    // Toggle the color between 'gray' and 'red' on click
    setHeartColorClass(heartColorClass === 'text-gray-400' ? 'text-red-500' : 'text-gray-400');
  };

  return (
    <div className="my-3 px-6 py-2 bg-white">

      <div className="flex justify-between items-start">
        <div className="flex">
          <img 
            className="border-0 rounded-full" 
            src="https://placehold.co/60x60" 
            alt="user image" 
            style={{width: 60, height: 60}}
          />

          <div className="flex flex-col ml-3">
            <p className="text-base font-medium">{"User Name"}</p>
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
              className="w-full h-full max-h-64"
              src="https://placehold.co/600x250" 
              alt="user image"
            />
        </div>

        <div className="grid grid-cols-3 gap-4 py-2">
          <div className="flex flex-col items-center">
            <PiHeartFill 
              className={heartColorClass}
              size={24} 
              onClick={handleHeartColorClassClick}
            />
            <span className="text-xs font-thin">23 Likes</span>
          </div>
          <div className="flex flex-col items-center text-gray-700">
            <LiaCommentSolid size={24} />
            <span className="text-xs font-thin">11 Comments</span>
          </div>
          <div className="flex flex-col items-center text-gray-500">
            <IoBookmarkOutline size={24} />
            <span className="text-xs font-thin">Save</span>
          </div>

        </div>
      </div>
    </div>
  )
}