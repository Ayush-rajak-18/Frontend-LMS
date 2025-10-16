// src/components/HomeBlogSlider.jsx
import React, { useRef, useEffect, useState } from "react";
import { posts } from "../data/blogData";
import { Link } from "react-router-dom";
import bgImage from "../assets/blogbg.jpg";

export default function HomeBlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 4500); 
    return () => clearInterval(interval);
  }, []);

  // Scroll
  useEffect(() => {
    const slider = slideRef.current;
    if (slider) {
      const slideWidth = slider.clientWidth / getVisibleCards(); 
      slider.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  
  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 3; 
    if (window.innerWidth >= 640) return 2; 
    return 1; 
  };

 
  const cardHeight = "h-[500px] md:h-[550px]";

  return (
    <section className="bg-gradient-to-r from-purple-300 via-blue-200 to-purple-300 py-16 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 sm:text-3xl uppercase">
          Latest Tech Insights
        </h2>
        <p className="m-8 text-gray-600 text-center sm:mt-4">
          Explore the latest in AI, ML, Development, Data Science, Cloud, Networking, and Cybersecurity.
        </p>
      
        <div
          ref={slideRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-start px-4"             
            >
              <div className={`bg-sky-100 rounded-2xl shadow-lg overflow-hidden flex flex-col ${cardHeight}`}
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 md:h-64 object-cover"
                />
                <div className="p-6 flex flex-col flex-1  justify-between ">
                  <div>
                    <span className="text-xs bg-yellow-400 text-white font-bold px-3 py-1 rounded-full mb-2 inline-block">
                      {post.category}
                    </span>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-700 transition-colors ">
                      <Link to={post.url}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      📅 <strong>{post.date}</strong> • ✍️ <strong>{post.author}</strong> • ⏱ <strong>{post.readingTime}</strong>
                    </p>
                   
                  </div>
                  <Link
                    to={post.url}
                    className="inline-block  px-2 py-1 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-900 transition-color self-start"
                  >
                    Read More  
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/blog"
          className="inline-block px-8 py-2 text-lg mt-12 mb-6 font-medium text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-900 transition duration-300 transform hover:scale-105"
        >
          View All Blogs →
        </Link>
      </div>
    </section>
  );
}
