import cyberImg from "../components/pictures/courseig/adcybersec.jpeg";
import networkImg from "../components/pictures/courseig/networksec.jpeg";
import ccnaImg from "../components/pictures/courseimg/CCNA.png";
import cloudImg from "../components/pictures/courseig/cloudcom.jpeg";
import socImg from "../components/pictures/courseig/SOC.jpeg";
import frontendImg from "../components/pictures/courseimg/frontend.png";
import backendImg from "../components/pictures/courseimg/backend.png";
import fullstackImg from "../components/pictures/courseig/fullstack.jpeg";
import dataAnalyticsImg from "../components/pictures/courseig/dataanalystics.jpeg";
import dataScienceImg from "../components/pictures/courseig/dtascience.jpeg";
import OSINT from "../components/pictures/courseig/OSINT.jpeg";
import linux from "../components/pictures/courseig/linuxadmin.jpeg";
const courses = [
  {
    id: "cs1",
    title: "Cyber Security (Advanced)",
    short: "Master advanced cybersecurity concepts, ethical hacking, and threat mitigation.",
    price: 699,
    level: "Intermediate → Advanced",
    duration: "120+ hours",
    img: cyberImg,
    category: "Cyber Security",
    syllabus: [
      "Ethical Hacking",
      "Penetration Testing",
      "Threat Analysis & Mitigation",
      "Malware & Virus Protection",
      "Incident Response"
    ],
    projects: ["Penetration Testing Lab", "Security Audit Report", "Attack Simulation"],
    reviews: [{ name: "Rohit", rating: 5, text: "Learned advanced techniques effectively." }],
    videos: [
      { title: "Introduction to Ethical Hacking", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" },
      { title: "Advanced Threat Analysis", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" }
    ],
    pdfs: [
      { title: "Cyber Security Guide", file: "/pdfs/cybersecurity.pdf", type: "pdf" }
    ],
    liveClassLink: "https://zoom.us/j/1010101010",
    liveClassTime: { type: "scheduled", date: "daily", time: "" },
    featured: true,
  },
  {
    id: "ns1",
    title: "Network Security",
    short: "Learn how to secure networks, configure firewalls, and monitor traffic effectively.",
    price: 599,
    level: "Beginner → Advanced",
    duration: "100+ hours",
    img: networkImg,
    category: "Cyber Security",
    syllabus: [
      "Network Protocols & Security",
      "Firewall Configuration",
      "VPN Setup & Security",
      "IDS/IPS Systems",
      "Wireshark & Traffic Analysis"
    ],
    projects: ["Firewall Setup Lab", "Network Security Audit"],
    reviews: [{ name: "Neha", rating: 4, text: "Practical network security skills." }],
    videos: [
      { title: "Network Security Basics", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" }
    ],
    pdfs: [],
    liveClassLink: "https://zoom.us/j/2020202020",
    liveClassTime: { type: "scheduled", date: "", time: "7:00 PM" },
    featured: true,
  },
  {
    id: "ccna1",
    title: "CCNA",
    short: "Complete Cisco Certified Network Associate (CCNA) preparation from scratch.",
    price: 499,
    level: "Beginner → Intermediate",
    duration: "90+ hours",
    img: ccnaImg,
    category: "Networking",
    syllabus: [
      "Networking Basics",
      "Routing & Switching",
      "LAN/WAN Concepts",
      "VLANs & Trunking",
      "Network Troubleshooting"
    ],
    projects: ["Configure Routers & Switches", "Simulated Network Setup"],
    reviews: [{ name: "Amit", rating: 5, text: "Great foundation for networking careers." }],
    videos: [],
    pdfs: [],
    liveClassLink: "https://zoom.us/j/3030303030",
    liveClassTime: { type: "scheduled", date: "", time: "6:30 PM" },
    featured: true,
  },
  {
    id: "cloud1",
    title: "Cloud Computing",
    short: "Learn cloud concepts, services, and deployment strategies for AWS, Azure, and GCP.",
    price: 599,
    level: "Beginner → Advanced",
    duration: "110+ hours",
    img: cloudImg,
    category: "Cloud",
    syllabus: [
      "Cloud Fundamentals",
      "AWS Services: EC2, S3, IAM",
      "Azure Basics",
      "GCP Overview",
      "Deployment & Scalability"
    ],
    projects: ["Deploy WebApp on AWS", "Cloud Monitoring Dashboard"],
    reviews: [{ name: "Priya", rating: 5, text: "Cloud concepts made easy to understand." }],
    videos: [],
    pdfs: [],
    liveClassLink: "https://zoom.us/j/4040404040",
    liveClassTime: { type: "scheduled", date: "", time: "7:00 PM" },
    featured: true,
  },
  {
    id: "soc1",
    title: "SOC Analyst",
    short: "Become a Security Operations Center (SOC) analyst and monitor cyber threats professionally.",
    price: 599,
    level: "Intermediate → Advanced",
    duration: "100+ hours",
    img: socImg,
    category: "Cyber Security",
    syllabus: [
      "SOC Fundamentals",
      "SIEM Tools & Dashboards",
      "Threat Intelligence",
      "Incident Management",
      "Monitoring & Reporting"
    ],
    projects: ["SOC Monitoring Lab", "Incident Response Simulation"],
    reviews: [{ name: "Rohit", rating: 5, text: "Practical SOC knowledge gained." }],
    videos: [],
    pdfs: [],
    liveClassLink: "https://zoom.us/j/5050505050",
    liveClassTime: { type: "scheduled", date: "20 Oct 2025", time: "6:00 PM" },
    featured: true,
  },
  {
    id: "fe1",
    title: "Frontend Developer",
    short: "Learn HTML, CSS, JavaScript, and modern frameworks to build beautiful websites.",
    price: 499,
    level: "Beginner → Advanced",
    duration: "120+ hours",
    img: frontendImg,
    category: "Web Development",
    syllabus: ["HTML & CSS", "JavaScript", "React", "Responsive Design", "UI/UX Basics"],
    projects: ["Portfolio Website", "Landing Page", "React SPA"],
    reviews: [{ name: "Simran", rating: 5, text: "Loved building projects in React." }],
    videos: [],
    pdfs: [],
    liveClassLink: "https://zoom.us/j/6060606060",
    liveClassTime: { type: "scheduled", date: "22 Oct 2025", time: "6:30 PM" },
    featured: true,
  },
  {
    id: "be1",
    title: "Backend Developer",
    short: "Learn Node.js, Express, Databases, and server-side programming for real-world apps.",
    price: 499,
    level: "Beginner → Advanced",
    duration: "100+ hours",
    img: backendImg,
    category: "Web Development",
    syllabus: ["Node.js & Express", "REST APIs", "MongoDB CRUD", "Authentication & Security"],
    projects: ["Blog API", "E-commerce Backend"],
    reviews: [{ name: "Amit", rating: 5, text: "Backend concepts are explained clearly." }],
    videos: [],
    pdfs: [],
    liveClassLink: "https://zoom.us/j/7070707070",
    liveClassTime: { type: "scheduled", date: "25 Oct 2025", time: "7:00 PM" },
    featured: true,
  },
  {
    id: "fsd1",
    title: "Full Stack Development",
    short: "Combine frontend and backend skills to build complete web applications.",
    price: 699,
    level: "Beginner → Advanced",
    duration: "150+ hours",
    img: fullstackImg,
    category: "Web Development",
    syllabus: ["HTML, CSS & JS", "React & Redux", "Node.js & Express", "MongoDB CRUD", "Deployment"],
    projects: ["Portfolio Website", "Blog App", "E-commerce Site"],
    reviews: [{ name: "Neha", rating: 5, text: "Got my first fullstack job!" }],
    videos: [],
    pdfs: [],
    liveClassLink: "https://zoom.us/j/8080808080",
    liveClassTime: { type: "scheduled", date: "28 Oct 2025", time: "6:00 PM" },
    featured: true,
  },
  {
    id: "da1",
    title: "Data Analytics",
    short: "Analyze data using Python, Excel, SQL, and visualization tools for business insights.",
    price: 599,
    level: "Beginner → Advanced",
    duration: "100+ hours",
    img: dataAnalyticsImg,
    category: "Data Science",
    syllabus: ["Excel Basics", "SQL Queries", "Python for Data Analysis", "Visualization with Tableau/PowerBI"],
    projects: ["Sales Data Dashboard", "Customer Insights Report"],
    reviews: [{ name: "Raj", rating: 4, text: "Good practical exercises." }],
    videos: [],
    pdfs: [],
    liveClassLink: "https://zoom.us/j/9090909090",
    liveClassTime: { type: "scheduled", date: "30 Oct 2025", time: "6:00 PM" },
    featured: true,
  },
  {
    id: "ds1",
    title: "Data Science",
    short: "Learn Python, statistics, machine learning, and data visualization for data science projects.",
    price: 799,
    level: "Intermediate → Advanced",
    duration: "150+ hours",
    img: dataScienceImg,
    category: "Data Science",
    syllabus: ["Python & Libraries", "Statistics", "Machine Learning", "Data Visualization", "Projects"],
    projects: ["Predictive Model", "Data Analysis Report"],
    reviews: [{ name: "Simran", rating: 5, text: "Perfect for data science beginners." }],
    videos: [],
    pdfs: [],
    liveClassLink: "https://zoom.us/j/1010101011",
    liveClassTime: { type: "upcoming", date: "02 Nov 2025", time: "6:00 PM" },
    featured: true,
  },
  {
  id: "cyber2",
  title: "OSINT + VAPT + Bug Bounty",
  short: "Master Open Source Intelligence, Vulnerability Assessment, Penetration Testing, and Bug Bounty hunting in one complete course.",
  price: 799,
  level: "Intermediate → Advanced",
  duration: "150+ hours",
  img: OSINT, // Use any suitable image
  category: "Cyber Security",
  syllabus: [
    "OSINT Tools & Techniques",
    "Social Media & Domain Reconnaissance",
    "Dark Web Research",
    "Vulnerability Assessment Basics",
    "Penetration Testing Methodologies",
    "Web & Network Security Testing",
    "Bug Bounty Hunting Techniques",
    "Reporting & Remediation"
  ],
  projects: [
    "OSINT Investigation Report",
    "Network Pen Test Simulation",
    "Bug Bounty Live Hunt"
  ],
  reviews: [
    { name: "Rohan", rating: 5, text: "Practical and comprehensive course covering all advanced cyber topics." }
  ],
  videos: [
    { title: "Introduction to OSINT", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" },
    { title: "VAPT Basics", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" },
    { title: "Bug Bounty Essentials", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" }
  ],
  pdfs: [
    { title: "Complete Cyber Security Guide", file: "/pdfs/cybersecurity.pdf", type: "pdf" }
  ],
  liveClassLink: "https://zoom.us/j/1010101010",
  liveClassTime: { type: "scheduled", date: "25 Oct 2025", time: "6:00 PM" },
  featured: true,
},




];

export default courses;
