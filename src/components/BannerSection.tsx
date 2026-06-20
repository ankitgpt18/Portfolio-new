'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Volume2, VolumeX } from 'lucide-react'

interface BannerSectionProps {
  quote?: string
  bannerImage?: string
  bannerVideo?: string
}

export default function BannerSection({
  quote = "You make your own luck if you stay at it long enough.",
  bannerImage = "/banner.jpg",
  bannerVideo
}: BannerSectionProps) {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="w-full mb-2 relative">
      <div className="relative">
        {bannerVideo ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="rounded-none w-full"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          >
            <source src={bannerVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            alt="Banner"
            width={1240}
            height={900}
            className="rounded-none w-full h-[200px] sm:h-[270px] object-cover"
            src={bannerImage}
            style={{ color: 'transparent', minHeight: '100px' }}
            priority
          />
        )}

        {/* Quote overlay */}
        {quote && (
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <p className="text-white text-base sm:text-xl italic font-[family-name:var(--font-instrument-serif)] text-center">{quote}</p>
          </div>
        )}

        {/* Mute/Unmute button - only shown when video is used */}
        {bannerVideo && (
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-200 cursor-pointer after:absolute after:-inset-4 after:content-[''] z-10"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </div>
  )
}
