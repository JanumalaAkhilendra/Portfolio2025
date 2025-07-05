/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  // React Projects
  {
    id: 1,
    name: "Copilotkit-weather-bot",
    description: "A Multipurpose Weather Bot built with React and AI integrations",
    date: "2024-10-15",
    demoLink: "https://copilotkit-weather-bot.vercel.app/",
    category: "react",
    tags: ["AI", "Next.js", "OpenAI", "Real-time"],
    imageUrl: "../../background/S1.avif",
    model: "react"
  },
  {
    id: 4,
    name: "Netflix Clone",
    description: "A Streaming Platform clone with React and Firebase",
    date: "2024-05-22",
    demoLink: "https://netflixy-smoky.vercel.app/",
    category: "react",
    tags: ["Firebase", "Redux", "API", "Responsive"],
    imageUrl: "../../background/S1.avif",
    model: "react"
  },

  // Django Projects
  {
    id: 3,
    name: "Movie Recommendation Model",
    description: "A content-based recommendation system with Django backend",
    date: "2024-06-20",
    demoLink: "https://github.com/JanumalaAkhilendra/Movie_Recommedation_Model",
    category: "django",
    tags: ["Python", "ML", "Pandas", "Scikit-learn"],
    imageUrl: "../../background/S1.avif",
    model: "django"
  },

  // React Native Projects
  {
    id: 6,
    name: "Shopper",
    description: "Cross-platform e-commerce mobile app with React Native",
    date: "2023-10-19",
    demoLink: "https://e-commerce-dun-mu.vercel.app/",
    category: "react-native",
    tags: ["Expo", "Mobile", "Redux", "Firebase"],
    imageUrl: "../../background/S1.avif",
    model: "react-native"
  },
  {
    id: 2,
    name: "QuickBlox-Chat-Room",
    description: "Real-time chat application with React Native",
    date: "2024-10-20",
    demoLink: "https://github.com/JanumalaAkhilendra/QuickBlox-Chat-Room",
    category: "react-native",
    tags: ["WebRTC", "Messaging", "Push Notifications"],
    imageUrl: "../../background/S1.avif",
    model: "react-native"
  },

  // AI Projects
  {
    id: 1,
    name: "Copilotkit-weather-bot",
    description: "AI-powered weather assistant with natural language processing",
    date: "2024-10-15",
    demoLink: "https://copilotkit-weather-bot.vercel.app/",
    category: "ai",
    tags: ["LLM", "NLP", "GPT", "Conversational AI"],
    imageUrl: "../../background/S1.avif",
    model: "ai"
  },
  {
    id: 3,
    name: "Movie Recommendation Model",
    description: "Machine learning model for personalized movie suggestions",
    date: "2024-06-20",
    demoLink: "https://github.com/JanumalaAkhilendra/Movie_Recommedation_Model",
    category: "ai",
    tags: ["Recommendation", "Cosine Similarity", "TF-IDF"],
    imageUrl: "../../background/S1.avif",
    model: "ai"
  },

  // Other Projects
  {
    id: 5,
    name: "Solasta",
    description: "Techfest event website with interactive 3D elements",
    date: "2023-05-15",
    demoLink: "https://janumalaakhilendra.github.io/solasta/",
    category: "react",
    tags: ["Three.js", "GSAP", "WebGL"],
    imageUrl: "../../background/S1.avif",
    model: "react"
  },
  {
    id: 7,
    name: "Analog Clock",
    description: "Creative CSS-styled analog clock with React",
    date: "2023-01-08",
    demoLink: "https://janumalaakhilendra.github.io/Analog_clock/",
    category: "react",
    tags: ["CSS", "Animations", "SVG"],
    imageUrl: "../../background/S1.avif",
    model: "react"
  },
  {
    id: 8,
    name: "Flappy Bird",
    description: "2D game recreation with Python Tkinter",
    date: "2022-11-05",
    demoLink: "https://github.com/JanumalaAkhilendra/SpotifyClone",
    category: "python",
    tags: ["Game Dev", "OOP", "Canvas"],
    imageUrl: "../../background/S1.avif",
    model: "ai" // Using AI model as placeholder
  },
  {
    id: 10,
    name: "2D-Model TajMahal",
    description: "Computer graphics project using Turbo C++",
    date: "2021-07-03",
    demoLink: "https://github.com/JanumalaAkhilendra/TajMahal/blob/main/TAJMAHAL.CPP",
    category: "graphics",
    tags: ["C++", "Algorithms", "Rendering"],
    imageUrl: "../../background/S1.avif",
    model: "django" // Using Django model as placeholder
  }
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/JanumalaAkhilendra",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/akhilendra/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/Akhilendra_01/",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Akhilendra6.pdf",
    icon: "resume",
    newTab: true,
  },
];


