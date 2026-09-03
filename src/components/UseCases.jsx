import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'

const CASES = [
  {
    key: 'fintech',
    title: 'Fintech',
    intro:
      'PVR can support future fintech-oriented applications and digital financial services within the ecosystem.',
    items: [
      'Platform access',
      'Ecosystem transactions',
      'Financial technology integrations',
      'Digital service utilities',
      'User incentives',
      'Partner services',
    ],
  },
  {
    key: 'rwa',
    title: 'Real-World Assets',
    intro:
      "Real-World Assets represent one of Purveyor's primary areas of focus. The future ecosystem may explore blockchain infrastructure for eligible real-world assets.",
    items: [
      'Real estate',
      'Commodities',
      'Business assets',
      'Financial assets',
      'Infrastructure',
      'Other tokenizable assets',
    ],
    footnote:
      'Actual RWA products and offerings will depend on applicable regulations, asset structures, custody, compliance, and jurisdiction.',
  },
  {
    key: 'ecosystem',
    title: 'Ecosystem Access',
    intro:
      'PVR can provide utility across future Purveyor products and services.',
    flow: ['PVR', 'Platform', 'Services', 'Ecosystem'],
    items: [
      'As the ecosystem expands, additional utility can be introduced around the PVR token.',
    ],
  },
  {
    key: 'rewards',
    title: 'Community Rewards',
    intro:
      'PVR can be used within future community reward and participation programs.',
    items: [
      'Community campaigns',
      'Contributor rewards',
      'Referral initiatives',
      'Ecosystem participation',
      'Promotional programs',
    ],
  },
  {
    key: 'partners',
    title: 'Partner Integrations',
    intro:
      'Purveyor aims to connect with fintech, RWA, blockchain, and technology partners.',
    items: [
      'Fintech platforms',
      'RWA businesses',
      'Web3 applications',
      'Payment technology',
      'Digital asset infrastructure',
      'Strategic business partners',
    ],
  },
]

