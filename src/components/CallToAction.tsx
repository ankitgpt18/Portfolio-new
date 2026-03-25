'use client'

export default function CallToAction() {
  return (
    <div className="mt-4 sm:mt-6 pb-6 sm:pb-8 flex flex-col items-center w-full">
      {/* Quote Section */}
      <div className="mt-2 sm:mt-4 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 sm:p-8 relative w-full">
        {/* Quote Mark */}
        <div className="absolute top-4 left-4 text-6xl sm:text-7xl text-neutral-200 dark:text-neutral-800 font-serif leading-none select-none">&quot;</div>

        <div className="relative z-10 pt-6 sm:pt-8">
          <h2 className="font-[family-name:var(--font-instrument-serif)] italic text-3xl sm:text-5xl tracking-tight mb-4 text-black dark:text-white leading-[1.1]">
            &quot;Karmanye vadhikaraste ma phaleshu kadachana.&quot;
          </h2>
          <p className="text-right text-neutral-800 dark:text-neutral-200 font-medium">
            - Bhagavad Gita
          </p>
        </div>
      </div>
    </div>
  )
}



