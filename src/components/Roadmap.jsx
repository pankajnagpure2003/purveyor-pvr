import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import Watermark from './Watermark'

const PHASES = [
  {
    n: '01',
    title: 'Foundation',
    subtitle: 'Building the Core',
    items: ['PVR smart contract development', 'BSC Testnet testing', 'Mainnet deployment', 'Website development', 'Whitepaper', 'Official social-media channels'],
    goal: 'Establish the technical and digital foundation of Purveyor.',
  },
  {
    n: '02',
    title: 'Launch',
    subtitle: 'Introducing PVR to the Market',
    items: ['Initial token distribution', 'Liquidity creation', 'Contract verification', 'Community building', 'Security review / audit'],
    goal: 'Establish a transparent and secure token launch.',
  },
  {
    n: '03',
    title: 'Growth',
    subtitle: 'Expanding the PVR Community',
    items: ['DEX trading', 'Community reward programs', 'Strategic partnerships', 'Marketing campaigns', 'Holder expansion', 'Community growth'],
    goal: 'Increase awareness, adoption, and ecosystem participation.',
  },
  {
    n: '04',
    title: 'Ecosystem',
    subtitle: 'Building Real Utility',
    items: ['PVR utility platform', 'Partner integrations', 'Additional community features', 'Expanded ecosystem services', 'Larger exchange listing applications'],
    goal: 'Develop PVR into a broader fintech and RWA-oriented ecosystem.',
  },
]

export default function Roadmap() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="roadmap" className="relative py-20 lg:py-100 overflow-hidden">
      <Watermark position="top-right" size={520} direction={1} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
       <Reveal variant="rise" className="max-w-3xl mb-20 text-left">

  <div className="flex items-center gap-3 mb-5">
    <span className="h-[2px] w-10 bg-gradient-to-r from-[#F7A00B] to-[#FFDFA3]" />
    <span className="font-gregular text-xs uppercase tracking-[0.22em] text-[#FFDFA3]">
      Roadmap
    </span>
  </div>

  <h2 className="font-gregular text-balance text-4xl sm:text-5xl font-bold mb-5 leading-[1.08] tracking-[-0.035em]">
    <span className="bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent">
      From foundation
    </span>{" "}
    <span className="text-white">
      to ecosystem
    </span>
  </h2>

  <p className="font-gregular text-bone/60 leading-relaxed max-w-2xl">
    Our roadmap is structured around four development phases.
  </p>

</Reveal>

        <div ref={ref} className="relative">
          <svg
            className="hidden lg:block absolute top-[42px] left-0 w-full h-[2px]"
            viewBox="0 0 1200 2"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="1" x2="1200" y2="1" stroke="rgba(237,231,217,0.12)" strokeWidth="2" />
            <motion.line
              x1="0"
              y1="1"
              x2="1200"
              y2="1"
              stroke="#E4B65A"
              strokeWidth="2"
              style={{ pathLength: reduceMotion ? 1 : pathLength }}
            />
          </svg>

          <div className="grid lg:grid-cols-4 gap-10 lg:gap-8">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.n} variant="rise" delay={i * 0.1}>
                <div className="relative">
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-ink-950 border-2 border-gold-400 mb-8" />
                  <span className="font-mono text-xs text-gold-400/80">{phase.n}</span>
                  <h3 className="font-display text-2xl text-bone mt-2 mb-1">{phase.title}</h3>
                  <p className="text-sm text-gold-300/70 mb-5">{phase.subtitle}</p>
                  <ul className="space-y-2 mb-6">
                    {phase.items.map((item) => (
                      <li key={item} className="text-sm text-bone/55 leading-relaxed flex gap-2">
                        <span className="text-gold-400/60">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-bone/40 border-t border-bone/10 pt-4 leading-relaxed">
                    {phase.goal}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
