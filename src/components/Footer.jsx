import { useState } from 'react'
import logoVertical from '../assets/logo-horizontal.webp'

const QUICK_LINKS = [
  { label: 'Home', href: '#home', number: '01' },
  { label: 'About Us', href: '#about', number: '02' },
  { label: 'Use Cases', href: '#use-cases', number: '03' },
  { label: 'Roadmap', href: '#roadmap', number: '04' },
  { label: 'Ecosystem', href: '#ecosystem', number: '05' },
  { label: 'Tokenomics', href: '#tokenomics', number: '06' },
  { label: 'FAQ', href: '#faq', number: '07' },
]

const RESOURCES = [
  { label: 'Whitepaper', href: '#faq' },
  { label: 'Presale', href: '#contract' },
  { label: 'Contract Address', href: '#contract' },
]

const SOCIAL_LINKS = [
  {
    name: 'X',
    href: 'https://x.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.964 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: 'https://t.me/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M21.7 3.2c.3-1.2-.9-1.7-1.8-1.3L2.8 8.7c-1.2.5-1.2 1.3-.2 1.7l4.4 1.4 1.7 5.4c.2.6.4.7.8.7.3 0 .5-.1.7-.3l2.1-2 4.4 3.2c.8.5 1.4.2 1.6-.7L21.7 3.2ZM8 11.4l9.9-6.2-7.7 7.3-.3 3-1.9-6.1Z" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    href: 'https://discord.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M19.5 5.1A16.7 16.7 0 0 0 15.4 4l-.5 1a15.4 15.4 0 0 0-5.8 0l-.5-1a16.7 16.7 0 0 0-4.1 1.1C1.8 8.4 1.1 11.6 1.4 14.8a16.7 16.7 0 0 0 5 2.5l1.2-1.6c-.7-.3-1.3-.6-1.9-1 .2-.1.4-.2.6-.3 3.7 1.7 7.7 1.7 11.3 0 .2.1.4.2.6.3-.6.4-1.2.7-1.9 1l1.2 1.6a16.7 16.7 0 0 0 5-2.5c.4-3.8-.6-7-3-9.7ZM8.4 13.2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm7.2 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

const CONTRACT_ADDRESS = '0x594bf3E0d6e297f0178d5daa1700B39f3d54f2fB'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2200)
    } catch (error) {
      console.error('Failed to copy contract address:', error)
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#050505] pt-16 pb-7 sm:pt-20 sm:pb-8 md:pt-24 md:pb-10 lg:pt-28 lg:pb-12">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-[-180px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#F7A00B]/[0.045] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-[100px] h-[450px] w-[450px] rounded-full bg-[#F7A00B]/[0.035] blur-[130px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:55px_55px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-7 md:px-8 lg:px-10">

        {/* ================= HERO FOOTER ================= */}
        <div className="relative mb-14 overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-white/[0.045] via-white/[0.02] to-transparent p-6 sm:mb-16 sm:p-8 md:p-10 lg:mb-20 lg:p-12">

          <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[280px] w-[280px] rounded-full bg-[#F7A00B]/[0.06] blur-[90px]" />

          <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

            {/* BRAND */}
            <div className="max-w-2xl">

              <a href="#home" className="group inline-block">

                <img
                  src={logoVertical}
                  alt="Purveyor"
                  className="h-16 w-auto transition-transform duration-500 group-hover:scale-[1.04] sm:h-20 md:h-24"
                />

              </a>

              <div className="mt-5 flex items-center gap-3">

                <span className="h-px w-8 bg-[#F7A00B] sm:w-12" />

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#F7A00B]/70 sm:text-[10px]">
                  Digital Finance · RWA · Web3
                </span>

              </div>

              <p className="mt-5 max-w-xl text-sm leading-6 text-bone/45 sm:text-base sm:leading-7">
                Connecting real-world value with digital finance through
                transparent infrastructure, real-world assets and the PVR
                ecosystem.
              </p>

            </div>


            {/* SOCIAL AREA */}
            <div className="shrink-0 md:text-right">

              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-bone/30 sm:text-[10px]">
                Join the Community
              </p>

              <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                Stay Connected
              </h3>

              <div className="mt-5 flex items-center gap-2.5 md:justify-end sm:gap-3">

                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="group/social relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/[0.09] bg-black/30 text-bone/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F7A00B]/50 hover:bg-[#F7A00B]/10 hover:text-[#F7A00B] hover:shadow-[0_12px_35px_rgba(247,160,11,0.14)] sm:h-12 sm:w-12"
                  >
                    <span className="absolute inset-0 translate-y-full bg-[#F7A00B]/10 transition-transform duration-300 group-hover/social:translate-y-0" />

                    <span className="relative z-10 transition-transform duration-300 group-hover/social:scale-110">
                      {social.icon}
                    </span>
                  </a>
                ))}

              </div>

            </div>

          </div>

        </div>


        {/* ================= NAVIGATION ================= */}
        <div className="mb-14 grid gap-10 sm:mb-16 md:grid-cols-2 lg:mb-20 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">

          {/* QUICK LINKS */}
          <div>

            <div className="mb-6 flex items-center gap-3">

              <span className="font-mono text-[9px] tracking-[0.25em] text-[#F7A00B]/70">
                01
              </span>

              <h4 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-white sm:text-base">
                Explore
              </h4>

              <span className="h-px flex-1 bg-white/[0.08]" />

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">

              {QUICK_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between border-b border-white/[0.06] py-3.5 pr-5 transition-all duration-300 hover:border-[#F7A00B]/25 sm:py-4"
                >

                  <span className="flex items-center gap-3">

                    <span className="font-mono text-[8px] text-bone/20 transition-colors duration-300 group-hover:text-[#F7A00B]/60">
                      {link.number}
                    </span>

                    <span className="text-xs text-bone/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white sm:text-sm">
                      {link.label}
                    </span>

                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-3.5 w-3.5 -translate-x-2 text-[#F7A00B]/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-[#F7A00B]"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>

                </a>
              ))}

            </div>

          </div>


          {/* RESOURCES */}
          <div>

            <div className="mb-6 flex items-center gap-3">

              <span className="font-mono text-[9px] tracking-[0.25em] text-[#F7A00B]/70">
                02
              </span>

              <h4 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-white sm:text-base">
                Resources
              </h4>

              <span className="h-px flex-1 bg-white/[0.08]" />

            </div>

            <div className="space-y-2">

              {RESOURCES.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F7A00B]/25 hover:bg-[#F7A00B]/[0.035] sm:py-4"
                >

                  <span className="text-xs text-bone/50 transition-colors duration-300 group-hover:text-white sm:text-sm">
                    {link.label}
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-4 w-4 text-bone/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F7A00B]"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>

                </a>
              ))}

            </div>

          </div>


          {/* CONTRACT */}
          <div>

            <div className="mb-6 flex items-center gap-3">

              <span className="font-mono text-[9px] tracking-[0.25em] text-[#F7A00B]/70">
                03
              </span>

              <h4 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-white sm:text-base">
                PVR Contract
              </h4>

              <span className="h-px flex-1 bg-white/[0.08]" />

            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.035] to-transparent p-4 transition-all duration-300 hover:border-[#F7A00B]/25 sm:p-5">

              <div className="mb-4 flex items-center justify-between">

                <div>

                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-bone/25">
                    Network
                  </p>

                  <p className="mt-1 text-xs font-medium text-bone/65 sm:text-sm">
                    BNB Smart Chain
                  </p>

                </div>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F7A00B]/20 bg-[#F7A00B]/[0.06] text-[#F7A00B]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-4 w-4"
                  >
                    <path d="M12 2v20" />
                    <path d="m7 7 5-5 5 5" />
                    <path d="m7 17 5 5 5-5" />
                  </svg>

                </span>

              </div>

              <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.18em] text-bone/25">
                Contract Address
              </p>

              <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/30 p-2.5">

                <p className="min-w-0 flex-1 break-all font-mono text-[8px] leading-4 text-bone/45 sm:text-[9px]">
                  {CONTRACT_ADDRESS}
                </p>

                <button
                  type="button"
                  onClick={copyContract}
                  aria-label="Copy contract address"
                  title={copied ? 'Copied' : 'Copy contract address'}
                  className="group/copy flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035] text-bone/45 transition-all duration-300 hover:border-[#F7A00B]/40 hover:bg-[#F7A00B]/10 hover:text-[#F7A00B] active:scale-90"
                >

                  {copied ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 transition-transform duration-300 group-hover/copy:scale-110">
                      <rect x="9" y="9" width="11" height="11" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}

                </button>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <span className="text-[9px] text-bone/25">
                  PVR Token
                </span>

                <a
                  href="https://purveyor-pvr.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/site flex items-center gap-1.5 text-[9px] text-bone/35 transition-colors duration-300 hover:text-[#F7A00B]"
                >
                  Website

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-3 w-3 transition-transform duration-300 group-hover/site:translate-x-0.5 group-hover/site:-translate-y-0.5"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>

                </a>

              </div>

            </div>

          </div>

        </div>


        {/* ================= GOLD CTA LINE ================= */}
        <div className="relative mb-10 overflow-hidden rounded-2xl border border-[#F7A00B]/15 bg-[#F7A00B]/[0.035] px-5 py-5 sm:mb-12 sm:px-7 sm:py-6">

          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#FFDFA3] via-[#F7A00B] to-transparent" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="pl-2">

              <p className="font-display text-sm font-medium text-white sm:text-base">
                Building the future of real-world finance.
              </p>

              <p className="mt-1 text-[10px] text-bone/35 sm:text-xs">
                Explore the PVR ecosystem and stay updated.
              </p>

            </div>

            <a
              href="#home"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#F7A00B]/25 bg-[#F7A00B]/10 px-5 py-2.5 text-[10px] font-medium text-[#FFDFA3] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F7A00B]/50 hover:bg-[#F7A00B]/15 sm:px-6 sm:py-3 sm:text-xs"
            >
              Explore PVR

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>

            </a>

          </div>

        </div>


        {/* ================= DISCLAIMER ================= */}
        <div className="border-t border-white/[0.07] pt-7 sm:pt-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

            <div className="max-w-4xl">

              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#F7A00B]/50">
                Risk Disclosure
              </p>

              <p className="mt-3 text-[10px] leading-5 text-bone/30 sm:text-xs sm:leading-6">
                Digital assets involve risk and may experience significant
                price volatility. Nothing on this website should be interpreted
                as financial, investment, legal, or tax advice. Future products,
                services, partnerships, RWA offerings, exchange listings, and
                ecosystem features are subject to development, availability,
                regulatory requirements, and third-party decisions. Users
                should conduct independent research and assess the risks before
                participating.
              </p>

            </div>

            {/* BACK TO TOP */}
            <a
              href="#home"
              aria-label="Back to top"
              title="Back to top"
              className="group/top flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-bone/35 transition-all duration-300 hover:-translate-y-1 hover:border-[#F7A00B]/40 hover:bg-[#F7A00B]/10 hover:text-[#F7A00B]"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 transition-transform duration-300 group-hover/top:-translate-y-1"
              >
                <path d="M12 19V5" />
                <path d="m6 11 6-6 6 6" />
              </svg>

            </a>

          </div>


          {/* COPYRIGHT */}
          <div className="mt-7 flex flex-col gap-2 border-t border-white/[0.05] pt-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[9px] text-bone/25 sm:text-[10px]">
              © {new Date().getFullYear()} Purveyor. All rights reserved.
            </p>

            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-bone/20 sm:text-[9px]">
              PVR · Digital Finance
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}