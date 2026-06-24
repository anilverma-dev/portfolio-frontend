// Fallback content shown if the backend API isn't running.
// Keeps the site looking complete even without the server.

export const FALLBACK_PROFILE = {
  name: "Your Name",
  role: "Web Developer / Software Engineer",
  tagline: "I build fast, reliable web apps from front to back.",
  location: "Jaipur, Rajasthan, India",
  email: "your.email@example.com",
  phone: "+91 90000 00000",
  about:
    "I'm a web developer who enjoys turning ideas into working products — clean UIs on the frontend, solid APIs on the backend. I like learning new tools, fixing tricky bugs, and shipping things that people actually use.",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML & CSS",
    "Git & GitHub",
    "REST APIs",
  ],
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    instagram: "https://instagram.com/yourusername",
  },
};

export const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Store",
    description:
      "A full-stack online store with cart, checkout, and an admin panel to manage products.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://example.com/project-one",
    repo: "https://github.com/yourusername/project-one",
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "A drag-and-drop task board with real-time updates, built for small teams.",
    tags: ["React", "Express", "Socket.io"],
    link: "https://example.com/project-two",
    repo: "https://github.com/yourusername/project-two",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A clean dashboard that shows live weather and forecasts for any city you search.",
    tags: ["JavaScript", "REST API", "Chart.js"],
    link: "https://example.com/project-three",
    repo: "https://github.com/yourusername/project-three",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A markdown-based blogging platform with tags, search, and a comment system.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "https://example.com/project-four",
    repo: "https://github.com/yourusername/project-four",
  },
];
