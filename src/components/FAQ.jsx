import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import Watermark from './Watermark'

const QA = [
  {
    q: 'What is Purveyor?',
    a: "Purveyor is a blockchain-based ecosystem focused on Fintech and Real-World Assets, with PVR serving as the ecosystem's native token.",
  },
  {
    q: 'What is the PVR token?',
    a: 'PVR is the native utility token of the Purveyor ecosystem.',
  },
  {
    q: 'Which blockchain does PVR use?',
    a: 'PVR operates on the BNB Smart Chain.',
  },
  {
    q: 'What is the total supply of PVR?',
    a: 'The total supply is 1,000,000,000 PVR, equivalent to 100 Crore PVR.',
  },
  {
    q: 'What is the PVR symbol?',
    a: 'The token symbol is PVR.',
  },
  {
    q: 'How many decimals does PVR have?',
    a: 'PVR has 7 decimals.',
  },
]

function Item({ item, isOpen, onToggle }) {
  return (
    <div className="group relative border-b border-bone/10">

      {/* Subtle gold line */}
      <div
        className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-transparent transition-all duration-500 ${
          isOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />

      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-all duration-300"
      >

        {/* Question */}
        <span
          className={`font-gregular text-lg font-semibold sm:text-xl transition-all duration-300 ${
            isOpen
              ? 'bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent'
              : 'text-white group-hover:text-[#FFDFA3]'
          }`}
        >
          {item.q}
        </span>


        {/* Plus */}
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.25,
            ease: 'easeOut',
          }}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-gregular text-2xl font-light leading-none transition-all duration-300 ${
            isOpen
              ? 'border-[#F7A00B]/60 bg-[#F7A00B]/10 text-[#FFDFA3] shadow-[0_0_18px_rgba(247,160,11,0.25)]'
              : 'border-white/10 text-[#F7A00B] group-hover:border-[#F7A00B]/40 group-hover:bg-[#F7A00B]/5'
          }`}
        >
          +
        </motion.span>

      </button>


      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 pr-12 font-gregular text-sm leading-relaxed text-bone/60 sm:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-50 lg:py-100"
    >
      <Watermark
        position="bottom-right"
        size={440}
        direction={-1}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">

        {/* ================= HEADER ================= */}

        <Reveal
          variant="rise"
          className="mb-14 text-center"
        >

          {/* Label */}
          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#F7A00B]" />

            <span className="font-gregular text-xs uppercase tracking-[0.22em] text-[#FFDFA3]">
              FAQ
            </span>

            <span className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#F7A00B]" />

          </div>


          {/* Heading */}
          <h2 className="font-gregular text-balance text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl">

            <span className="bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent">
              Frequently
            </span>{' '}

            <span className="text-white">
              asked questions
            </span>

          </h2>

        </Reveal>


        {/* ================= FAQ LIST ================= */}

        <Reveal
          variant="fade"
          delay={0.1}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-950/50 px-5 sm:px-8">

            {/* Top gold glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-2/3 -translate-x-1/2 rounded-full bg-[#F7A00B]/10 blur-3xl" />

            {/* Animated top border */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F7A00B] to-transparent opacity-70" />

            <div className="relative z-10 border-t border-transparent">
              {QA.map((item, i) => (
                <Item
                  key={item.q}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() =>
                    setOpenIndex(
                      openIndex === i ? -1 : i
                    )
                  }
                />
              ))}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}