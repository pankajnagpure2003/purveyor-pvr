import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import coin from '../assets/coin.png'
import CountUp from './CountUp'

const headline = ['Powering', 'the', 'Future', 'of', 'Digital', 'Finance']

const stats = [
  { value: 1, suffix: 'B', label: 'Total Supply', mono: 'PVR' },
  { value: null, display: 'BSC', label: 'Blockchain Network', mono: 'BNB Chain' },
  { value: null, display: 'RWA', label: 'Core Focus', mono: '—' },
  { value: 7, suffix: '', label: 'Token Precision', mono: 'Decimals' },
]

const sparkles = [
  { left: '10%', top: '18%', size: 6 },
  { left: '24%', top: '72%', size: 7 },
  { left: '38%', top: '24%', size: 5 },
  { left: '52%', top: '66%', size: 7 },
  { left: '68%', top: '28%', size: 6 },
  { left: '82%', top: '60%', size: 8 },
  { left: '74%', top: '82%', size: 5 },
  { left: '18%', top: '84%', size: 6 },
]

const particulates = [
  { left: '12%', top: '28%', size: 3 },
  { left: '26%', top: '42%', size: 3 },
  { left: '40%', top: '72%', size: 4 },
  { left: '58%', top: '26%', size: 3 },
  { left: '70%', top: '52%', size: 4 },
  { left: '84%', top: '24%', size: 3 },
  { left: '78%', top: '78%', size: 3 },
  { left: '18%', top: '78%', size: 3 },
]

