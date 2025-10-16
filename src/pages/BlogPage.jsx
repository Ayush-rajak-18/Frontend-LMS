// src/pages/BlogPage.jsx
import React from "react";
import { posts } from "../data/blogData";
import BlogCard from "./BlogCard";
import Blogbg from "../assets/blogbg.jpg"; // ✅ Local image import

const BlogPage = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-blue-100 to-purple-100 min-h-screen">
      
      {/* Header */}
      <header
        className="relative py-20 text-center bg-gradient-to-r from-blue-900/70 via-indigo-800/60 to-blue-900/70 backdrop-blur-md text-white border-b border-white/10 shadow-lg"
        style={{
          backgroundImage: `url(${Blogbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/50"></div>

        {/* Header content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
            Latest <span className="text-blue-300">Technology</span> Blogs
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Learn, explore, and stay ahead with expert tutorials, guides, and case studies.
          </p>
        </div>
      </header>

      {/* Blog List */}
      <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-12">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} layout="list" />
        ))}
      </main>
    </div>
  );
};

export default BlogPage;