export default function UseCases() {
  const [active, setActive] = useState(0)
  const current = CASES[active]

  return (
    <section
  id="use-cases"
  className="relative overflow-hidden bg-ink-900/40 py-8 sm:py-10 md:py-12 lg:py-16"
>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">

        {/* SECTION HEADER */}
        <Reveal variant="rise" className="mb-10 w-full max-w-3xl text-left sm:mb-12 md:mb-14 lg:mb-16">

          {/* Small Accent */}
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-[2px] w-7 shrink-0 bg-gradient-to-r from-[#F7A00B] to-[#FFDFA3] sm:w-10" />

            <span className="font-gregular text-[10px] uppercase tracking-[0.18em] text-[#FFDFA3] sm:text-xs sm:tracking-[0.22em]">
              PVR Utility
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-gregular mb-4 text-balance text-[2rem] leading-[1.08] tracking-[-0.035em] sm:mb-5 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#FFCB72] to-[#F7A00B] bg-clip-text text-transparent">
              One token.
            </span>{' '}
            <span className="text-white">
              Multiple possibilities.
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl font-gregular text-sm leading-relaxed text-bone/60 sm:text-base md:text-lg">
            PVR is designed to become a utility layer across the Purveyor ecosystem.
          </p>

        </Reveal>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[250px_1fr] lg:gap-8 xl:grid-cols-[280px_1fr] xl:gap-10">

          {/* LEFT TABS */}
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0">

            {CASES.map((c, i) => (
              <button
                key={c.key}
                onClick={() => setActive(i)}
                className={`relative min-h-[48px] shrink-0 rounded-xl px-4 py-3 text-left transition-all duration-300 sm:px-5 sm:py-4 lg:w-full ${active === i ? 'bg-ink-800/90 text-gold-300 shadow-[0_0_25px_rgba(247,160,11,0.10)]' : 'text-bone/55 hover:bg-ink-900/60 hover:text-bone/90'}`}
              >

                {/* Animated Active Line */}
                {active === i && (
                  <motion.span
                    layoutId="use-case-indicator"
                    className="absolute left-0 top-2 bottom-2 hidden w-[3px] rounded-full bg-gradient-to-b from-[#FFF4D6] via-[#F7A00B] to-[#BA7807] shadow-[0_0_12px_rgba(247,160,11,0.8)] lg:block"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}

                {/* Hover Glow */}
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-[#F7A00B]/0 via-[#F7A00B]/5 to-[#FFDFA3]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative z-10 whitespace-nowrap font-gregular text-sm sm:text-base lg:whitespace-normal">
                  {c.title}
                </span>

              </button>
            ))}

          </div>

          {/* RIGHT CONTENT CARD */}
          <div className="relative min-w-0 overflow-hidden rounded-2xl p-[1px]">

            {/* Rotating Gold Gradient Border */}
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#BA7807,#F7A00B,#FFF4D6,#FFFFFF,#F7A00B,#BA7807)] animate-[spin_7s_linear_infinite]" />

            {/* Soft Outer Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_25px_rgba(247,160,11,0.10)] sm:shadow-[0_0_35px_rgba(247,160,11,0.12)]" />

            {/* Inner Card */}
            <div className="relative min-h-[340px] overflow-hidden rounded-[15px] border border-[#F7A00B]/10 bg-ink-950/95 p-5 sm:min-h-[360px] sm:p-7 md:p-8 lg:p-9 xl:p-10">

              {/* Moving Shine */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-[30%] top-0 h-full w-[25%] -skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#FFDFA3]/[0.06] to-transparent animate-[cardShine_5s_ease-in-out_infinite]" />
              </div>

              {/* Top Gold Glow */}
              <div className="pointer-events-none absolute -top-20 left-1/2 h-28 w-52 -translate-x-1/2 rounded-full bg-[#F7A00B]/10 blur-3xl sm:-top-24 sm:h-32 sm:w-72" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key}
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10"
                >

                  {/* Heading */}
                  <h3 className="mb-3 max-w-full font-gregular text-xl font-bold leading-tight bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent sm:mb-4 sm:text-2xl md:text-3xl">
                    {current.title}
                  </h3>

                  {/* Intro */}
                  <p className="mb-6 max-w-2xl font-gregular text-sm leading-7 text-bone/60 sm:mb-8 sm:text-base sm:leading-relaxed">
                    {current.intro}
                  </p>

                  {/* FLOW */}
                  {current.flow && (
                    <div className="mb-6 flex flex-wrap items-center gap-2 sm:mb-8 sm:gap-3">

                      {current.flow.map((step, i) => (
                        <div key={step} className="flex items-center gap-2 sm:gap-3">

                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="relative overflow-hidden rounded-full border border-[#F7A00B]/30 bg-[#F7A00B]/5 px-3 py-1.5 text-xs font-mono text-[#FFDFA3] shadow-[0_0_15px_rgba(247,160,11,0.08)] sm:px-4 sm:py-2 sm:text-sm"
                          >
                            <span className="relative z-10">
                              {step}
                            </span>

                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 hover:translate-x-full" />
                          </motion.span>

                          {i < current.flow.length - 1 && (
                            <span className="text-base text-[#F7A00B]/60 sm:text-lg">
                              →
                            </span>
                          )}

                        </div>
                      ))}

                    </div>
                  )}

                  {/* ITEMS */}
                  <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">

                    {current.items.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        className="group/item flex items-start gap-2.5 font-gregular text-sm leading-relaxed text-bone/75 sm:gap-3"
                      >

                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F7A00B] shadow-[0_0_8px_rgba(247,160,11,0.8)] transition-transform group-hover/item:scale-125" />

                        <span className="min-w-0">
                          {item}
                        </span>

                      </motion.li>
                    ))}

                  </ul>

                  {/* FOOTNOTE */}
                  {current.footnote && (
                    <p className="mt-6 border-t border-[#F7A00B]/10 pt-4 font-gregular text-[11px] leading-relaxed text-bone/40 sm:mt-8 sm:pt-5 sm:text-xs">
                      {current.footnote}
                    </p>
                  )}

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}