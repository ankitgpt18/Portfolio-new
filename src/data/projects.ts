import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: "cognitivegames",
    title: "Cognitive Games",
    description: "A brain games platform, designed to help students prepare for placement game rounds. Built with Next.js, TypeScript, and Tailwind CSS.",
    longDescription: "A brain games platform designed to help students prepare for placement game rounds.\n\nBuilt with Next.js, TypeScript, Tailwind CSS, Framer Motion, and PostgreSQL.\n\nFeatures:\n• Multiple cognitive game types for placement preparation\n• Real-time scoring and progress tracking\n• Responsive design with smooth animations",
    liveLink: "https://games.ankitgupta.dev/",
    githubLink: "https://github.com/ankitgpt18/CognitiveGamesWeb",
    image: "/images/cognitivegames.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "PostgreSQL"
    ],
  },
  {
    id: "postavid",
    title: "PostaVid",
    description: "A video-sharing platform where users can create accounts, upload, and share videos. Uses MongoDB and ImageKit for smooth video storage and streaming.",
    longDescription: "A video-sharing platform where users can create accounts, upload, and share videos.\n\nUses MongoDB and ImageKit for smooth video storage and streaming.\n\nFeatures:\n• User authentication and account management\n• Video upload with ImageKit integration\n• Smooth streaming and sharing capabilities",
    liveLink: "https://playavid.vercel.app/",
    githubLink: "https://github.com/ankitgpt18/playavid",
    image: "/images/postavid.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB"
    ],
  },
  {
    id: "planyourmeal",
    title: "PlanYourMeal",
    description: "A cross-platform meal planning app built with Flutter. It helps users organize meals, generate shopping lists, and maintain a balanced diet with recipe suggestions and nutritional insights.",
    longDescription: "A cross-platform meal planning app built with Flutter.\n\nHelps users organize meals, generate shopping lists, and maintain a balanced diet with recipe suggestions and nutritional insights.\n\nFeatures:\n• Meal planning and organization\n• Shopping list generation\n• Recipe suggestions with nutritional insights",
    liveLink: "https://github.com/ankitgpt18/PlanYourMeal",
    githubLink: "https://github.com/ankitgpt18/PlanYourMeal",
    image: "/images/planyourmeal.png",
    tags: [
      "Flutter",
      "Dart",
      "Firebase"
    ],
  },
  {
    id: "quickpay",
    title: "Quick Pay",
    description: "A responsive mock payment app that simulates smooth, secure transactions for demos. Built with Next.js, TypeScript, Tailwind, Node.js, Express, and MongoDB.",
    longDescription: "A responsive mock payment app that simulates smooth, secure transactions for demos.\n\nBuilt with a full-stack architecture using React, Tailwind, Node.js, and MongoDB.\n\nFeatures:\n• Simulated payment processing\n• Responsive and modern UI\n• REST API backend with MongoDB storage",
    liveLink: "https://pay.ankitgupta.dev/",
    githubLink: "https://github.com/ankitgpt18/QuickPay",
    image: "/images/quickpay.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "REST API"
    ],
  },
  {
    id: "dropithere",
    title: "DropIthere",
    description: "Created a platform to organize content like Twitter threads and YouTube videos into custom playlists, with shareable links for easy and structured dashboard sharing.",
    longDescription: "A platform to organize content like Twitter threads and YouTube videos into custom playlists.\n\nShareable links for easy and structured dashboard sharing.\n\nFeatures:\n• Custom playlist creation from multiple content sources\n• Shareable dashboard links\n• Content organization and management",
    liveLink: "https://dropithere.ankitgupta.dev/",
    githubLink: "https://github.com/ankitgpt18/dropithere",
    image: "/images/dropithere.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "REST API"
    ],
  },
  {
    id: "getevent",
    title: "GetEvent",
    description: "A platform to discover and manage events easily. Users can explore upcoming events, view details, and stay updated, making event discovery more seamless and engaging.",
    longDescription: "A platform to discover and manage events easily.\n\nUsers can explore upcoming events, view details, and stay updated.\n\nFeatures:\n• Event discovery and exploration\n• Detailed event views\n• Seamless and engaging user experience",
    liveLink: "https://get-event.vercel.app/",
    githubLink: "https://github.com/ankitgpt18/GetEvent",
    image: "/images/getevent.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB"
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getAllProjects = (): Project[] => {
  return projects
}
