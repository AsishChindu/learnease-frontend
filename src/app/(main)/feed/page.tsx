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
    <div className="">
      {posts.map(post => (
        <FeedItem key={post.id} title={post.title} post={post.body} />
      ))}
    </div>
  )
}

export default Feed;