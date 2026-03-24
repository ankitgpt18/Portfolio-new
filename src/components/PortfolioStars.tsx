'use client'

import { FaGithub } from 'react-icons/fa6'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

export default function PortfolioStars() {
  // Star count is fixed at 10 as per user request
  const starCount = 10

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="https://github.com/ankitgpt18/sleek-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors duration-200"
        >
          <FaGithub className="w-4 h-4" />
          <span className="text-sm font-medium">{starCount}</span>
        </a>
      </TooltipTrigger>
      <TooltipContent className="bg-neutral-900 text-white px-3 py-1.5 rounded-full text-sm font-medium">
        {starCount} stars
      </TooltipContent>
    </Tooltip>
  )
}
