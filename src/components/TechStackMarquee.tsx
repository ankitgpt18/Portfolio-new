'use client'

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";


// Tech Stack Data with standard Devicon URLs for colorful icons
const techStack = [
  // Languages
  { name: "Python", category: "language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C", category: "language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", category: "language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", category: "language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", category: "language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", category: "language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  
  // AI/ML Frameworks
  { name: "TensorFlow", category: "framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Keras", category: "framework", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" }, // Keras not in devicon easily
  { name: "PyTorch", category: "framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Scikit-learn", category: "framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }, // Scikit usually placeholder, use pandas/numpy style or search
  { name: "Pandas", category: "framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", category: "framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  
  // DevOps & Tools
  { name: "Docker", category: "tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", category: "tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Git", category: "tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "AWS", category: "tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", category: "tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Linux", category: "tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

interface TechIconProps {
  tech: typeof techStack[0];
  className?: string;
}

function TechIcon({ tech, className = "" }: TechIconProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:scale-110 min-w-[80px] sm:min-w-[90px] group ${className}`}>
      {/* Icon Container */}
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-1.5 sm:mb-2 flex items-center justify-center">
        <div className="w-full h-full relative">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={40}
            height={40}
            className="w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.1)] dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            unoptimized
          />
        </div>
      </div>
      
      {/* Tech Name */}
      <span className="text-[10px] sm:text-xs text-center font-medium text-gray-700 dark:text-gray-300 leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </div>
  );
}

interface TechStackMarqueeProps {
  className?: string;
}

export default function TechStackMarquee({ className = "" }: TechStackMarqueeProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Title - matching other component styles */}
      <div className="mb-4">
        <h2 className="text-base font-[family-name:var(--font-instrument-serif)] sm:text-xl mb-3 opacity-20 mt-4 sm:mt-6 -tracking-[0.01em]">
          Stack I use
        </h2>
        <p className="text-sm sm:text-base dark:text-white/70 text-black/70 leading-relaxed">
          Technologies I work with to build intelligent systems and solve real problems
        </p>
      </div>

      {/* Single Marquee Container */}
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem]">
          {techStack.map((tech, index) => (
            <TechIcon key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </Marquee>

        {/* Fade edges for better visual effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-linear-to-r from-white dark:from-zinc-900 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-linear-to-l from-white dark:from-zinc-900 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
