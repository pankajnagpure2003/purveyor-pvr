import logoVertical from '../assets/logo-horizontal.webp'

const QUICK_LINKS = [
  'Home',
  'About Us',
  'Use Cases',
  'Roadmap',
  'Ecosystem',
  'Tokenomics',
  'FAQ',
]

const RESOURCES = [
  { label: 'Whitepaper', href: '#faq' },
  { label: 'Presale', href: '#contract' },
  { label: 'Contract Address', href: '#contract' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bone/10 pt-12 pb-7 sm:pt-14 sm:pb-8 md:pt-16 md:pb-9 lg:pt-20 lg:pb-10">

      {/* ================= MAIN CONTAINER ================= */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-7 md:px-8 lg:px-10">

        {/* ================= FOOTER CONTENT ================= */}
        <div className="mb-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:mb-12 sm:gap-x-12 sm:gap-y-12 md:gap-x-16 lg:mb-14 lg:grid-cols-4 lg:gap-12">

          {/* ================= BRAND ================= */}
          <div className="col-span-2 min-w-0 lg:col-span-1">

            <img
              src={logoVertical}
              alt="Purveyor"
              className="mb-4 h-14 w-auto sm:h-16 md:h-18 lg:mb-4 lg:h-20"
            />

            <p className="max-w-sm text-xs leading-5 text-bone/50 sm:text-sm sm:leading-6 lg:leading-relaxed">
              Fintech · Real-World Assets · Digital Finance
              <br />
              PVR — Connecting real-world value with digital finance.
            </p>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div className="min-w-0">

            <h5 className="mb-4 font-display text-xs font-medium text-gold-300 sm:text-sm">
              Quick Links
            </h5>

            <ul className="space-y-2 sm:space-y-2.5">

              {QUICK_LINKS.map((l) => (

                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block text-xs leading-5 text-bone/55 transition-colors duration-200 hover:text-gold-300 sm:text-sm"
                  >
                    {l}
                  </a>
                </li>

              ))}

            </ul>

          </div>


          {/* ================= RESOURCES ================= */}
          <div className="min-w-0">

            <h5 className="mb-4 font-display text-xs font-medium text-gold-300 sm:text-sm">
              Resources
            </h5>

            <ul className="space-y-2 sm:space-y-2.5">

              {RESOURCES.map((l) => (

                <li key={l.label}>
                  <a
                    href={l.href}
                    className="inline-block text-xs leading-5 text-bone/55 transition-colors duration-200 hover:text-gold-300 sm:text-sm"
                  >
                    {l.label}
                  </a>
                </li>

              ))}

            </ul>

          </div>


          {/* ================= OFFICIAL WEBSITE ================= */}
          <div className="col-span-2 min-w-0 sm:col-span-1">

            <h5 className="mb-3 font-display text-xs font-medium text-gold-300 sm:text-sm">
              Official Website
            </h5>

           <a
  href="https://purveyor-pvr.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-gold-300 transition-colors duration-300"
>
  Website
</a>


            {/* Contract */}
            <h5 className="mb-2 mt-5 font-display text-xs font-medium text-gold-300 sm:mt-6 sm:text-sm">
              Contract
            </h5>

            <p className="max-w-full break-all font-mono text-[9px] leading-4 text-bone/45 sm:text-[10px] sm:leading-5 md:text-xs">
              0x594bf3E0d6e297f0178d5daa1700B39f3d54f2fB
            </p>

          </div>

        </div>


        {/* ================= DISCLAIMER ================= */}
        <div className="border-t border-bone/10 pt-6 sm:pt-7 md:pt-8">

          <p className="max-w-4xl text-[10px] leading-5 text-bone/35 sm:text-xs sm:leading-5 md:leading-relaxed">

            Digital assets involve risk and may experience significant price
            volatility. Nothing on this website should be interpreted as
            financial, investment, legal, or tax advice. Future products,
            services, partnerships, RWA offerings, exchange listings, and
            ecosystem features are subject to development, availability,
            regulatory requirements, and third-party decisions. Users should
            conduct independent research and assess the risks before
            participating.

          </p>


          {/* Copyright */}
          <p className="mt-4 text-[10px] text-bone/30 sm:mt-5 sm:text-xs md:mt-6">

            © {new Date().getFullYear()} Purveyor. All rights reserved.

          </p>

        </div>

      </div>

    </footer>
  )
}