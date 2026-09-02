import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import Watermark from './Watermark'
import coin from '../assets/coin.png'

const ADDRESS = '0x594bf3E0d6e297f0178d5daa1700B39f3d54f2fB'

export default function ContractAddress() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contract" className="relative py-28 lg:py-100 bg-ink-900/40 overflow-hidden">
      <Watermark position="center" size={640} opacity={0.035} direction={1} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal variant="rise" className="max-w-3xl mx-auto mb-16 text-center">

  <div className="flex items-center justify-center gap-3 mb-5">
    <span className="h-[2px] w-10 bg-gradient-to-r from-[#F7A00B] to-[#FFDFA3]" />

    <span className="font-gregular text-xs uppercase tracking-[0.22em] text-[#FFDFA3]">
      Contract Address
    </span>

    <span className="h-[2px] w-10 bg-gradient-to-l from-[#F7A00B] to-[#FFDFA3]" />
  </div>

  <h2 className="font-gregular text-balance text-4xl sm:text-5xl font-bold mb-4 leading-[1.08] tracking-[-0.035em]">
    <span className="bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent">
      Verify.
    </span>{" "}
    <span className="text-white">
      Copy.
    </span>{" "}
    <span className="bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent">
      Connect.
    </span>
  </h2>

  <p className="font-gregular text-bone/60 mb-12">
    PVR is deployed on the BNB Smart Chain.
  </p>

</Reveal>

        <Reveal variant="scale" delay={0.1}>
          <div className="relative rounded-2xl border border-gold-500/25 bg-ink-950/70 p-6 sm:p-8">
            <motion.img
              src={coin}
              alt=""
              aria-hidden="true"
              className="hidden sm:block absolute -top-10 -right-8 w-20 h-20 opacity-90 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            />
            <p className="font-mono text-xs text-bone/40 mb-3 tracking-wide">PVR Contract Address</p>
            <p className="font-mono text-sm sm:text-base text-gold-300 break-all mb-6">{ADDRESS}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleCopy}
                className="btn-shimmer relative px-6 py-3 rounded-full bg-gold-400 text-ink-950 font-medium hover:bg-gold-300 transition-colors duration-200"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'copied' : 'copy'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {copied ? 'Copied!' : 'Copy Contract Address'}
                  </motion.span>
                </AnimatePresence>
              </button>
              <a
                href={`https://bscscan.com/address/${ADDRESS}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-bone/20 text-bone hover:border-gold-400/60 hover:text-gold-300 transition-colors duration-200"
              >
                View on BscScan
              </a>
            </div>
          </div>
          <p className="text-xs text-bone/35 mt-6 max-w-md mx-auto leading-relaxed">
            Always verify the official contract address before purchasing or interacting
            with PVR.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
