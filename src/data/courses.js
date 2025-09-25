import courseImg from "../components/pictures/course.jpg";  // extension add kiya

const courses = [
  {
    id: "wd1",
    title: "Fullstack Web Development",
    short: "HTML, CSS, JS, React, Node, MongoDB.",
    price: 6999,
    level: "Beginner → Advanced",
    duration: "150+ hours",
    img: courseImg,   // ✅ ab image work karegi
    syllabus: ["HTML & CSS", "JavaScript ES6+", "React Basics", "Node.js & Express", "MongoDB CRUD", "Deployment"],
    projects: ["Portfolio Website", "Blog App", "E-commerce Site"],
    reviews: [{ name: "Rohit", rating: 5, text: "Got my first fullstack job!" }],
    videos: [
      { title: "HTML & CSS Intro", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" },
      { title: "React Components", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" },
    ],
    pdfs: [{ title: "HTML Cheatsheet", file: "/pdfs/html.pdf", type: "pdf" }],
    liveClassLink: "https://zoom.us/j/1111111111",
    featured: true,
  },
  {
    id: "wd2",
    title: "Advanced JavaScript & React",
    short: "Deep dive into JS and React frameworks.",
    price: 4999,
    level: "Intermediate → Advanced",
    duration: "80+ hours",
    img: courseImg,   // ✅ same image use ho rhi hai
    syllabus: ["JS ES6+", "Asynchronous JS", "React Hooks", "State Management", "Context API"],
    projects: ["Todo App", "E-commerce SPA"],
    reviews: [{ name: "Neha", rating: 4, text: "Very practical projects." }],
    videos: [{ title: "React Hooks", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" }],
    pdfs: [{ title: "JS Advanced Topics", file: "/pdfs/js.pdf", type: "pdf" }],
    liveClassLink: "https://zoom.us/j/2222222222",
    featured: true,
  },
];
export default courses;
