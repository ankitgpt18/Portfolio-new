import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: "inlandroute",
    title: "InlandRoute",
    description: "A system built to predict river navigability using satellite imagery and water level data. It helps plan safe inland waterway routes.",
    longDescription: "A system that predicts river navigability using satellite imagery and water level data.\n\nBuilt with FastAPI, PyTorch, and Google Earth Engine.\n\nFeatures:\n• River navigability forecasting\n• Risk alerts and seasonal calendars\n• Real-time Mapbox GL dashboard",
    liveLink: "",
    githubLink: "https://github.com/ankitgpt18/aidstl",
    image: "/banner.jpg",
    tags: [
      "FastAPI",
      "PyTorch",
      "Earth Engine",
      "Next.js"
    ],
  },
  {
    id: "barodago",
    title: "BarodaGo",
    description: "A civic engagement platform designed for modern municipal infrastructure management. It includes a citizen app, admin panel, and a worker app.",
    longDescription: "A civic engagement platform designed to help manage municipal infrastructure in Vadodara.\n\nIt features a triple app ecosystem comprising a Citizen App, Admin Panel, and Worker App.\n\nFeatures:\n• Gesture based reporting and community feed\n• Mapbox digital twin for administrative oversight\n• Gamified tasks and civic crowdfunding",
    liveLink: "",
    githubLink: "https://github.com/ankitgpt18/BarodaGo",
    image: "/banner.jpg",
    tags: [
      "Flutter",
      "FastAPI",
      "PostgreSQL",
      "React"
    ],
  },
  {
    id: "echoaid",
    title: "EchoAid",
    description: "An offline mobile app that helps hearing impaired users by transcribing real time conversations into live subtitles.",
    longDescription: "An offline first mobile app that helps hearing impaired users understand real time conversations by transcribing speech into live subtitles.\n\nIt runs completely on device for maximum privacy without requiring an internet connection.\n\nFeatures:\n• Real time speech transcription\n• Emotion awareness and multi speaker support\n• Dark mode and conversation history",
    liveLink: "",
    githubLink: "https://github.com/ankitgpt18/EchoAid",
    image: "/banner.jpg",
    tags: [
      "Flutter",
      "Dart",
      "Local LLMs"
    ],
  },
  {
    id: "gitbell",
    title: "GitBell",
    description: "A lightweight browser extension that monitors GitHub repositories and alerts you the moment new issues appear.",
    longDescription: "A browser extension that monitors GitHub repositories and gives you instant alerts when new issues pop up.\n\nBuilt for developers who want to stay ahead in open source contributions and project maintenance.\n\nFeatures:\n• Real time issue monitoring across multiple repositories\n• Instant browser notifications with direct links\n• Smart detection of beginner friendly issues",
    liveLink: "",
    githubLink: "https://github.com/ankitgpt18/GitBell",
    image: "/banner.jpg",
    tags: [
      "Chrome Extension",
      "JavaScript",
      "GitHub API"
    ],
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getAllProjects = (): Project[] => {
  return projects
}
