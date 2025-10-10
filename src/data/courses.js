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
  id: "linux1",
  title: "Linux Administration",
  short: "Become a professional Linux Administrator by mastering system setup, configuration, and server management.",
  price: 5999,
  discount: 75, // 50% discount
  level: "Beginner → Advanced",
  duration: "100+ hours",
  img: linux,
  category: "DevOps",
  syllabus: [
    {
      title: "Introduction to Linux",
      details: "History of UNIX and Linux, differences between distributions (RHEL, CentOS, Ubuntu, Fedora), and open source concepts. Duties and responsibilities of a Linux System Administrator."
    },
    {
      title: "Command Line Interface (CLI) Mastery",
      details: "Accessing the shell prompt, basic commands (ls, cd, pwd, cp, mv, rm, mkdir), input/output redirection (> , >> , | , 2>), file editing using vi/vim/nano, using local system documentation (man, info)."
    },
    {
      title: "File System Hierarchy",
      details: "Linux directory structure (/, /etc, /var, /home, /usr, /proc, /dev), file types and attributes, creating, managing, and navigating files and directories."
    },
    {
      title: "User and Group Management",
      details: "Creating, modifying, deleting user and group accounts (useradd, usermod, groupadd), managing passwords, granting superuser privileges (su, sudo)."
    },
    {
      title: "File Permissions and Security",
      details: "Standard Linux permissions (rwx), changing permissions and ownership (chmod, chown, chgrp), special permissions (SUID, SGID, Sticky bit), Access Control Lists (ACLs)."
    },
    {
      title: "Process Management",
      details: "Monitoring system processes (ps, top, htop), managing processes (kill, stop, background/foreground), controlling service daemons (systemctl), scheduling tasks (cron, at)."
    },
    {
      title: "Package Management",
      details: "Installing, updating, querying, removing software packages. Using native package managers (RPM/YUM/DNF for Red Hat/CentOS/Fedora; APT/DPKG for Debian/Ubuntu), configuring and managing software repositories."
    },
    {
      title: "Disk and Storage Management",
      details: "Disk partitioning (MBR/GPT), creating and managing file systems (ext4, xfs, vfat), mounting/unmounting filesystems, Logical Volume Manager (LVM) basics, backup and recovery strategies."
    },
    {
      title: "Networking Basics",
      details: "TCP/IP fundamentals, configuring network interfaces (static/DHCP), troubleshooting tools (ping, traceroute, netstat, ss), managing network services with systemctl/NetworkManager."
    },
    {
      title: "System Security",
      details: "Implementing/configuring Firewalls (iptables, firewalld), SELinux/AppArmor basics, securing SSH access, basic security hardening practices."
    },
    {
      title: "Shell Scripting & Automation",
      details: "Introduction to Bash scripting, variables, loops (for, while), conditional statements (if, case), automating administrative tasks with scripts."
    },
    {
      title: "Virtualization and Containers",
      details: "Understanding Virtual Machines (VMs), basic container concepts, introduction to Docker/Podman, deploying simple containers."
    },
    {
      title: "Service Management & Troubleshooting",
      details: "Managing system services (start, stop, restart, status), troubleshooting boot and system issues, log analysis (journalctl, /var/log), monitoring system performance (CPU, memory, disk I/O, network)."
    }
  ],
  projects: ["Server Setup Lab", "Automation Scripts", "System Monitoring Dashboard"],
  reviews: [
    { name: "Amit", rating: 5, text: "Linux concepts are explained clearly and practically." }
  ],
  videos: [
    { title: "Introduction to Linux Administration", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" },
    { title: "Shell Scripting Basics", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" }
  ],
  pdfs: [
    { title: "Linux Admin Handbook", file: "/pdfs/linuxadmin.pdf", type: "pdf" }
  ],
  liveClassLink: "https://zoom.us/j/1111111111",
  liveClassTime: { type: "scheduled", date: "25 Oct 2025", time: "6:00 PM" },
  featured: true,
},

{
  id: "cs1",
  title: "Cyber Security (Advanced)",
  short: "Master advanced cybersecurity concepts, ethical hacking, and threat mitigation.",
  price: 34999,
  discount: 75, // 30% discount
  level: "Intermediate → Advanced",
  duration: "120+ hours",
  img: cyberImg,
  category: "Cyber Security",
  syllabus: [
    {
      title: "Introduction & Ethics",
      details: "Overview of cybersecurity and ethical hacking. Concepts of CIA Triad (Confidentiality, Integrity, Availability). Types of hackers (Black Hat, White Hat, Grey Hat). Ethical Hacking definition, scope, limitations, and legal compliance (GDPR, HIPAA). Difference between Penetration Testing, Vulnerability Assessment, and Security Audit."
    },
    {
      title: "Networking Fundamentals",
      details: "OSI and TCP/IP Models, IP addressing, subnetting. Core protocols (TCP, UDP, HTTP, HTTPS, DNS, DHCP, ARP). Network devices (Routers, Switches, Firewalls, IDS/IPS). Wireless network security (WEP, WPA/WPA2)."
    },
    {
      title: "Operating Systems for Security",
      details: "Linux fundamentals with emphasis on Kali Linux. Linux CLI, file permissions, services, and Windows security concepts including architecture, file system, and security configurations."
    },
    {
      title: "Cryptography",
      details: "Encryption types (Symmetric, Asymmetric), Hashing functions (MD5, SHA), Public Key Infrastructure (PKI), and Digital Signatures."
    },
    {
      title: "Reconnaissance & Footprinting",
      details: "Information gathering techniques: passive and active reconnaissance. Google Dorking, Whois & DNS footprinting, network and organization mapping using OSINT."
    },
    {
      title: "Scanning & Enumeration",
      details: "Network scanning: host discovery, port scanning (Nmap). Vulnerability scanning (Nessus, OpenVAS). Enumeration of usernames, shares, services. Banner grabbing to identify software versions."
    },
    {
      title: "Gaining Access (Exploitation)",
      details: "Password cracking (brute force, dictionary, rainbow tables), privilege escalation. Malware threats: Viruses, Worms, Trojans, Ransomware, Rootkits. Sniffing network traffic with Wireshark. Social engineering techniques (phishing, vishing, physical bypass). Denial of Service (DoS/DDoS) attacks."
    },
    {
      title: "Maintaining Access & Covering Tracks",
      details: "Maintaining access using backdoors, rootkits, and trojans. Clearing logs, modifying timestamps, and using steganography for hiding activities."
    },
    {
      title: "Web Application Hacking",
      details: "Understanding web servers (IIS, Apache, Nginx). OWASP Top 10 vulnerabilities. SQL Injection (SQLi), Cross-Site Scripting (XSS), XML External Entities (XXE). Authentication & authorization flaws, session hijacking, CSRF, file upload vulnerabilities."
    },
    {
      title: "Wireless Hacking",
      details: "Wireless network security concepts. Cracking WEP/WPA/WPA2 keys. Wireless Denial of Service and rogue access point attacks."
    },
    {
      title: "Cloud Computing Security",
      details: "Cloud security architecture for IaaS, PaaS, SaaS. Common cloud vulnerabilities and misconfigurations (e.g., S3 bucket). Security considerations in AWS, Azure, and GCP."
    },
    {
      title: "IoT & OT Security",
      details: "IoT device security, network segregation, SCADA and ICS system threats. Operational Technology security considerations."
    },
    {
      title: "Evading Defenses",
      details: "Firewall and IDS/IPS evasion techniques: fragmentation, protocol manipulation. Honeypot evasion and stealth tactics."
    },
    {
      title: "Mobile Platform Hacking",
      details: "Security models for Android and iOS. Application security testing, reverse engineering, and traffic analysis."
    },
    {
      title: "Security Architecture & Governance",
      details: "Defense-in-Depth, Network Segmentation, Zero Trust models. Implementing firewalls, proxies, IDS/IPS. Governance, risk management, compliance standards (ISO 27001, NIST, CIS)."
    },
    {
      title: "Incident Response & Disaster Recovery",
      details: "Incident Management Life Cycle: Preparation, Detection, Containment, Eradication, Recovery. Security Information and Event Management (SIEM). Business Continuity Planning and data backup strategies."
    },
    {
      title: "Security Auditing",
      details: "Conducting security assessments and compliance checks. Creating detailed penetration testing reports with findings, risk ratings, and recommendations."
    }
  ],
  projects: ["Penetration Testing Lab", "Security Audit Report", "Attack Simulation"],
  reviews: [{ name: "Rohit", rating: 5, text: "Learned advanced techniques effectively." }],
  videos: [
    { title: "Introduction to Ethical Hacking", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" },
    { title: "Advanced Threat Analysis", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: "video" }
  ],
  pdfs: [{ title: "Cyber Security Guide", file: "/pdfs/cybersecurity.pdf", type: "pdf" }],
  liveClassLink: "https://zoom.us/j/1010101010",
  liveClassTime: { type: "scheduled", date: "daily", time: "" },
  featured: true,
},
{
  id: "ns1",
  title: "Network Security",
  short: "Learn how to secure networks, configure firewalls, and monitor traffic effectively.",
  price: 24000,
  discount: 75, // 25% discount
  level: "Beginner → Advanced",
  duration: "100+ hours",
  img: networkImg,
  category: "Cyber Security",
  syllabus: [
    {
      title: "Network Fundamentals",
      details: "Covers the basics of computer networks including definitions, components, and types (LAN, WAN, MAN). Network topologies (Bus, Star, Ring, Mesh) and devices (Routers, Switches, Hubs, Bridges, Repeaters, Firewalls, Access Points). OSI Model (7 layers) and TCP/IP Model (4/5 layers) with layer functions."
    },
    {
      title: "Addressing and Protocols",
      details: "IP Addressing (IPv4 and IPv6), Subnetting, VLSM, MAC addressing, ARP. Core protocols: TCP vs. UDP, ICMP. Understanding routing concepts and protocols (Static, Dynamic, RIP, OSPF, BGP)."
    },
    {
      title: "Transport and Application Layers",
      details: "TCP three-way handshake, connection management, port numbers, congestion control. Common application protocols including HTTP, DNS, DHCP, FTP, SMTP, POP3, IMAP. Network access technologies: Ethernet (802.3), Wireless LAN (802.11), VLANs."
    },
    {
      title: "Security Fundamentals",
      details: "CIA Triad (Confidentiality, Integrity, Availability). Authentication, Authorization, Non-repudiation, Accountability. Threats, attacks (DoS/DDoS, MITM, Phishing, Social Engineering), vulnerabilities, hacker types (Black Hat, White Hat, Gray Hat), Cyber Kill Chain."
    },
    {
      title: "Cryptography and Secure Protocols",
      details: "Cryptographic primitives: Symmetric (DES, 3DES, AES) and Asymmetric (RSA, Diffie-Hellman, ECC) encryption. Hashing (MD5, SHA), digital signatures, certificates (X.509), Public Key Infrastructure (PKI). Secure network protocols: TLS/SSL, SSH, PGP/S/MIME."
    },
    {
      title: "Firewalls and Access Control",
      details: "Types of firewalls (Packet Filtering, Stateful, Proxy, Next-Generation) and DMZ setup. Authentication, Authorization, Accounting (AAA), Identity and Access Management (IAM), Network Access Control (NAC)."
    },
    {
      title: "Intrusion Detection & Prevention Systems (IDS/IPS)",
      details: "Signature-based vs. anomaly-based detection, network-based vs. host-based systems. Configuration, monitoring, and alert management."
    },
    {
      title: "Virtual Private Networks (VPNs)",
      details: "VPN types: Remote-Access and Site-to-Site. VPN protocols (IPsec, SSL/TLS). Secure tunneling, encryption, and access management."
    },
    {
      title: "Operational Security & System Hardening",
      details: "OS hardening for Windows and Linux, patch management, antivirus and anti-malware solutions, system configuration best practices."
    },
    {
      title: "Vulnerability Assessment & Penetration Testing",
      details: "Penetration testing methodologies, vulnerability scanning using tools like Nmap, Nessus, and OpenVAS. Reporting and risk assessment."
    },
    {
      title: "Network Monitoring & Analysis",
      details: "Traffic analysis using Wireshark, log management, SIEM (Security Information and Event Management), anomaly detection, and performance monitoring."
    },
    {
      title: "Disaster Recovery & Business Continuity",
      details: "Backup strategies, redundancy planning, recovery techniques, and ensuring continuity of operations in case of incidents."
    },
    {
      title: "Security Policies & Awareness",
      details: "Creating, implementing, and enforcing security policies. User training, awareness programs, ethics, and legal compliance in cybersecurity."
    }
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
  price: 4999,
  discount: 30, // 50% discount
  level: "Beginner → Intermediate",
  duration: "90+ hours",
  img: ccnaImg,
  category: "Networking",
  syllabus: [
    {
      title: "Network Fundamentals",
      details: "This module covers the foundational concepts of networking. Learners will understand the role and functions of key network components such as routers, L2/L3 switches, firewalls, access points, controllers, and endpoints. It also covers network topologies (two-tier, three-tier, spine-leaf, WAN, SOHO), physical interfaces and cabling (fiber, copper, Ethernet), interface issues (collisions, errors, duplex/speed mismatch), TCP vs UDP differences, IPv4 and IPv6 addressing and subnetting, wireless principles including Wi-Fi channels and encryption, as well as virtualization fundamentals like server virtualization, containers, and VRFs."
    },
    {
      title: "Network Access",
      details: "This section focuses on connecting devices to networks using layer 2 technologies. Topics include VLAN creation and verification (data and voice VLANs), inter-VLAN connectivity, trunking and 802.1Q, Layer 2 discovery protocols like CDP and LLDP, EtherChannel configuration and verification using LACP, Spanning Tree Protocol (Rapid PVST+) including root port, root bridge, port states, PortFast, and Cisco wireless architectures including access point modes. Learners also practice setting up WLANs with proper security and management access."
    },
    {
      title: "IP Connectivity",
      details: "This is the core routing and addressing module. Students learn how routers make forwarding decisions, interpret routing tables, and configure static routes (IPv4 & IPv6). The module covers dynamic routing with OSPFv2 single-area configuration and verification. First Hop Redundancy Protocols (HSRP, VRRP, GLBP) are also explained to ensure network high availability. Real-life examples of routing decisions and troubleshooting scenarios are included."
    },
    {
      title: "IP Services",
      details: "This module introduces essential network services. Topics include NAT (static, dynamic, PAT) configuration and verification, NTP client/server setup, DHCP and DNS services, SNMP for monitoring, Syslog setup, DHCP client and relay agent configuration, Quality of Service (QoS) concepts including marking, shaping, and policing, and remote device access via SSH and TFTP/FTP. Learners also practice configuring and verifying these services on routers and switches."
    },
    {
      title: "Security Fundamentals",
      details: "Students learn the core principles of network security. Topics include understanding threats, vulnerabilities, and mitigation techniques, securing device access with strong password policies, configuring remote access and VPNs, implementing Access Control Lists (ACLs), layer 2 security features like DHCP snooping, Dynamic ARP Inspection (DAI), port security, wireless security protocols (WPA/WPA2/WPA3), and the AAA model (Authentication, Authorization, Accounting). Emphasis is on both proactive defense and monitoring."
    },
    {
      title: "Automation and Programmability",
      details: "This module introduces modern software-defined networking and automation. Students learn the impact of automation on network operations, differences between traditional and controller-based networking, software-defined architectures (Overlay, Underlay, Fabric), and the separation of control and data planes. REST APIs and Northbound/Southbound API concepts are explained. Configuration management tools like Puppet, Chef, and Ansible are introduced, and learners practice interpreting JSON data for network automation tasks."
    }
  ],
  projects: [
    "Configure Routers & Switches",
    "Simulated Network Setup",
    "Implement VLANs and Trunks",
    "Configure Routing and NAT",
    "Setup and Secure Wireless Networks"
  ],
  reviews: [{ name: "Amit", rating: 5, text: "Great foundation for networking careers." }],
  videos: [],
  pdfs: [],
  liveClassLink: "https://zoom.us/j/3030303030",
  liveClassTime: { type: "scheduled", date: "", time: "6:30 PM" },
  featured: true,
},
  {
  id: "cloud1",
  title: "Cloud ",
  short: "Learn cloud concepts, services, and deployment strategies for AWS, Azure, and GCP.",
  price: 24999,
  discount: 70, // 30% discount
  level: "Beginner → Advanced",
  duration: "110+ hours",
  img: cloudImg,
  category: "Cloud",
  syllabus: [
    {
      title: "Cloud Fundamentals",
      details: "Introduction to cloud computing, its essential characteristics like on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. Covers history, evolution, and benefits of cloud computing compared to traditional IT infrastructure."
    },
    {
      title: "Cloud Service Models",
      details: "Detailed overview of IaaS (Infrastructure as a Service), PaaS (Platform as a Service), SaaS (Software as a Service), and FaaS/Serverless Computing. Explains use cases, advantages, and differences between each model."
    },
    {
      title: "AWS Services: EC2, S3, IAM",
      details: "Learn AWS core services. EC2: Launch, configure, and manage virtual servers. S3: Object storage, buckets, and policies. IAM: Create users, groups, roles, manage permissions, and implement Multi-Factor Authentication (MFA) for secure access."
    },
    {
      title: "Azure Basics",
      details: "Introduction to Microsoft Azure platform. Covers Azure portal navigation, virtual machines, storage accounts, Azure Active Directory, networking basics, and resource management. Students learn deploying and managing basic cloud services on Azure."
    },
    {
      title: "GCP Overview",
      details: "Overview of Google Cloud Platform. Covers key services like Compute Engine, Cloud Storage, Cloud Functions, IAM, and networking basics. Students understand deploying workloads and managing resources on GCP."
    },
    {
      title: "Deployment & Scalability",
      details: "Covers deployment strategies for cloud applications. Includes scaling techniques (vertical and horizontal), load balancing, auto-scaling groups, high availability, monitoring, logging, and best practices for resilient and cost-effective cloud solutions."
    },
    {
      title: "Cloud Security",
      details: "Focus on security in cloud computing. Covers the shared responsibility model, identity and access management (IAM), data encryption, secure network configuration (Security Groups, NACLs), monitoring and auditing (CloudWatch, CloudTrail), and best practices for protecting cloud resources."
    },
    {
      title: "Cloud Networking",
      details: "Introduction to networking in the cloud. Covers VPCs (Virtual Private Clouds), subnets, routing tables, internet gateways, VPN connections, and security groups. Emphasis on designing and configuring secure, scalable network architectures in cloud environments."
    },
    {
      title: "Advanced Cloud Concepts",
      details: "Covers DevOps practices in cloud computing, Infrastructure as Code (IaC), CI/CD pipelines, containerization with Docker and Kubernetes, multi-cloud and hybrid-cloud strategies, and integration of cloud services with analytics and machine learning workloads."
    }
  ],
  projects: [
    "Deploy WebApp on AWS",
    "Cloud Monitoring Dashboard",
    "Setup a Multi-tier Application",
    "Implement Serverless Functions",
    "Configure IAM and Secure Cloud Resources"
  ],
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
  price: 5999,
  discount: 30, // 30% discount
  level: "Intermediate → Advanced",
  duration: "100+ hours",
  img: socImg,
  category: "Cyber Security",
  syllabus: [
    {
      title: "SOC Fundamentals",
      details: "Introduction to SOC and cybersecurity concepts, including the CIA Triad (Confidentiality, Integrity, Availability), types of security controls, and differences between cybersecurity and information security. Explains the SOC role, tiers, workflow, and processes."
    },
    {
      title: "Threat Landscape & Cyber Defense Frameworks",
      details: "Understanding common cyber threats such as malware, phishing, ransomware, insider threats, DoS/DDoS attacks, and Advanced Persistent Threats (APTs). Introduction to cyber defense frameworks including Cyber Kill Chain, MITRE ATT&CK framework, and Diamond Model for intrusion analysis."
    },
    {
      title: "Networking Fundamentals for SOC",
      details: "Covers TCP/IP and OSI models, common protocols (HTTP, DNS, FTP, SSH, ICMP) and ports, network devices (routers, switches, firewalls, IDS/IPS), IP addressing, and subnetting. Essential networking knowledge for monitoring and analyzing traffic."
    },
    {
      title: "Operating Systems & Endpoint Security",
      details: "Basics of Windows and Linux operating systems, logging mechanisms, file systems, and command-line skills (bash, PowerShell). Introduction to endpoint protection tools, EDR platforms, antivirus, and system hardening practices."
    },
    {
      title: "SIEM Tools & Alert Analysis",
      details: "Introduction to Security Information and Event Management (SIEM) architecture and log management. Practical usage of tools like Splunk, QRadar, and ELK stack for log collection, correlation, rule creation, and alert analysis. Distinguishing true vs. false positives and alert prioritization."
    },
    {
      title: "Incident Response & Threat Intelligence",
      details: "Incident Response lifecycle: Preparation, Identification, Containment, Eradication, Recovery, and Post-Incident Review. Threat Intelligence concepts, threat actor analysis, Indicators of Compromise (IoCs), threat intelligence platforms, and basic digital forensics and malware analysis techniques."
    },
    {
      title: "Monitoring & Reporting",
      details: "Network and endpoint log analysis using tools like Wireshark and tcpdump. Creating security reports, dashboards, and maintaining documentation for audit purposes. Learning ticketing systems and escalation processes for incident handling."
    },
    {
      title: "Advanced SOC Skills",
      details: "Introduction to vulnerability assessment using tools like Nmap and Nessus, threat hunting methodologies, scripting for automation (Python/PowerShell), and monitoring cloud environments (AWS, Azure, GCP). Focus on proactive detection and remediation strategies."
    },
    {
      title: "Professional & Soft Skills",
      details: "Develop critical thinking, problem-solving, teamwork, and effective communication skills. Learn proper reporting, documentation, and collaboration with Tier 2/3 analysts and IT teams to function efficiently in a professional SOC environment."
    }
  ],
  projects: [
    "SOC Monitoring Lab",
    "Incident Response Simulation",
    "Threat Hunting Lab",
    "SIEM Configuration and Alert Tuning",
    "Network Traffic Analysis Practice"
  ],
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
  price: 3000,
  discount:55, // 50% discount
  level: "Beginner → Advanced",
  duration: "120+ hours",
  img: frontendImg,
  category: "Web Development",
  syllabus: [
    {
      title: "HTML Fundamentals",
      details: "Learn the structure of web pages using HTML. Covers tags, elements, attributes, semantic HTML5 elements (<header>, <footer>, <article>, <section>), forms, input validation, media embedding (images, audio, video), links, and lists."
    },
    {
      title: "CSS Basics & Advanced Styling",
      details: "Covers CSS syntax, selectors, specificity, and the box model. Includes positioning (static, relative, absolute, fixed, sticky), Flexbox and Grid layouts, responsive design using media queries, transitions, animations, pseudo-classes/elements, and basic preprocessors like Sass/Less."
    },
    {
      title: "Tailwind CSS",
      details: "Introduction to utility-first CSS framework. Covers utility classes for layout, spacing, typography, colors, and responsive design using Tailwind's breakpoints (sm:, md:, lg:). Includes customizing theme, extending Tailwind configuration, and building modern, responsive layouts quickly."
    },
    {
      title: "JavaScript Fundamentals",
      details: "Core JS concepts including variables, data types, operators, conditionals, loops, functions (including arrow functions and closures), arrays and objects (manipulation and iteration), DOM manipulation, event handling, ES6+ features (destructuring, modules, spread/rest operators), and asynchronous JS (callbacks, promises, async/await)."
    },
    {
      title: "Advanced JavaScript & Browser APIs",
      details: "Focuses on working with browser APIs such as Fetch API, LocalStorage, SessionStorage, working with JSON, error handling, and implementing dynamic content. Introduction to JavaScript design patterns and best practices for writing modular code."
    },
    {
      title: "ReactJS Fundamentals",
      details: "Introduction to React: Components (functional & class), JSX, props, state, hooks (useState, useEffect). Covers component composition, conditional rendering, event handling, forms, controlled/uncontrolled components, and basic routing with React Router."
    },
    {
      title: "Advanced ReactJS",
      details: "State management using Context API and introduction to Redux, integrating APIs (fetch/axios), handling side effects, building reusable components, and advanced routing techniques. Covers performance optimization, code splitting, and lazy loading."
    },
    {
      title: "Git, GitHub & Version Control",
      details: "Fundamentals of Git: initializing repositories, cloning, committing, branching, merging, resolving conflicts. Working with remote repositories on GitHub, pull requests, collaboration workflow, and best practices for version control in real projects."
    },
    {
      title: "Deployment & Best Practices",
      details: "Covers building, bundling, and deploying projects to platforms like Netlify, Vercel, or GitHub Pages. Includes environment configuration, production optimization, responsive testing, SEO basics, and ensuring cross-browser compatibility. Also includes workflow automation and continuous integration basics."
    }
  ],
  projects: [
    "Portfolio Website",
    "Landing Page",
    "React SPA (Single Page Application)",
    "Tailwind Responsive Layout",
    "GitHub-hosted Project Deployment"
  ],
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
  price: 3999,
  discount: 50, // 50% discount
  level: "Beginner → Advanced",
  duration: "100+ hours",
  img: backendImg,
  category: "Web Development",
  syllabus: [
    {
      title: "Introduction to Backend Development & Node.js",
      details: "Overview of backend development, server vs client-side, and role of backend developers. Introduction to Node.js, event-driven architecture, non-blocking I/O, modules, npm (Node Package Manager), and setting up development environment."
    },
    {
      title: "JavaScript Advanced for Backend",
      details: "Deep dive into advanced JavaScript concepts required for backend: ES6+ features, asynchronous programming (callbacks, promises, async/await), modules, error handling, and working with JSON and file system operations."
    },
    {
      title: "Express.js Framework",
      details: "Learn Express.js for building backend applications. Covers routing, middleware, handling requests/responses, error handling, template engines, static files, and organizing project structure for scalability."
    },
    {
      title: "RESTful APIs & CRUD Operations",
      details: "Designing REST APIs, HTTP methods (GET, POST, PUT, DELETE, PATCH), status codes, request parameters, query strings, headers, and building CRUD operations using Express. Includes best practices for API development and testing using Postman or Insomnia."
    },
    {
      title: "Databases: MongoDB & Mongoose",
      details: "Introduction to NoSQL databases. Covers MongoDB installation, collections, documents, CRUD operations, indexing, aggregation, and data modeling. Using Mongoose for schema definitions, validation, and connecting Express apps to MongoDB."
    },
    {
      title: "Authentication & Authorization",
      details: "Implementing secure authentication using JWT (JSON Web Tokens), OAuth basics, password hashing with bcrypt, role-based access control, session management, and protecting routes in Express applications."
    },
    {
      title: "Security, Error Handling & Logging",
      details: "Backend security best practices including input validation, preventing SQL/NoSQL injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), setting HTTP headers, CORS, error handling strategies, logging requests/errors, and monitoring backend apps."
    },
    {
      title: "Testing & Deployment",
      details: "Unit testing and integration testing using Jest and Supertest, writing test cases for APIs. Deployment of backend applications on cloud platforms like Heroku, Vercel, or AWS. Introduction to environment variables, configuration management, and production readiness."
    },
    {
      title: "Advanced Backend Concepts & Microservices",
      details: "Introduction to microservices architecture, event-driven backend using Node.js, message brokers (RabbitMQ/Kafka basics), caching strategies (Redis), performance optimization, scaling Node.js apps, and connecting multiple services via REST or GraphQL APIs."
    }
  ],
  projects: [
    "Blog API with CRUD operations",
    "E-commerce Backend with authentication and payment integration",
    "RESTful API for social media app",
    "Microservices-based sample project"
  ],
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
  short: "Combine frontend and backend skills to build complete modern web applications.",
  price: 9999,
  discount: 30, // 30% discount
  level: "Beginner → Advanced",
  duration: "150+ hours",
  img: fullstackImg,
  category: "Web Development",
  syllabus: [
    {
      title: "HTML5 & Semantic Markup",
      details: "Basics of HTML5, semantic elements (<header>, <footer>, <section>, <article>), forms, tables, media elements, accessibility, SEO basics, and best practices."
    },
    {
      title: "CSS3 & Tailwind CSS",
      details: "Cascading styles, box model, Flexbox, Grid, responsive design with media queries. Tailwind CSS utility-first framework, responsive prefixes, customization, and building UI components efficiently."
    },
    {
      title: "JavaScript & TypeScript for Frontend",
      details: "Core JS: ES6+ features, arrays, objects, OOP concepts, DOM manipulation, async JS (callbacks, promises, async/await). TypeScript basics: types, interfaces, enums, and integrating TypeScript with React."
    },
    {
      title: "React.js & Advanced Frontend",
      details: "React components, JSX, props, state, hooks (useState, useEffect, useReducer, useContext), routing with React Router, form handling, validation, state management with Redux Toolkit, Context API, and component libraries (Chakra UI, Material UI)."
    },
    {
      title: "Node.js & Express.js Backend",
      details: "Node.js runtime, npm/yarn, event loop, modules. Express.js for building REST APIs, middleware, routing, error handling, project structure, environment variables, logging with Morgan."
    },
    {
      title: "Databases: MongoDB & PostgreSQL",
      details: "MongoDB basics, CRUD operations, Mongoose ODM, schema design, validation, indexing. Introduction to relational databases with PostgreSQL, tables, relationships, queries, and connecting Node.js backend."
    },
    {
      title: "Authentication & Security",
      details: "User authentication & authorization with JWT, OAuth2 basics, bcrypt password hashing, role-based access control, secure headers, CORS, input validation, session management, and OWASP security principles."
    },
    {
      title: "API Development & GraphQL",
      details: "REST API design principles, HTTP methods, status codes, versioning. Introduction to GraphQL, defining schemas, queries, mutations, integrating GraphQL with Node.js backend."
    },
    {
      title: "Testing & Debugging",
      details: "Unit and integration testing with Jest, Supertest, React Testing Library. Debugging frontend & backend, logging, error handling, and monitoring app performance."
    },
    {
      title: "Deployment & DevOps Basics",
      details: "Building React app, deploying backend API. Hosting frontend on Vercel/Netlify, backend on AWS EC2, DigitalOcean, or Heroku. Introduction to CI/CD pipelines, environment variables, Docker basics, containerizing fullstack apps."
    },
    {
      title: "Cloud & Serverless Concepts",
      details: "Introduction to AWS services: S3 (storage), CloudFront (CDN), Lambda (serverless), DynamoDB (NoSQL), IAM. Deploying serverless functions, managing permissions, and monitoring cloud resources."
    },
    {
      title: "Advanced Topics & Projects",
      details: "Real-world project development integrating frontend, backend, and cloud. Microservices architecture basics, WebSockets for real-time apps, caching strategies with Redis, payment gateway integration, and version control with Git/GitHub."
    }
  ],
  projects: [
    "Portfolio Website (React + Tailwind + Hosting)",
    "Full Blog App (MERN + JWT + GraphQL + Cloud Deployment)",
    "E-commerce Platform (Frontend + Backend + Payment Integration + Docker Deployment)",
    "Real-time Chat App (WebSockets + Node.js + MongoDB)"
  ],
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
  price: 14999,
  discount: 50, // 25% discount
  level: "Beginner → Advanced",
  duration: "100+ hours",
  img: dataAnalyticsImg,
  category: "Data Science",
  syllabus: [
    {
      title: "Foundations and Core Concepts",
      details: "Introduction to Data Analytics, Data Analytics Lifecycle, types of data, data sources, data collection methods, data-driven decision-making, business acumen, data ethics, security, and privacy."
    },
    {
      title: "Business Analytics with Excel/Spreadsheets",
      details: "Basic and advanced functions (VLOOKUP, IF, Conditional Formatting), data organization, sorting, filtering, pivot tables and pivot charts, creating dashboards and reports."
    },
    {
      title: "SQL & Database Management",
      details: "Database concepts, relational models, basic SQL queries (SELECT, INSERT, UPDATE, DELETE), advanced queries (joins, subqueries, grouping), creating tables, views, and stored procedures."
    },
    {
      title: "Python for Data Analysis",
      details: "Python fundamentals (variables, data structures, control flow, functions), data manipulation with Pandas and NumPy, introduction to machine learning libraries (scikit-learn basics)."
    },
    {
      title: "R Programming (Optional/Alternative)",
      details: "R data structures and functions, statistical analysis packages (dplyr, ggplot2), basic data modeling, exploratory data analysis in R."
    },
    {
      title: "Statistics & Mathematical Foundations",
      details: "Descriptive statistics (mean, median, mode, variance, SD), data distributions, probability concepts, sampling, confidence intervals, hypothesis testing (t-tests, ANOVA, Chi-Square), correlation and simple linear regression."
    },
    {
      title: "Data Preparation & Exploratory Analysis",
      details: "Data cleaning (missing values, outliers, inconsistencies), data transformation (standardization, normalization), feature engineering, exploratory data analysis (EDA), identifying trends, anomalies, and relationships."
    },
    {
      title: "Data Visualization & Storytelling",
      details: "Data visualization with Tableau/Power BI, connecting to data sources, chart types (bar, line, scatter, map), building interactive dashboards, calculated fields, data storytelling, communicating insights effectively."
    },
    {
      title: "Advanced Analytics & Specializations",
      details: "Predictive analytics, introduction to machine learning (supervised vs. unsupervised), regression, classification, clustering, big data concepts (Hadoop, Spark), data warehousing (OLAP, ETL), time series analysis, cloud analytics (AWS, Azure, GCP)."
    },
    {
      title: "Capstone Project",
      details: "Comprehensive project applying all learned skills to real-world datasets for business insights and decision-making."
    }
  ],
  projects: [
    "Sales Data Dashboard",
    "Customer Insights Report"
  ],
  reviews: [
    { name: "Raj", rating: 4, text: "Good practical exercises." }
  ],
  videos: [],
  pdfs: [],
  liveClassLink: "https://zoom.us/j/9090909090",
  liveClassTime: { type: "scheduled", date: "30 Oct 2025", time: "6:00 PM" },
  featured: true
},
  {
  id: "ds1",
  title: "Data Science",
  short: "Learn Python, statistics, machine learning, and data visualization for data science projects.",
  price: 44999,
  discount: 70, // 30% discount
  level: "Intermediate → Advanced",
  duration: "150+ hours",
  img: dataScienceImg,
  category: "Data Science",
  syllabus: [
    {
      title: "Foundations: Mathematics & Statistics",
      details: "Linear Algebra (Matrices, Vectors, Eigenvalues), Calculus basics (optimization, gradients), Discrete Mathematics. Descriptive Statistics (Mean, Median, Mode, Variance, SD), Probability Theory (Normal, Binomial, Poisson), Inferential Statistics (Sampling, Confidence Intervals, Hypothesis Testing), Regression Analysis (Simple, Multiple, Logistic)."
    },
    {
      title: "Programming for Data Science",
      details: "Python fundamentals, NumPy, Pandas for data manipulation and analysis. Optional R programming for statistical analysis and visualization."
    },
    {
      title: "Data Wrangling & Preprocessing",
      details: "Data collection and acquisition, cleaning (missing values, outliers, inconsistent formats), transformation (scaling, normalization, encoding), feature engineering, and preparing data for analysis or modeling."
    },
    {
      title: "Exploratory Data Analysis (EDA) & Visualization",
      details: "Summarizing data, identifying patterns, anomalies, and relationships. Visualization with Matplotlib, Seaborn, Tableau, Power BI. Creating dashboards and effective data storytelling."
    },
    {
      title: "SQL & Databases",
      details: "Relational databases (SQL) for querying and managing structured data. NoSQL databases (MongoDB, Cassandra) for unstructured or semi-structured data."
    },
    {
      title: "Machine Learning Fundamentals",
      details: "Supervised and unsupervised learning, model evaluation (accuracy, precision, recall, F1, ROC), overfitting/underfitting, bias-variance tradeoff, cross-validation, ensemble methods (bagging, boosting)."
    },
    {
      title: "Supervised Learning Algorithms",
      details: "Classification (Decision Trees, Random Forests, SVM, KNN), Regression (Linear, Logistic), Gradient Boosting, XGBoost."
    },
    {
      title: "Unsupervised Learning Algorithms",
      details: "Clustering (K-Means, Hierarchical), Dimensionality Reduction (PCA), anomaly detection."
    },
    {
      title: "Advanced Topics: Deep Learning & AI",
      details: "Neural Networks, Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Transformers, NLP basics, text preprocessing, sentiment analysis, word embeddings (Word2Vec, BERT)."
    },
    {
      title: "Big Data & Cloud Computing",
      details: "Hadoop ecosystem, Apache Spark (PySpark), distributed computing. Basics of AWS, Azure, GCP for data storage, machine learning, and deployment."
    },
    {
      title: "Model Deployment & Professional Skills",
      details: "Deploying models using Flask/FastAPI, containerization with Docker, data ethics, GDPR/CCPA, bias/fairness, data security, stakeholder communication, and business-oriented data storytelling."
    },
    {
      title: "Capstone Projects",
      details: "Hands-on real-world projects integrating all skills, such as predictive modeling, customer behavior analysis, sales forecasting, and comprehensive data analysis reports."
    }
  ],
  projects: [
    "Predictive Model",
    "Data Analysis Report"
  ],
  reviews: [
    { name: "Simran", rating: 5, text: "Perfect for data science beginners." }
  ],
  videos: [],
  pdfs: [],
  liveClassLink: "https://zoom.us/j/1010101011",
  liveClassTime: { type: "upcoming", date: "02 Nov 2025", time: "6:00 PM" },
  featured: true
},
  {
  id: "cyber2",
  title: "OSINT + VAPT + Bug Bounty",
  short: "Master Open Source Intelligence, Vulnerability Assessment, Penetration Testing, and Bug Bounty hunting in one complete course.",
  price: 49990,
  discount: 90, // 90% discount (special offer)
  level: "Intermediate → Advanced",
  duration: "150+ hours",
  img: OSINT,
  category: "Cyber Security",
  syllabus: [
    {
      title: "Introduction to OSINT",
      details: "Understanding Open Source Intelligence (OSINT), its importance in cybersecurity, legal and ethical considerations, and the OSINT lifecycle."
    },
    {
      title: "OSINT Tools & Techniques",
      details: "Hands-on usage of popular OSINT tools such as Maltego, SpiderFoot, Shodan, Recon-ng. Techniques for information gathering, data mining, and footprinting."
    },
    {
      title: "Social Media & Domain Reconnaissance",
      details: "Extracting information from social networks (Facebook, Twitter, LinkedIn, Instagram), analyzing user footprints, domain research, WHOIS lookups, subdomain enumeration, and DNS reconnaissance."
    },
    {
      title: "Dark Web & Deep Web Research",
      details: "Introduction to Tor and anonymous browsing, searching for data on dark web marketplaces, forums, and leaks, and techniques for safe exploration and intelligence gathering."
    },
    {
      title: "Vulnerability Assessment (VA) Basics",
      details: "Understanding the VA process, scanning networks and applications for vulnerabilities using tools like Nmap, Nessus, OpenVAS. Prioritizing and documenting vulnerabilities."
    },
    {
      title: "Penetration Testing Methodologies",
      details: "Ethical hacking framework, stages of penetration testing (planning, scanning, exploitation, post-exploitation, reporting), and industry-standard methodologies (PTES, OWASP, NIST)."
    },
    {
      title: "Web Application Security Testing",
      details: "Hands-on testing of web applications for common vulnerabilities (OWASP Top 10): SQL injection, XSS, CSRF, authentication bypass, and security misconfigurations."
    },
    {
      title: "Network Security Testing",
      details: "Testing network infrastructure for weaknesses, scanning open ports, service enumeration, firewall evasion, sniffing, and wireless network penetration testing basics."
    },
    {
      title: "Bug Bounty Hunting Techniques",
      details: "Introduction to bug bounty programs, reconnaissance and target enumeration, reporting vulnerabilities, responsible disclosure, and real-world live bug bounty case studies."
    },
    {
      title: "Reporting & Remediation",
      details: "Writing professional penetration testing and OSINT reports, documenting findings, risk analysis, remediation recommendations, and communication with stakeholders."
    },
    {
      title: "Capstone Projects",
      details: "Practical hands-on projects: OSINT investigation report, network penetration test simulation, and live bug bounty hunt to integrate all learned skills in real-world scenarios."
    }
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
  featured: true
},

  

];

export default courses;
