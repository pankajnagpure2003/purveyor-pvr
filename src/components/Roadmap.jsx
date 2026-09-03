import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import Watermark from './Watermark'

const PHASES = [
  {
    n: 'Phase 1',
    title: 'Foundation',
    subtitle: 'Building the Core',
    items: [
      'PVR smart contract development',
      'BSC Testnet testing',
      'Mainnet deployment',
      'Website development',
      'Whitepaper',
      'Official social-media channels',
    ],
    // goal: 'Establish the technical and digital foundation of Purveyor.',
  },
  {
    n: 'Phase 2',
    title: 'Launch',
    subtitle: 'Introducing PVR to the Market',
    items: [
      'Initial token distribution',
      'Liquidity creation',
      'Contract verification',
      'Community building',
      'Security review / audit',
      'transparent and secure token',
    ],
    // goal: 'Establish a transparent and secure token launch.',
  },
  {
    n: 'Phase 3',
    title: 'Growth',
    subtitle: 'Expanding the PVR Community',
    items: [
      'DEX trading',
      'Community reward programs',
      'Strategic partnerships',
      'Marketing campaigns',
      'Holder expansion',
      'Community growth',
    ],
    // goal: 'Increase awareness, adoption, and ecosystem participation.',
  },
  {
    n: 'Phase 4',
    title: 'Ecosystem',
    subtitle: 'Building Real Utility',
    items: [
      'PVR utility platform',
      'Partner integrations',
      'Additional community features',
      'Expanded ecosystem services',
      'Larger exchange listing applications',
      'fintech and RWA-oriented ecosystem.',
    ],
    // goal: 'Develop PVR into a broader fintech and RWA-oriented ecosystem.',
  },
]

export default function Roadmap() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 60%'],
  })

  const pathLength = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  )

  return (
    <section
      id="roadmap"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      <Watermark
        position="top-right"
        size={520}
        direction={1}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* ================= HEADER ================= */}

        <Reveal
          variant="rise"
          className="mb-14 max-w-3xl text-left sm:mb-16 lg:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#F7A00B] to-[#FFDFA3]" />

            <span className="font-gregular text-xs uppercase tracking-[0.22em] text-[#FFDFA3]">
              Roadmap
            </span>
          </div>

          <h2 className="mb-5 text-balance font-gregular text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent">
              From foundation
            </span>{' '}
            <span className="text-white">
              to ecosystem
            </span>
          </h2>

          <p className="max-w-2xl font-gregular leading-relaxed text-bone/60">
            Our roadmap is structured around four development phases.
          </p>
        </Reveal>


        {/* ================= ROADMAP ================= */}

        <div
          ref={ref}
          className="relative pb-4"
        >

          {/* Desktop timeline */}

          <svg
            className="absolute left-0 top-[8px] hidden h-[2px] w-full lg:block"
            viewBox="0 0 1200 2"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="1"
              x2="1200"
              y2="1"
              stroke="rgba(237,231,217,0.12)"
              strokeWidth="2"
            />

            <motion.line
              x1="0"
              y1="1"
              x2="1200"
              y2="1"
              stroke="#E4B65A"
              strokeWidth="2"
              style={{
                pathLength: reduceMotion ? 1 : pathLength,
              }}
            />
          </svg>


          {/* ================= PHASE GRID ================= */}

          <div className="grid grid-cols-1 gap-12 sm:gap-14 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-4 lg:gap-8 xl:gap-10">

            {PHASES.map((phase, i) => (
              <Reveal
                key={phase.n}
                variant="rise"
                delay={i * 0.1}
              >
                <article className="relative h-full">

                  {/* Desktop timeline dot */}

                  <div className="relative z-10 mb-6 hidden lg:flex">
                    <span className="block h-4 w-4 rounded-full border-2 border-gold-400 bg-ink-950 shadow-[0_0_12px_rgba(228,182,90,0.35)]" />
                  </div>


                  {/* Phase Number */}

                  <div className="mb-3">
                    <span className="inline-flex rounded-full border border-[#F7A00B]/30 bg-[#F7A00B]/5 px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#F7A00B]">
                      {phase.n}
                    </span>
                  </div>


                  {/* Title */}

                  <h3 className="mb-1 font-display text-2xl leading-tight text-bone sm:text-[26px]">
                    {phase.title}
                  </h3>


                  {/* Subtitle */}

                  <p className="mb-5 text-sm leading-relaxed text-gold-300/70">
                    {phase.subtitle}
                  </p>


                  {/* Items */}

                  <ul className="mb-7 space-y-2.5">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-bone/55"
                      >
                        <span className="mt-[2px] shrink-0 text-gold-400/70">
                          •
                        </span>

                        <span>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>


                  {/* Goal */}

                  <div className="mt-auto border-t border-bone/10 pt-4">
                    <p className="text-xs leading-[1.7] text-bone/40">
                      {phase.goal}
                    </p>
                  </div>

                </article>
              </Reveal>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}