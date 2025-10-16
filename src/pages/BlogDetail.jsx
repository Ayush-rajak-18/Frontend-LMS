import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../data/blogData";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.url.endsWith(slug));

  if (!post)
    return (
      <div className="text-center py-20 bg-gradient-to-b from-blue-50 to-purple-100 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-900">Blog Not Found</h2>
        <p className="mt-2 text-gray-600">Sorry, the blog you are looking for does not exist.</p>
        <Link
          to="/blog"
          className="inline-block mt-6 px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 transition"
        >
          Back to Blogs
        </Link>
      </div>
    );

  return (
    <div className="bg-gradient-to-b from-blue-100 via-purple-200 to-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 bg-purple-100 shadow-2xl rounded-2xl p-8 md:p-12">
     
        <h1 className="text-2xl md:text-4xl  font-bold mb-6 text-purple-900 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center text-gray-500 text-sm md:text-base mb-8 font-mono gap-3">
          <span>📅 {post.date}</span>
          <span>• ✍️ {post.author}</span>
          {post.readingTime && <span>• ⏱️ {post.readingTime}</span>}
          {post.difficulty && <span>• ⚡ {post.difficulty}</span>}
        </div>

      
        <div className="overflow-hidden rounded-xl mb-8 shadow-2xl">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Blog Content */}
        <div className="prose max-w-none text-gray-800 leading-relaxed">
          {post.content.map((section, idx) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <p key={idx} className="font-sans text-lg mb-5">
                    {section.text}
                  </p>
                );
              case "heading2":
                return (
                  <h2 key={idx} className="text-2xl md:text-3xl font-semibold text-blue-900 mt-10 mb-4 border-l-4 border-blue-600 pl-3">
                    {section.text}
                  </h2>
                );
              case "heading3":
                return (
                  <h3 key={idx} className="text-xl md:text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    {section.text}
                  </h3>
                );
              case "list":
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 pl-2 mb-5 text-base font-sans">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              case "code":
                return (
                  <pre
                    key={idx}
                    className="bg-gray-900 text-gray-100 text-sm md:text-base p-5 rounded-lg overflow-x-auto mb-6 font-mono border-l-4 border-blue-500 relative"
                  >
                    <code>{section.text}</code>
                  </pre>
                );
              case "quote":
                return (
                  <blockquote
                    key={idx}
                    className="border-l-4 border-blue-600 bg-blue-50 text-blue-900 italic p-4 my-6 rounded-r-xl shadow-sm"
                  >
                    {section.text}
                  </blockquote>
                );
              case "highlight":
                return (
                  <div
                    key={idx}
                    className="bg-yellow-100 text-yellow-900 px-4 py-3 rounded-md font-medium mb-6 border-l-4 border-yellow-500"
                  >
                    {section.text}
                  </div>
                );
              case "image":
                return (
                  <div key={idx} className="my-6 rounded-xl overflow-hidden shadow-md">
                    <img src={section.src} alt={section.alt} className="w-full object-cover" />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Tags */}
        {post.tags && (
          <div className="flex flex-wrap gap-3 mt-10 mb-8">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full hover:bg-blue-200 transition"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Back Link */}
        <div className="mt-8">
          <Link
            to="/blog"
            className="text-blue-700  hover:text-blue-900 font-semibold text-lg transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
