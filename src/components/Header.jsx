import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logoHorizontal from '../assets/logo-horizontal.webp'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Contract', href: '#contract' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Logo click handler
  const handleLogoClick = (e) => {
    e.preventDefault()

    const homeSection = document.getElementById('home')

    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'bg-ink-950/90 backdrop-blur-md border-b border-gold-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-12xl px-6 lg:px-10 flex items-center justify-between h-20">

        {/* LOGO */}
        <a
          href="#home"
          onClick={handleLogoClick}
          className="flex items-center shrink-0 group cursor-pointer"
          aria-label="Go to Home"
        >
          <img
            src={logoHorizontal}
            alt="Purveyor PVR"
            className="w-[180px] h-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="tracking-wide block py-2 px-3 text-white hover:bg-gray-700 md:hover:bg-transparent md:p-0 dark:border-gray-700 hover:text-[#f7b149] font-outfit"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex items-center gap-3">

          <a
            href="#faq"
            className="text-sm px-4 py-2 rounded-full border border-bone/20 text-white hover:border-gold-400/60 hover:text-gold-300 transition-colors duration-200"
          >
            Whitepaper
          </a>

          <a
            href="#contract"
            className="btn-shimmer text-sm px-5 py-2 rounded-full bg-gold-400 text-ink-950 font-bold hover:bg-gold-300 transition-colors duration-200"
          >
            Buy Now
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-bone p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 flex flex-col gap-1.5">

            <motion.span
              animate={{
                rotate: open ? 45 : 0,
                y: open ? 6 : 0,
              }}
              className="h-[1.5px] w-full bg-bone origin-center"
            />

            <motion.span
              animate={{
                opacity: open ? 0 : 1,
              }}
              className="h-[1.5px] w-full bg-bone"
            />

            <motion.span
              animate={{
                rotate: open ? -45 : 0,
                y: open ? -6 : 0,
              }}
              className="h-[1.5px] w-full bg-bone origin-center"
            />

          </div>
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="lg:hidden overflow-hidden bg-ink-950 border-b border-gold-500/10"
          >

            <div className="px-6 py-6 flex flex-col gap-4">

              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-bone/80 hover:text-gold-300"
                >
                  {link.label}
                </a>
              ))}

              <div className="flex gap-3 pt-2">

                <a
                  href="#faq"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center text-sm px-4 py-2.5 rounded-full border border-bone/20 text-bone/80"
                >
                  Whitepaper
                </a>

                <a
                  href="#contract"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center text-sm px-4 py-2.5 rounded-full bg-gold-400 text-ink-950 font-medium"
                >
                  Buy Now
                </a>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}