import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import UseCases from './components/UseCases'
import Roadmap from './components/Roadmap'
import Ecosystem from './components/Ecosystem'
import Tokenomics from './components/Tokenomics'
import ContractAddress from './components/ContractAddress'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <UseCases />
        <Roadmap />
        <Ecosystem />
        <Tokenomics />
        <ContractAddress />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
