'use client';
import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip, FaEnvelope } from "react-icons/fa6";
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import * as React from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';


interface ProfileHeaderProps {
  name?: string
  age?: string
  title?: string
  profileImage?: string
  socialLinks?: {
    twitter?: string
    resume?: string
    github?: string
    linkedin?: string
    mail?: string
  }
}

export default function ProfileHeader({
  name = "Ankit Gupta",
  age = "B.Tech Student",
  title = "AI/ML Developer • Builder",
  profileImage = "/pfp.jpg",
  socialLinks = {
    twitter: "https://x.com/100dys_",
    github: "https://github.com/ankitgpt18",
    linkedin: "https://www.linkedin.com/in/ankitxgpt/",
    resume: "https://drive.google.com/file/d/1FVmq6acEjRuB-MZUz3qTBeCuZYjX1zsW/view?usp=sharing",
    mail: "mailto:ankitgupta18k@gmail.com",
  }
}: ProfileHeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex-col -mt-10">
      <div className="flex items-center justify-between mb-4 sm:ml-8 ml-4 sm:mr-8 mr-4">
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 relative z-10 rounded-full overflow-hidden bg-cover bg-center shrink-0 ring-4 ring-white dark:ring-white shadow-lg"
          role="img"
          aria-label={name}
          style={{ backgroundImage: `url("${profileImage}")` }}
        />
        {mounted && (
          <button
            onClick={() => {
              const newTheme = theme === 'light' ? 'dark' : 'light'
              if (typeof document !== "undefined" && "startViewTransition" in document) {
                ; (document as Document & { startViewTransition: (callback: () => void) => void }).startViewTransition(() => {
                  setTheme(newTheme)
                })
              } else {
                setTheme(newTheme)
              }
            }}
            className="w-8 h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center touch-manipulation active:opacity-75 relative z-20 shadow-sm border border-black/5 dark:border-white/5 mt-4"
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            style={{
              WebkitTapHighlightColor: 'transparent',
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none'
            }}
          >
            {theme === 'light' ? (
              <Moon className="size-[16px]" aria-hidden="true" />
            ) : (
              <Sun className="size-[16px]" aria-hidden="true" />
            )}
          </button>
        )}
      </div>
      <div className="text-left sm:flex sm:justify-between sm:items-center w-full sm:px-8 px-4 flex-col sm:flex-row">
        <div className="px-0">
          <h1 className="font-[family-name:var(--font-instrument-serif)] italic text-2xl sm:text-4xl tracking-[0.01em] font-medium mb-0">
            {name}
          </h1>
          <p className="opacity-40 text-xs sm:text-sm">
            {age}{age && title ? ' • ' : ''}{title}
          </p>
        </div>
        <div className="flex justify-start gap-1 sm:gap-2 mt-3 sm:mt-0 px-0">
          {socialLinks.github && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-8 h-8 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <a
                    className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full"
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}
                  >
                    <FaGithub className="text-[16px] sm:text-[16px] text-black/75 dark:text-white/80" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                GitHub
              </TooltipContent>
            </Tooltip>
          )}
          {socialLinks.twitter && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-8 h-8 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <a
                    className={`touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full ${socialLinks.twitter === '#' ? 'cursor-default' : ''}`}
                    href={socialLinks.twitter}
                    onClick={socialLinks.twitter === '#' ? (e) => e.preventDefault() : undefined}
                    target={socialLinks.twitter === '#' ? undefined : "_blank"}
                    rel={socialLinks.twitter === '#' ? undefined : "noopener noreferrer"}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}
                  >
                    <FaXTwitter className="text-[16px] sm:text-[16px] text-black/75 dark:text-white/80" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                Twitter
              </TooltipContent>
            </Tooltip>
          )}
          {socialLinks.linkedin && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-8 h-8 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <a
                    className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full"
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}
                  >
                    <FaLinkedin className="text-[16px] sm:text-[16px] text-black/75 dark:text-white/80" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                LinkedIn
              </TooltipContent>
            </Tooltip>
          )}
          {socialLinks.resume && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-8 h-8 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <a
                    className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full"
                    href={socialLinks.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}
                  >
                    <FaPaperclip className="text-[16px] sm:text-[16px] text-black/75 dark:text-white/80" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                Resume
              </TooltipContent>
            </Tooltip>
          )}
          {socialLinks.mail && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-8 h-8 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <a
                    className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full"
                    href={socialLinks.mail}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}
                  >
                    <FaEnvelope className="text-[16px] sm:text-[16px] text-black/75 dark:text-white/80" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                Mail
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  )
}
