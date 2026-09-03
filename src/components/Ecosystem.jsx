import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Watermark from './Watermark'

const LAYERS = [
  {
    title: 'PVR Token',
    copy: 'The foundation of the ecosystem.',
  },
  {
    title: 'Fintech',
    copy: 'Financial technology applications and digital services.',
  },
  {
    title: 'RWA',
    copy: 'Real-World Asset infrastructure and potential tokenization applications.',
  },
  {
    title: 'PVR Platform',
    copy: 'Future utility platform connecting users with ecosystem services.',
  },
  {
    title: 'Partners',
    copy: 'Fintech, RWA, Web3, technology, and strategic partners.',
  },
  {
    title: 'Community',
    copy: 'A growing network of users, contributors, builders, and ecosystem participants.',
  },
]

const COMPONENTS = [
  {
    title: 'PVR Utility Platform',
    copy: 'A dedicated platform designed to bring together PVR-powered services and ecosystem utilities.',
  },
  {
    title: 'RWA Marketplace',
    copy: 'A potential future marketplace for eligible tokenized real-world assets.',
  },
  {
    title: 'Partner Hub',
    copy: 'A platform layer for ecosystem partners and integrations.',
  },
  {
    title: 'Rewards Center',
    copy: 'A dedicated area for community campaigns, incentives, and participation programs.',
  },
  {
    title: 'Analytics',
    copy: 'Future dashboards for ecosystem and token information.',
  },
]

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-ink-900/40 py-20 lg:py-100"
    >
      <Watermark
        position="bottom-left"
        size={480}
        direction={-1}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">


          {/* =====================================================
              LEFT SIDE — ECOSYSTEM
          ====================================================== */}

          <Reveal variant="rise">

            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-gradient-to-r from-[#F7A00B] to-[#FFDFA3]" />

              <span className="font-gregular text-xs uppercase tracking-[0.22em] text-[#FFDFA3]">
                Ecosystem
              </span>
            </div>


            {/* Heading */}
            <h2 className="mb-5 font-gregular text-balance text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl">

              <span className="bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent">
                The Purveyor
              </span>

              {' '}

              <span className="text-white">
                ecosystem
              </span>

            </h2>


            {/* Description */}
            <p className="mb-12 max-w-lg font-gregular leading-relaxed text-bone/60">
              Purveyor is designed around multiple interconnected layers that
              can evolve over time.
            </p>


            {/* ================= TIMELINE ================= */}

            <div className="relative pl-9">

              {/* Vertical line */}
              <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-[#F7A00B] via-[#FFDFA3]/40 to-transparent" />

              <div className="space-y-7">

                {LAYERS.map((layer, i) => (

                  <Reveal
                    key={layer.title}
                    variant="fade"
                    delay={i * 0.06}
                  >

                    <div className="group relative">

                      {/* Timeline Dot */}
                      <motion.span
                        whileHover={{
                          scale: 1.35,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="absolute -left-[39px] top-1 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-[#F7A00B] bg-ink-950 shadow-[0_0_12px_rgba(247,160,11,0.45)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F7A00B]" />
                      </motion.span>


                      {/* Layer Title */}
                      <h4 className="mb-1 font-gregular text-lg font-bold text-[#FFDFA3] transition-colors duration-300 group-hover:text-white">
                        {layer.title}
                      </h4>


                      {/* Layer Description */}
                      <p className="max-w-md font-gregular text-sm leading-relaxed text-bone/55">
                        {layer.copy}
                      </p>

                    </div>

                  </Reveal>

                ))}

              </div>

            </div>

          </Reveal>


          {/* =====================================================
              RIGHT SIDE — COMPONENTS
          ====================================================== */}

          <Reveal
            variant="rise"
            delay={0.15}
          >

            {/* Header */}
            <div className="mb-10">

              {/* Label */}
              <div className="mb-5 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-gradient-to-r from-[#F7A00B] to-[#FFDFA3]" />

                <span className="font-gregular text-xs uppercase tracking-[0.22em] text-[#FFDFA3]">
                  Components
                </span>

              </div>


              {/* Heading */}
              <h3 className="mb-4 font-gregular text-3xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-4xl">

                <span className="text-white">
                  Future ecosystem
                </span>

                {' '}

                <span className="bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#FFFFFF] bg-clip-text text-transparent">
                  components
                </span>

              </h3>


              {/* Description */}
              <p className="max-w-lg font-gregular leading-relaxed text-bone/60">
                Explore the utility layers designed to connect users,
                partners, assets, and future services.
              </p>

            </div>


            {/* ================= COMPONENT CARDS ================= */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {COMPONENTS.map((component, i) => (

                <Reveal
                  key={component.title}
                  variant="rise"
                  delay={0.2 + i * 0.06}
                >

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: 'easeOut',
                    }}
                    className={`group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-950/70 p-6 transition-all duration-500 hover:border-[#F7A00B]/40 hover:shadow-[0_15px_40px_rgba(247,160,11,0.10)] ${
                      i === COMPONENTS.length - 1
                        ? 'sm:col-span-2'
                        : ''
                    }`}
                  >

                    {/* ================= GOLD GLOW ================= */}

                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#F7A00B]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                    {/* ================= TOP ROW ================= */}

                    <div className="relative z-10 mb-7 flex items-center justify-between">

                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#F7A00B]/60">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <span className="h-2 w-2 rounded-full bg-[#F7A00B] shadow-[0_0_10px_rgba(247,160,11,0.8)]" />

                    </div>


                    {/* ================= CARD CONTENT ================= */}

                    <div className="relative z-10">

                      <h4 className="mb-3 font-gregular text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#FFDFA3]">
                        {component.title}
                      </h4>

                      <p className="font-gregular text-sm leading-relaxed text-bone/55">
                        {component.copy}
                      </p>

                    </div>


                    {/* ================= BOTTOM ACCENT ================= */}

                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#F7A00B]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  </motion.div>

                </Reveal>

              ))}

            </div>

          </Reveal>

        </div>

      </div>
    </section>
  )
}