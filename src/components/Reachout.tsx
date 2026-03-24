'use client'
import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip } from "react-icons/fa6";
import { SiLeetcode, SiKaggle } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { Tooltip } from "./ui/tooltip-card";

interface ReachoutProps {
  title?: string
  subtitle?: string
  socialLinks?: {
    twitter?: string
    resume?: string
    github?: string
    linkedin?: string
    mail?: string
    leetcode?: string
    kaggle?: string
  }
}

export default function Reachout({
  title = "Let's connect",
  subtitle = "Find me on these platforms",
  socialLinks = {
    twitter: "https://x.com/100dys_",
    github: "https://github.com/ankitgpt18",
    linkedin: "https://www.linkedin.com/in/ankitxgpt/",
    leetcode: "https://leetcode.com/u/ankitgpt/",
    kaggle: "https://www.kaggle.com/ankitxgpt",
  }
}: ReachoutProps) {
  return (
    <div className="sm:px-12 px-4 pb-24 sm:pb-28">
      <div className="text-left w-full">
        <div className="mb-4 sm:mb-6">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-lg sm:text-xl mb-2 opacity-20 mt-4 sm:mt-6">
            {title}
          </h2>
          <p className="opacity-20 text-md sm:text-lg mb-3 sm:mb-4">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-start gap-3 sm:gap-3">
          {socialLinks.github && (
            <Tooltip content="GitHub Profile">
              <a
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full touch-manipulation active:opacity-75"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-[20px] sm:text-[18px] text-black/75 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-black/75 dark:text-white/80">GitHub</span>
              </a>
            </Tooltip>
          )}

          {socialLinks.twitter && (
            <Tooltip content="Twitter Profile">
              <a
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full touch-manipulation active:opacity-75"
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-[20px] sm:text-[18px] text-black/75 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-black/75 dark:text-white/80">Twitter</span>
              </a>
            </Tooltip>
          )}

          {socialLinks.linkedin && (
            <Tooltip content="LinkedIn Profile">
              <a
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full touch-manipulation active:opacity-75"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[20px] sm:text-[18px] text-black/75 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-black/75 dark:text-white/80">LinkedIn</span>
              </a>
            </Tooltip>
          )}

          {socialLinks.leetcode && (
            <Tooltip content="LeetCode Profile">
              <a
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full touch-manipulation active:opacity-75"
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="text-[20px] sm:text-[18px] text-black/75 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-black/75 dark:text-white/80">LeetCode</span>
              </a>
            </Tooltip>
          )}

          {socialLinks.kaggle && (
            <Tooltip content="Kaggle Profile">
              <a
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full touch-manipulation active:opacity-75"
                href={socialLinks.kaggle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiKaggle className="text-[20px] sm:text-[18px] text-black/75 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-black/75 dark:text-white/80">Kaggle</span>
              </a>
            </Tooltip>
          )}

          {socialLinks.mail && (
            <Tooltip content="Contact me">
              <a
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full touch-manipulation active:opacity-75"
                href={socialLinks.mail}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMdMail className="text-[20px] sm:text-[18px] text-black/75 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-black/75 dark:text-white/80">Mail</span>
              </a>
            </Tooltip>
          )}

          {socialLinks.resume && (
            <Tooltip content="Resume">
              <a
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full touch-manipulation active:opacity-75"
                href={socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPaperclip className="text-[20px] sm:text-[18px] text-black/75 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-black/75 dark:text-white/80">Resume</span>
              </a>
            </Tooltip>
          )}
        </div>

        {/* Footer Section */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="text-sm dark:text-white/50 text-black/50 text-center sm:text-left">
              <p>Design & Developed by <span className="font-medium text-black/70 dark:text-white/70">Ankit Gupta</span></p>
              <p>© 2026. All rights reserved.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
