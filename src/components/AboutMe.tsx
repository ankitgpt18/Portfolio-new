'use client'

import Image from 'next/image'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
]

export default function AboutMe() {
    return (
        <div className="w-full">
            {/* Section Header */}
            <div className="mb-4">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">About</p>
                <h2 className="text-xl font-bold text-black dark:text-white">Me</h2>
            </div>

            {/* Content Card */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                {/* Profile Image */}
                <div className="shrink-0">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/about-me.jpg"
                            alt="Ankit Gupta"
                            width={192}
                            height={192}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Info Section */}
                <div className="flex-1">
                    {/* Name */}
                    <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] text-black dark:text-white mb-4">
                        Ankit Gupta
                    </h3>

                    {/* Bio */}
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                        I&apos;m a B.Tech student passionate about AI, ML, and solving real-world problems through code. I build clean, interactive ML systems with models, pipelines, and RAG. Currently exploring Applied AI including GenAI and AI agents.
                    </p>

                    {/* Skills */}
                    <div>
                        <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">Skills</h4>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <Tooltip key={skill.name}>
                                    <TooltipTrigger asChild>
                                        <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer">
                                            <Image
                                                src={skill.icon}
                                                alt={skill.name}
                                                width={28}
                                                height={28}
                                                className="w-6 h-6 sm:w-7 sm:h-7"
                                                unoptimized
                                            />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {skill.name}
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
