import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import icon from '../assets/icon.png'

export default function FinalCTA() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="relative py-28 lg:py-110 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold-500/10 blur-[140px]"
        animate={reduceMotion ? undefined : { opacity: [0.7, 1, 0.7], scale: [0.95, 1.05, 0.95] }}
        transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <Reveal variant="scale">
          <motion.img
            src={icon}
            alt=""
            className="h-14 w-auto mx-auto mb-8 opacity-90"
            animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={reduceMotion ? undefined : { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </Reveal>
        <Reveal variant="rise" delay={0.1}>
         <h2 className="font-gregular text-balance text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] tracking-[-0.035em]">
  <span className="bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent">
    The future of digital finance
  </span>{" "}
  <span className="text-white">
    starts here
  </span>
</h2>

<p className="font-gregular text-bone/60 leading-relaxed max-w-xl mx-auto mb-10">
  Purveyor is building an ecosystem designed to connect blockchain technology,
  fintech, and real-world value.
</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contract"
              className="btn-shimmer px-8 py-3.5 rounded-full bg-gold-400 text-ink-950 font-medium hover:bg-gold-300 transition-colors duration-200"
            >
              Buy PVR
            </a>
            <a
              href="#faq"
              className="px-8 py-3.5 rounded-full border border-bone/25 text-bone hover:border-gold-400/60 hover:text-gold-300 transition-colors duration-200"
            >
              Read Whitepaper
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
