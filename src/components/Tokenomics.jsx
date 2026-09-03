import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Watermark from './Watermark'
import token from "../assets/banner.png"
import coin from "../assets/coin.webp"

const INFO = [
  ['Token Name', 'Purveyor'],
  ['Symbol', 'PVR'],
  ['Network', 'BNB Smart Chain'],
  ['Total Supply', '1,000,000,000 PVR'],
  ['Decimals', '7'],
  ['Reference Price', '$0.05'],
  ['Sector', 'Fintech + RWA'],
]

const ALLOCATION = [
  { label: 'Liquidity', pct: 20, amount: '200,000,000 PVR', color: '#E4B65A', copy: 'DEX liquidity, trading accessibility, and liquidity management.' },
  { label: 'Ecosystem & RWA Development', pct: 20, amount: '200,000,000 PVR', color: '#4C7A6E', copy: 'PVR platform, RWA infrastructure, fintech utilities, technology, and ecosystem development.' },
  { label: 'Community & Rewards', pct: 15, amount: '150,000,000 PVR', color: '#B9754A', copy: 'Community incentives, campaigns, contributor programs, and ecosystem participation.' },
  { label: 'Treasury & Reserve', pct: 15, amount: '150,000,000 PVR', color: '#6E7C99', copy: 'Long-term strategic reserves and future ecosystem requirements.' },
  { label: 'Marketing & Partnerships', pct: 10, amount: '100,000,000 PVR', color: '#8A611C', copy: 'Marketing, brand development, partnerships, events, and business development.' },
  { label: 'Team & Advisors', pct: 10, amount: '100,000,000 PVR', color: '#3E5C6B', copy: "Core team and strategic advisors, subject to the project's vesting framework." },
  { label: 'Public Sale', pct: 5, amount: '50,000,000 PVR', color: '#D4A13F', copy: 'Public / community distribution.' },
  { label: 'Private & Strategic', pct: 5, amount: '50,000,000 PVR', color: '#9C8B6F', copy: 'Strategic participants, investors, and ecosystem partners.' },
]

const RADIUS = 80
const CIRC = 2 * Math.PI * RADIUS

