// src/components/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post, layout = "list" }) => {
  const isListLayout = layout === "list";
  const slug = post.url.split("/blog/")[1];

  return (
    <article
      className={`bg-sky-100 hover:bg-sky-100 border border-sky-200 shadow-md  rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:${isListLayout ? "flex-row" : "flex-col"} w-full min-h-[400px] relative`}
    >
      <span className="absolute top-0 left-0 w-1 h-full bg-blue-600 rounded-l-2xl"></span>

      <div className={`${isListLayout ? "md:w-2/5" : "w-full"} relative`}>
        <img
          src={post.imageUrl}
          alt={post.title}
          className={`w-full ${isListLayout ? "h-64 md:h-full" : "h-64"} object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none`}
        />
        {post.category && (
          <span className="absolute top-3 left-3 bg-yellow-400 text-white text-bold px-3 py-1 rounded-full shadow-md font-sans">
            {post.category}
          </span>
        )}
      </div>

      <div className={`p-6 flex flex-col justify-between ${isListLayout ? "md:w-3/5" : "w-full"}`}>
        <div className="flex flex-col flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 hover:text-blue-700 transition-colors ">
            <Link to={`/blog/${slug}`}>{post.title}</Link>
          </h3>

          <p className="text-xs md:text-sm text-gray-500 mb-3 font-mono">
            📅 <strong>{post.date}</strong> • ✍️ <strong>{post.author}</strong>{" "}
            {post.readingTime && <>• ⏱️ {post.readingTime}</>}{" "}
            {post.difficulty && <>• ⚡ {post.difficulty}</>}
          </p>

          {post.excerpt && (
            <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base flex-1 font-sans">
              {post.excerpt}
            </p>
          )}

          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full font-sans">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <Link
          to={`/blog/${slug}`}
          className="mt-4 inline-block bg-blue-700 text-white font-semibold rounded-2xl px-6 py-2 text-sm md:text-base hover:bg-blue-900 transition-all text-center w-full"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