export default function Hero() {
  const ref = useRef(null)
  const coinSceneRef = useRef(null)
  const coinRef = useRef(null)
  const ringRef = useRef(null)
  const auraRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const coinY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 120]
  )

  const coinRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 25]
  )

  useEffect(() => {
    if (
      reduceMotion ||
      !coinRef.current ||
      !ringRef.current ||
      !auraRef.current
    )
      return

    const ctx = gsap.context(() => {
      gsap.set(coinRef.current, {
        transformPerspective: 1200,
        transformOrigin: 'center center',
      })

      gsap.to(coinRef.current, {
        y: -18,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(coinRef.current, {
        rotationY: 360,
        duration: 16,
        repeat: -1,
        ease: 'none',
      })

      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: 'none',
      })

      gsap.to(ringRef.current, {
        scale: 1.07,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'sine.inOut',
      })

      gsap.to(auraRef.current, {
        scale: 1.08,
        opacity: 0.9,
        repeat: -1,
        yoyo: true,
        duration: 4.2,
        ease: 'sine.inOut',
      })

      gsap.utils.toArray('.coin-particle').forEach((particle, index) => {
        gsap.to(particle, {
          x: gsap.utils.random(-12, 12),
          y: gsap.utils.random(-14, 14),
          opacity: gsap.utils.random(0.5, 1),
          duration: 2.8 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        })
      })

      gsap.utils.toArray('.coin-sparkle').forEach((spark, index) => {
        gsap.to(spark, {
          opacity: [0.25, 1, 0.3],
          scale: [0.8, 1.4, 0.9],
          duration: 2.2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.15,
        })
      })
    }, coinSceneRef)

    return () => ctx.revert()
  }, [reduceMotion])

  const handleCoinMove = (event) => {
    if (!coinSceneRef.current || reduceMotion) return

    const rect = coinSceneRef.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5

    gsap.to(coinSceneRef.current, {
      rotationY: px * 18,
      rotationX: -py * 14,
      duration: 0.8,
      ease: 'power3.out',
      transformPerspective: 1200,
    })

    gsap.to(coinRef.current, {
      x: px * 18,
      y: py * 16,
      duration: 0.8,
      ease: 'power3.out',
    })

    gsap.to(auraRef.current, {
      x: px * 28,
      y: py * 20,
      duration: 0.8,
      ease: 'power3.out',
    })
  }

  const handleCoinLeave = () => {
    if (!coinSceneRef.current || reduceMotion) return

    gsap.to(coinSceneRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: 'power3.out',
    })

    gsap.to(coinRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })

    gsap.to(auraRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-28 md:pb-16 lg:pt-28 lg:pb-16 overflow-hidden ledger-bg"
    >

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/70 to-ink-950" />

      <div className="pointer-events-none absolute inset-0 hero-graphic">

        <motion.div
          className="hero-orb hero-orb-1"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 24, 0],
                  y: [0, -18, 0],
                  scale: [1, 1.08, 1],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />

        <motion.div
          className="hero-orb hero-orb-2"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -28, 0],
                  y: [0, 24, 0],
                  scale: [1, 1.12, 1],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 14,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />

        <motion.div
          className="hero-ring hero-ring-1"
          animate={reduceMotion ? undefined : { rotate: [0, 360] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 24,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        />

        <motion.div
          className="hero-ring hero-ring-2"
          animate={reduceMotion ? undefined : { rotate: [360, 0] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 28,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        />
      </div>

      <div className="pointer-events-none absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/55 to-transparent" />

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto max-w-12xl w-full px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="min-w-0">

          {/* LABEL */}
          <div className="relative ml-0 sm:ml-[10px] mb-5 sm:mb-6 inline-flex items-center">

            <span className="pointer-events-none absolute -inset-2 sm:-inset-3 rounded-full border border-[#F7A00B]/25 animate-[spin_8s_linear_infinite]" />

            <span className="pointer-events-none absolute -inset-1.5 sm:-inset-2 rounded-full border border-dashed border-[#FFCB72]/30 animate-[spin_5s_linear_infinite_reverse]" />

            <span className="pointer-events-none absolute -right-2 sm:-right-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#FFCB72] shadow-[0_0_8px_#FFCB72,0_0_18px_#F7A00B] animate-[orbitGlow_2s_ease-in-out_infinite]" />

            <span className="pointer-events-none absolute inset-0 rounded-full bg-[#F7A00B]/10 blur-xl animate-[pulseGold_2.5s_ease-in-out_infinite]" />

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                textShadow: [
                  '0 0 0 rgba(247,160,11,0)',
                  '0 0 16px rgba(247,160,11,0.65)',
                  '0 0 28px rgba(255,203,114,0.35)',
                  '0 0 0 rgba(247,160,11,0)',
                ],
              }}
              transition={{
                duration: 0.6,
                textShadow: {
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="relative z-10 font-mono text-[9px] sm:text-xs tracking-[0.12em] sm:tracking-[0.19em] uppercase text-[#FFCB72] hero-label"
            >
              Fintech &amp; Real-World Asset Ecosystem
            </motion.p>

          </div>

          {/* HEADLINE */}
          <h1 className="font-gregular text-balance text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-7xl leading-[1.05] font-bold text-bone mb-3 tracking-[-0.025em]">

            {headline.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 28,
                        filter: 'blur(8px)',
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }}
                exit={{
                  opacity: 0,
                  y: -12,
                  filter: 'blur(6px)',
                }}
                transition={{
                  duration: 0.72,
                  delay: 0.15 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.04em] sm:mr-[0.10em] px-1 sm:px-2 max-w-5xl uppercase text-[1.65rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-6xl leading-tight font-gregular font-bold tracking-[-0.025em] bg-[linear-gradient(90deg,#F7A00B_0%,#FFB52E_25%,#FFDFA0_45%,#FFF8E7_52%,#FFFFFF_100%)] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(247,160,11,0.18)]"
              >
                {word}
              </motion.span>
            ))}

          </h1>

          {/* SUB HEADING */}
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="font-display text-base sm:text-xl md:text-2xl lg:text-2xl font-semibold tracking-[0.02em] text-gold-300/95 mb-5 sm:mb-6 ml-0 sm:ml-[10px]"
          >
            Connecting real-world value with digital finance
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="max-w-xl leading-relaxed mb-7 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-base text-white ml-0 sm:ml-[10px] font-normal"
          >
            Purveyor (PVR) is a blockchain-powered ecosystem designed to connect digital
            assets, financial technology, and real-world economic value through scalable
            infrastructure built on the BNB Smart Chain.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14 md:mb-16"
          >

           <a href="#contract" className="btn-shimmer w-full sm:w-auto px-5 py-3.5 rounded-full bg-gold-400 text-ink-950 font-semibold tracking-wide hover:bg-gold-300 transition-colors duration-200 text-center">
  Buy PVR Now
</a>

            <a
              href="#faq"
              className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-bone/25 text-white font-bold hover:border-gold-400/60 hover:text-gold-300 transition-colors duration-200 text-center"
            >
              Read Whitepaper
            </a>

          </motion.div>

          {/* STATS */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3"
          >

            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.25 + i * 0.08,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-2xl p-[1px]"
              >

                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#BA7807,#F7A00B,#FFDFA3,#FFFFFF,#F7A00B,#BA7807)] opacity-60 transition-opacity duration-500 group-hover:opacity-100 animate-[spin_8s_linear_infinite]" />

                <div className="relative h-full min-h-[105px] sm:min-h-[115px] md:min-h-[125px] overflow-hidden rounded-[15px] bg-ink-950/95 px-2 sm:px-3 md:px-4 py-4 sm:py-5 md:py-6 text-center">

                  <div className="pointer-events-none absolute -top-12 left-1/2 h-24 w-32 -translate-x-1/2 rounded-full bg-[#F7A00B]/10 blur-3xl transition-all duration-500 group-hover:bg-[#F7A00B]/20" />

                  <div className="pointer-events-none absolute -right-5 -top-5 h-16 w-16 rounded-full border border-[#F7A00B]/10 transition-transform duration-700 group-hover:scale-125" />

                  <div className="relative z-10 mx-auto mb-3 flex h-5 w-5 items-center justify-center">

                    <span className="absolute h-5 w-5 rounded-full border border-[#F7A00B]/30 animate-ping" />

                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFDFA3] shadow-[0_0_10px_#F7A00B]" />

                  </div>

                  <div className="relative z-10 font-gregular text-lg sm:text-2xl md:text-3xl font-bold tracking-[-0.02em]">

                    <span className="bg-gradient-to-b from-[#FFFFFF] via-[#FFDFA3] to-[#F7A00B] bg-clip-text text-transparent">

                      {s.value !== null ? (
                        <CountUp
                          value={s.value}
                          suffix={s.suffix}
                        />
                      ) : (
                        s.display
                      )}

                    </span>

                  </div>

                  <div className="relative z-10 mt-2 font-gregular text-[8px] sm:text-[10px] font-medium uppercase tracking-[0.12em] sm:tracking-[0.18em] text-bone/45 transition-colors duration-300 group-hover:text-[#FFDFA3]">
                    {s.label}
                  </div>

                  <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#F7A00B] via-[#FFDFA3] to-[#F7A00B] transition-all duration-500 group-hover:w-16" />

                </div>
              </motion.div>
            ))}

          </motion.div>

        </div>

        {/* COIN */}
        <motion.div
          ref={coinSceneRef}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            y: coinY,
            rotate: coinRotate,
          }}
          onMouseMove={handleCoinMove}
          onMouseLeave={handleCoinLeave}
          className="coin-scene relative mx-auto mt-2 sm:mt-4 md:mt-6 lg:mt-0 lg:mx-0 hidden lg:flex"
        >

          <div ref={auraRef} className="coin-aura" />

          <div ref={ringRef} className="coin-orbit-ring" />

          <div className="coin-particles" aria-hidden="true">

            {particulates.map((particle, index) => (
              <span
                key={index}
                className="coin-particle"
                style={{
                  left: particle.left,
                  top: particle.top,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                }}
              />
            ))}

          </div>

          <div ref={coinRef} className="coin-core">

            <div className="coin-shine" />

            <img
              src={coin}
              alt="PVR coin"
              className="coin-image coin-image-large"
            />

            {sparkles.map((spark, index) => (
              <span
                key={index}
                className="coin-sparkle"
                style={{
                  left: spark.left,
                  top: spark.top,
                  width: `${spark.size}px`,
                  height: `${spark.size}px`,
                }}
              />
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  )
}