import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Watermark from './Watermark'
import token from "../assets/content.webp";

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
    <svg viewBox="0 0 200 200" className="w-56 h-56 sm:w-64 sm:h-64 -rotate-90">
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
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          />
        )
      })}
    </svg>
  )
}

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-50 lg:py-100 overflow-hidden">
      <Watermark position="top-left" size={500} direction={1} opacity={0.045} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
       <Reveal variant="rise" className="max-w-3xl mb-16 text-left">

  <div className="flex items-center gap-3 mb-5">
    <span className="h-[2px] w-10 bg-gradient-to-r from-[#F7A00B] to-[#FFDFA3]" />

    <span className="font-gregular text-xs uppercase tracking-[0.22em] text-[#FFDFA3]">
      Tokenomics
    </span>
  </div>

  <h2 className="font-gregular text-balance text-4xl sm:text-5xl font-bold mb-5 leading-[1.08] tracking-[-0.035em]">
    <span className="bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent">
      Simple.
    </span>{" "}
    <span className="text-white">
      Strategic.
    </span>{" "}
    <span className="bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent">
      Built for growth.
    </span>
  </h2>

  <p className="font-gregular text-bone/60 leading-relaxed max-w-2xl">
    A fixed supply of 1,000,000,000 PVR (100 Crore), allocated to support
    liquidity, ecosystem development, community growth, and long-term reserves.
  </p>

</Reveal>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 mb-20">
          <Reveal variant="rise">
            <table className="w-full text-sm">
              <tbody>
                {INFO.map(([k, v], i) => (
                  <tr
                    key={k}
                    className={`hover:bg-bone/[0.03] transition-colors duration-200 ${
                      i !== INFO.length - 1 ? 'border-b border-bone/10' : ''
                    }`}
                  >
                    <td className="py-3.5 text-bone/50 font-mono text-xs">{k}</td>
                    <td className="py-3.5 text-right text-bone font-display text-base">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal variant="scale" delay={0.1} className="flex items-center justify-center">
  <div className="relative w-full max-w-xl">
    <img src={token} alt="PVR Ecosystem" className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(247,160,11,0.2)]" />
  </div>
</Reveal>
        </div>

        <div className="space-y-5">
          {ALLOCATION.map((seg, i) => (
            <Reveal key={seg.label} variant="fade" delay={i * 0.05}>
              <div className="grid sm:grid-cols-[200px_1fr_auto] gap-3 sm:gap-6 items-center">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                  <span className="text-sm text-bone/85">{seg.label}</span>
                </div>
                <div className="h-2 rounded-full bg-bone/8 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: seg.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${seg.pct}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="text-right sm:text-left">
                  <span className="font-mono text-xs text-gold-300">{seg.pct}%</span>
                  <span className="hidden sm:inline text-xs text-bone/40 ml-3">{seg.amount}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