function Donut() {
  let offset = 0

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute h-52 w-52 rounded-full bg-[#F7A00B]/20 blur-3xl sm:h-60 sm:w-60"
        animate={{
          opacity: [0.25, 0.65, 0.25],
          scale: [0.88, 1.08, 0.88],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <svg viewBox="0 0 200 200" className="relative z-10 h-56 w-56 -rotate-90 sm:h-64 sm:w-64">
        <circle cx="100" cy="100" r={RADIUS} fill="none" stroke="rgba(237,231,217,0.06)" strokeWidth="26" />

        {ALLOCATION.map((seg, i) => {
          const len = (seg.pct / 100) * CIRC
          const dash = `${len} ${CIRC - len}`
          const dashOffset = -offset

          offset += len

          return (
            <motion.circle
              key={seg.label}
              cx="100"
              cy="100"
              r={RADIUS}
              fill="none"
              stroke={seg.color}
              strokeWidth="26"
              strokeDasharray={dash}
              initial={{ strokeDashoffset: -offset + len, opacity: 0 }}
              whileInView={{ strokeDashoffset: dashOffset, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              animate={{
                filter: [
                  `drop-shadow(0 0 2px ${seg.color})`,
                  `drop-shadow(0 0 9px ${seg.color})`,
                  `drop-shadow(0 0 2px ${seg.color})`,
                ],
              }}
              transition={{
                strokeDashoffset: { duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.9, delay: i * 0.08 },
                filter: { duration: 2.2, delay: i * 0.1, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative overflow-hidden py-24 sm:py-28 lg:py-36 xl:py-10">

      <Watermark position="top-left" size={500} direction={1} opacity={0.045} />

      {/* AMBIENT GOLD GLOW */}
      <motion.div
        className="pointer-events-none absolute left-[-180px] top-[8%] h-[420px] w-[420px] rounded-full bg-[#F7A00B]/10 blur-[130px]"
        animate={{
          opacity: [0.2, 0.55, 0.2],
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="pointer-events-none absolute right-[-180px] top-[35%] h-[450px] w-[450px] rounded-full bg-[#FFDFA3]/[0.08] blur-[140px]"
        animate={{
          opacity: [0.15, 0.5, 0.15],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* HEADER */}
        <Reveal variant="rise" className="mb-14 max-w-3xl text-left sm:mb-16">

          <div className="mb-5 flex items-center gap-3">
            <motion.span
              className="h-[2px] w-10 bg-gradient-to-r from-[#A95F00] via-[#F7A00B] to-[#FFDFA3]"
              animate={{
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  '0 0 4px rgba(247,160,11,0.3)',
                  '0 0 16px rgba(247,160,11,0.9)',
                  '0 0 4px rgba(247,160,11,0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.span
              className="font-gregular text-xs font-medium uppercase tracking-[0.22em] text-[#FFDFA3]"
              animate={{
                textShadow: [
                  '0 0 4px rgba(247,160,11,0.25)',
                  '0 0 14px rgba(247,160,11,0.8)',
                  '0 0 4px rgba(247,160,11,0.25)',
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Tokenomics
            </motion.span>
          </div>

          <h2 className="mb-5 text-balance font-gregular text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl">
            <motion.span
              className="bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  '0 0 5px rgba(247,160,11,0.15)',
                  '0 0 22px rgba(247,160,11,0.5)',
                  '0 0 5px rgba(247,160,11,0.15)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              Simple.
            </motion.span>{" "}
            <span className="text-white">Strategic.</span>{" "}
            <motion.span
              className="bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  '0 0 5px rgba(247,160,11,0.15)',
                  '0 0 22px rgba(247,160,11,0.5)',
                  '0 0 5px rgba(247,160,11,0.15)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              Built for growth.
            </motion.span>
          </h2>

          <p className="max-w-2xl font-gregular leading-relaxed text-bone/60">
            A fixed supply of 1,000,000,000 PVR (100 Crore), allocated to support liquidity, ecosystem development, community growth, and long-term reserves.
          </p>
        </Reveal>

        {/* TOKEN INFO + COIN */}
        <div className="mb-16 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">

          {/* TOKEN INFO CARD */}
          <Reveal variant="rise">
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-[#F7A00B]/20 bg-gradient-to-br from-white/[0.06] via-white/[0.025] to-transparent p-5 shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:p-7"
              animate={{
                boxShadow: [
                  '0 20px 70px rgba(0,0,0,0.25), 0 0 0 rgba(247,160,11,0)',
                  '0 20px 70px rgba(0,0,0,0.25), 0 0 30px rgba(247,160,11,0.16)',
                  '0 20px 70px rgba(0,0,0,0.25), 0 0 0 rgba(247,160,11,0)',
                ],
                borderColor: [
                  'rgba(247,160,11,0.14)',
                  'rgba(247,160,11,0.42)',
                  'rgba(247,160,11,0.14)',
                ],
              }}
            >

              {/* CARD GOLD AURA */}
              <motion.div
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#F7A00B]/20 blur-[70px]"
                animate={{
                  opacity: [0.25, 0.8, 0.25],
                  scale: [0.8, 1.15, 0.8],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#FFDFA3]/10 blur-[65px]"
                animate={{
                  opacity: [0.15, 0.55, 0.15],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />

              <div className="relative z-10 mb-6 flex items-center justify-between">
                <div>
                  <motion.p
                    className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFDFA3]/70"
                    animate={{
                      textShadow: [
                        '0 0 0 rgba(247,160,11,0)',
                        '0 0 10px rgba(247,160,11,0.7)',
                        '0 0 0 rgba(247,160,11,0)',
                      ],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    PVR TOKEN
                  </motion.p>

                  <h3 className="mt-1 font-gregular text-xl font-semibold text-white sm:text-2xl">
                    Token Information
                  </h3>
                </div>

                <motion.div 
  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F7A00B]/30 bg-[#F7A00B]/10" 
  animate={{ 
    boxShadow: [ 
      '0 0 8px rgba(247,160,11,0.2)', 
      '0 0 25px rgba(247,160,11,0.8)', 
      '0 0 8px rgba(247,160,11,0.2)', 
    ], 
    scale: [1, 1.06, 1], 
  }} 
  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} 
>
  <motion.img
    src={coin}
    alt="PVR Token Logo"
    className="h-10 w-10 object-contain"
    animate={{
      filter: [
        'drop-shadow(0 0 2px rgba(247,160,11,0.3))',
        'drop-shadow(0 0 10px rgba(247,160,11,0.9))',
        'drop-shadow(0 0 2px rgba(247,160,11,0.3))',
      ],
    }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
  />
</motion.div>
              </div>

              <div className="relative z-10">
                {INFO.map(([k, v], i) => (
                  <motion.div
                    key={k}
                    whileHover={{
                      x: 6,
                      backgroundColor: 'rgba(247,160,11,0.035)',
                    }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center justify-between gap-4 rounded-lg py-4 ${i !== INFO.length - 1 ? 'border-b border-white/[0.07]' : ''}`}
                  >
                    <span className="font-mono text-[11px] uppercase tracking-wide text-bone/40">{k}</span>

                    <motion.span
                      className="text-right font-display text-sm font-medium text-bone sm:text-base"
                      whileHover={{
                        color: '#FFDFA3',
                        textShadow: '0 0 12px rgba(247,160,11,0.65)',
                      }}
                    >
                      {v}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Reveal>

          {/* TOKEN IMAGE */}
          <Reveal variant="scale" delay={0.1} className="flex items-center justify-center">
            <motion.div
              className="relative flex w-full max-w-xl items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >

              {/* LARGE GOLD AURA */}
              <motion.div
                className="absolute h-64 w-64 rounded-full bg-[#F7A00B]/20 blur-[80px] sm:h-80 sm:w-80"
                animate={{
                  opacity: [0.3, 0.85, 0.3],
                  scale: [0.8, 1.15, 0.8],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="absolute h-48 w-48 rounded-full border border-[#F7A00B]/20 sm:h-60 sm:w-60"
                animate={{
                  scale: [0.85, 1.18, 0.85],
                  opacity: [0.2, 0.7, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="absolute h-60 w-60 rounded-full border border-[#FFDFA3]/10 sm:h-72 sm:w-72"
                animate={{
                  scale: [1.15, 0.9, 1.15],
                  opacity: [0.15, 0.5, 0.15],
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.img
                src={token}
                alt="PVR Ecosystem"
                className="relative z-10 h-auto w-full max-w-[520px] object-contain"
                animate={{
                  scale: [1, 1.018, 1],
                  filter: [
                    'drop-shadow(0 0 25px rgba(247,160,11,0.18))',
                    'drop-shadow(0 0 55px rgba(247,160,11,0.55))',
                    'drop-shadow(0 0 25px rgba(247,160,11,0.18))',
                  ],
                }}
                transition={{
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  filter: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
                }}
              />
            </motion.div>
          </Reveal>
        </div>

        {/* ALLOCATION TITLE */}
        <Reveal variant="rise" className="mb-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <motion.p
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFDFA3]/60"
                animate={{
                  textShadow: [
                    '0 0 3px rgba(247,160,11,0)',
                    '0 0 12px rgba(247,160,11,0.6)',
                    '0 0 3px rgba(247,160,11,0)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Supply Allocation
              </motion.p>

              <h3 className="mt-1 font-gregular text-2xl font-semibold text-white sm:text-3xl">
                PVR Distribution
              </h3>
            </div>

            <p className="font-mono text-xs text-bone/35">1,000,000,000 PVR TOTAL SUPPLY</p>
          </div>
        </Reveal>

        {/* DONUT + ALLOCATION */}
        {/* DONUT + ALLOCATION */}
<div className="mb-6 grid items-center gap-8 sm:gap-10 lg:grid-cols-[280px_1fr] lg:gap-10 xl:grid-cols-[320px_1fr]">

  {/* DONUT */}
  <Reveal variant="scale" className="flex w-full justify-center">
    <motion.div
      className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64 lg:h-64 lg:w-64 xl:h-72 xl:w-72"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Donut />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-bone/40 sm:text-[9px]">
          Total
        </span>

        <motion.span
          className="mt-1 font-gregular text-xl font-bold text-white sm:text-2xl"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          100%
        </motion.span>

        <span className="mt-1 font-mono text-[8px] text-[#F7A00B] sm:text-[9px]">
          PVR
        </span>
      </div>
    </motion.div>
  </Reveal>

  {/* ALLOCATION CARDS */}
  <div className="grid w-full min-w-0 gap-3 sm:gap-4">
    {ALLOCATION.map((seg, i) => (
      <Reveal key={seg.label} variant="fade" delay={i * 0.05}>
        <motion.div
          whileHover={{
            x: 4,
            scale: 1.006,
            borderColor: 'rgba(247,160,11,0.22)',
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="group relative w-full min-w-0 overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-r from-white/[0.035] to-transparent p-3 transition-colors duration-300 hover:bg-white/[0.04] sm:rounded-2xl sm:p-4 md:p-5"
        >

          {/* GOLD LEFT LINE */}
          <div
            className="absolute left-0 top-0 h-full w-[1px] sm:w-[2px]"
            style={{ backgroundColor: seg.color }}
          />

          <div className="relative z-10">

            {/* TITLE + PERCENTAGE */}
            <div className="mb-2.5 flex items-center justify-between gap-2 sm:mb-3 sm:gap-3">

              <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full sm:h-3 sm:w-3"
                  style={{ backgroundColor: seg.color }}
                />

                <span className="min-w-0 truncate text-xs font-semibold text-white sm:text-sm md:text-base">
                  {seg.label}
                </span>
              </div>

              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                <span
                  className="font-mono text-sm font-bold sm:text-base md:text-lg"
                  style={{ color: seg.color }}
                >
                  {seg.pct}%
                </span>

                <span className="hidden font-mono text-xs text-bone/35 md:block">
                  {seg.amount}
                </span>
              </div>

            </div>

            {/* PROGRESS BAR */}
            <div className="relative h-1.5 overflow-hidden rounded-full bg-white/[0.06] sm:h-2">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${seg.color}, #F7A00B, #FFDFA3)`,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${seg.pct}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1.1,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            {/* DESCRIPTION */}
            <p className="mt-2 text-[10px] leading-4 text-bone/35 sm:mt-3 sm:text-xs sm:leading-5">
              {seg.copy}
            </p>

          </div>
        </motion.div>
      </Reveal>
    ))}
  </div>

</div>

        {/* BOTTOM TOTAL */}
        <Reveal variant="rise" delay={0.2}>
          <motion.div
            className="relative mt-10 flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl border border-[#F7A00B]/20 bg-[#F7A00B]/[0.035] px-5 py-5 sm:flex-row sm:px-7"
            animate={{
              borderColor: [
                'rgba(247,160,11,0.12)',
                'rgba(247,160,11,0.45)',
                'rgba(247,160,11,0.12)',
              ],
              boxShadow: [
                '0 0 0 rgba(247,160,11,0)',
                '0 0 30px rgba(247,160,11,0.16)',
                '0 0 0 rgba(247,160,11,0)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >

            <motion.div
              className="pointer-events-none absolute inset-y-0 -left-[30%] w-[20%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#FFDFA3]/15 to-transparent blur-md"
              animate={{ left: ['-30%', '130%'] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            />

            <div className="relative z-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone/35">Fixed Supply</p>

              <motion.p
                className="mt-1 font-gregular text-lg font-semibold text-white"
                animate={{
                  textShadow: [
                    '0 0 3px rgba(247,160,11,0)',
                    '0 0 14px rgba(247,160,11,0.45)',
                    '0 0 3px rgba(247,160,11,0)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                1,000,000,000 PVR
              </motion.p>
            </div>

            <div className="relative z-10 text-left sm:text-right">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone/35">Reference Price</p>

              <motion.p
                className="mt-1 font-gregular text-lg font-semibold text-[#F7A00B]"
                animate={{
                  textShadow: [
                    '0 0 4px rgba(247,160,11,0.25)',
                    '0 0 18px rgba(247,160,11,0.9)',
                    '0 0 4px rgba(247,160,11,0.25)',
                  ],
                  scale: [1, 1.04, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                $0.05
              </motion.p>
            </div>
          </motion.div>
        </Reveal>

      </div>
    </section>
  )
}