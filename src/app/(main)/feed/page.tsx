'use client';

import BottomNavbar from "@/components/BottomNavbar";
import Feeds from "@/components/Feeds";
import Navbar from "@/components/Navbar";
import FeedItem from "@/components/feed/feed-item";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, [])
  
  const fetchPosts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className="md:grid md:grid-cols-4">
      <div className="hidden md:block">
        left section
      </div>
      <div className="md:col-span-2">
        <div className="hidden md:block">
          heading
        </div>
        <div>
          {posts.map(post => (
            <FeedItem key={post.id} title={post.title} post={post.body} />
          ))}

        </div>
      </div>

      <div className="hidden md:block">
        right section
      </div>
    </div>
  )
}

export default Feed;