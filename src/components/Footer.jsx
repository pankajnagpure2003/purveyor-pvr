import logoVertical from '../assets/logo-horizontal.png'

const QUICK_LINKS = ['Home', 'About Us', 'Use Cases', 'Roadmap', 'Ecosystem', 'Tokenomics', 'FAQ']
const RESOURCES = [
  { label: 'Whitepaper', href: '#faq' },
  { label: 'Presale', href: '#contract' },
  { label: 'Contract Address', href: '#contract' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-bone/10 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div>
            <img src={logoVertical} alt="Purveyor" className="h-20 w-auto mb-4" />
            <p className="text-sm text-bone/50 leading-relaxed max-w-xs">
              Fintech · Real-World Assets · Digital Finance
              <br />
              PVR — Connecting real-world value with digital finance.
            </p>
          </div>

          <div>
            <h5 className="font-display text-sm text-gold-300 mb-4">Quick Links</h5>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-bone/55 hover:text-gold-300 transition-colors duration-200"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display text-sm text-gold-300 mb-4">Resources</h5>
            <ul className="space-y-2.5">
              {RESOURCES.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-bone/55 hover:text-gold-300 transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display text-sm text-gold-300 mb-4">Official Website</h5>
            <p className="text-sm text-bone/55 mb-4">purveyorpvr.com</p>
            <h5 className="font-display text-sm text-gold-300 mb-2">Contract</h5>
            <p className="font-mono text-xs text-bone/45 break-all">
              0x594bf3E0d6e297f0178d5daa1700B39f3d54f2fB
            </p>
          </div>
        </div>

        <div className="border-t border-bone/10 pt-8">
          <p className="text-xs text-bone/35 leading-relaxed max-w-4xl">
            Digital assets involve risk and may experience significant price volatility.
            Nothing on this website should be interpreted as financial, investment, legal,
            or tax advice. Future products, services, partnerships, RWA offerings, exchange
            listings, and ecosystem features are subject to development, availability,
            regulatory requirements, and third-party decisions. Users should conduct
            independent research and assess the risks before participating.
          </p>
          <p className="text-xs text-bone/30 mt-6">© {new Date().getFullYear()} Purveyor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
