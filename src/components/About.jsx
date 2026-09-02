import {
  Landmark,
  Blocks,
  Coins,
  Handshake,
  Users,
  Network,
} from "lucide-react";

import Reveal from "./Reveal";
import aboutVideo from "../assets/new.png";
import Watermark from "./Watermark";

const pillars = [
  {
    title: "Utility First",
    copy: "Focused on developing practical applications around PVR.",
  },
  {
    title: "RWA Focused",
    copy: "Designed around the growing opportunity of Real-World Asset infrastructure.",
  },
  {
    title: "Blockchain Powered",
    copy: "Built on the BNB Smart Chain ecosystem.",
  },
  {
    title: "Community Driven",
    copy: "Community participation is an important part of long-term ecosystem growth.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-100 overflow-hidden">
      <Watermark position="top-left" size={420} direction={1} opacity={0.045} />

      <div className="relative z-10 mx-auto max-w-12xl px-6 lg:px-10">

        {/* IMAGE + CONTENT */}

        <div className="grid lg:grid-cols-2 gap-14 items-start mb-20">

          {/* IMAGE */}

          <Reveal variant="scale" delay={0.1}>
  <div className="relative max-w-lg mx-auto lg:ml-0 py-8">
    <div className="absolute inset-10 rounded-full bg-[#F7A00B]/15 blur-[70px] animate-pulse pointer-events-none" />
    <img src={aboutVideo} alt="PVR Coin" className="relative z-10 w-full h-auto object-contain scale-125 lg:translate-x-8 transition-transform duration-700 hover:scale-[1.3] drop-shadow-[0_30px_55px_rgba(0,0,0,0.65)]" />
  </div>
</Reveal>

          {/* CONTENT */}

          <Reveal variant="rise" delay={0.15}>
            <div>

              <Reveal variant="rise" delay={0.2}>
                <h2 className="font-gregular text-balance text-4xl sm:text-5xl font-bold mb-6 leading-[1.1]">
                  <span className="bg-gradient-to-r from-[#F7A00B] via-[#FFCB71] via-[#FFF4D6] to-[#FFFFFF] bg-clip-text text-transparent inline-block font-gregular font-bold tracking-[-0.035em]">
                    Building a bridge between blockchain &amp; real-world value
                  </span>
                </h2>
              </Reveal>

              <Reveal variant="rise" delay={0.28}>
                <p className="text-bone/65 leading-relaxed mb-4 max-w-xl">
                  Purveyor is designed as a next-generation blockchain ecosystem focused on the intersection of financial technology and Real-World Assets.
                </p>
              </Reveal>

              <Reveal variant="rise" delay={0.36}>
                <p className="text-bone/65 leading-relaxed max-w-xl">
                  Rather than positioning PVR as simply another digital token, Purveyor is focused on building an ecosystem around utility, accessibility, partnerships, and long-term development.
                </p>
              </Reveal>

              {/* OUR VISION */}

              <Reveal variant="rise" delay={0.45}>
                <div className="group relative mt-8 max-w-xl overflow-hidden rounded-2xl border border-[#F7A00B]/20 bg-[#0A101C]/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#F7A00B]/50 hover:shadow-[0_15px_45px_rgba(247,160,11,0.15)]">

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F7A00B]/10 blur-3xl transition-all duration-500 group-hover:bg-[#F7A00B]/25" />

                  <div className="pointer-events-none absolute -left-[100%] top-0 h-full w-[45%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#FFD996]/10 to-transparent transition-all duration-1000 group-hover:left-[130%]" />

                  <div className="absolute left-6 top-0 h-[2px] w-20 bg-gradient-to-r from-[#BA7807] via-[#F7A00B] to-[#FFCB72] shadow-[0_0_12px_rgba(247,160,11,0.5)]" />

                  <div className="relative z-10">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#F7A00B] shadow-[0_0_10px_#F7A00B]" />
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFCB72]">
                        Our Vision
                      </span>
                    </div>

                    <p className="text-base leading-7 text-bone/75">
                      To connect real-world economic value with the opportunities of{" "}
                      <span className="font-medium text-[#FFCB72]">digital finance</span>{" "}
                      through{" "}
                      <span className="font-medium text-[#F7A00B]">blockchain technology.</span>
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#F7A00B]/40 to-transparent transition-all duration-500 group-hover:via-[#F7A00B]" />

                </div>
              </Reveal>

            </div>
          </Reveal>

        </div>


        {/* MISSION */}

        <Reveal variant="rise" delay={0.05}>
          <div className="relative overflow-hidden rounded-[32px] border border-[#F7A00B]/20 bg-[#080D18]/80 p-8 shadow-[0_0_80px_rgba(247,160,11,0.08)] backdrop-blur-xl transition-all duration-700 hover:border-[#F7A00B]/30">

            <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#F7A00B]/10 blur-[100px] animate-pulse" />

            <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#BA7807]/10 blur-[100px]" />

            <div className="pointer-events-none absolute -left-[80%] top-0 h-full w-[40%] rotate-12 bg-gradient-to-r from-transparent via-[#FFD996]/10 to-transparent animate-[missionLight_7s_ease-in-out_infinite]" />


            {/* MISSION HEADER */}

            <Reveal variant="rise" delay={0.12}>
              <div className="relative z-10 mx-auto mb-12 max-w-3xl text-center">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F7A00B]/25 bg-[#F7A00B]/5 px-4 py-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#F7A00B] shadow-[0_0_12px_#F7A00B]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFCB72]">
                    Our Mission
                  </span>
                </div>

                <h2 className="font-gregular text-4xl font-bold uppercase leading-tight tracking-[-0.035em] text-white md:text-5xl">
                  Building the{" "}
                  <span className="bg-gradient-to-r from-[#FFCB72] via-[#F7A00B] to-[#BA7807] bg-clip-text text-transparent">
                    Next Ecosystem
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
                  We aim to develop a scalable ecosystem where blockchain infrastructure can support:
                </p>

              </div>
            </Reveal>


            {/* MISSION ITEMS */}

            <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {/* 01 */}

              <Reveal variant="rise" delay={0.16}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-[#F7A00B]/15 bg-[#0B111D]/70 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#F7A00B]/50 hover:shadow-[0_15px_40px_rgba(247,160,11,0.15)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F7A00B]/25 bg-[#F7A00B]/10 text-[#FFCB72] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#F7A00B]/20">
                    <Landmark size={23} />
                  </div>

                  <span className="absolute right-5 top-5 text-xs font-bold text-[#F7A00B]/30">01</span>

                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FFCB72]">
                    Fintech Applications
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Building infrastructure that enables scalable and efficient fintech applications.
                  </p>
                </div>
              </Reveal>


              {/* 02 */}

              <Reveal variant="rise" delay={0.24}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-[#F7A00B]/15 bg-[#0B111D]/70 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#F7A00B]/50 hover:shadow-[0_15px_40px_rgba(247,160,11,0.15)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F7A00B]/25 bg-[#F7A00B]/10 text-[#FFCB72] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#F7A00B]/20">
                    <Blocks size={23} />
                  </div>

                  <span className="absolute right-5 top-5 text-xs font-bold text-[#F7A00B]/30">02</span>

                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FFCB72]">
                    RWA-related Utilities
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Connecting real-world assets with blockchain-powered digital utilities.
                  </p>
                </div>
              </Reveal>


              {/* 03 */}

              <Reveal variant="rise" delay={0.32}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-[#F7A00B]/15 bg-[#0B111D]/70 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#F7A00B]/50 hover:shadow-[0_15px_40px_rgba(247,160,11,0.15)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F7A00B]/25 bg-[#F7A00B]/10 text-[#FFCB72] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#F7A00B]/20">
                    <Coins size={23} />
                  </div>

                  <span className="absolute right-5 top-5 text-xs font-bold text-[#F7A00B]/30">03</span>

                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FFCB72]">
                    Digital Asset Services
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Supporting secure and efficient digital asset services across the ecosystem.
                  </p>
                </div>
              </Reveal>


              {/* 04 */}

              <Reveal variant="rise" delay={0.40}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-[#F7A00B]/15 bg-[#0B111D]/70 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#F7A00B]/50 hover:shadow-[0_15px_40px_rgba(247,160,11,0.15)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F7A00B]/25 bg-[#F7A00B]/10 text-[#FFCB72] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#F7A00B]/20">
                    <Handshake size={23} />
                  </div>

                  <span className="absolute right-5 top-5 text-xs font-bold text-[#F7A00B]/30">04</span>

                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FFCB72]">
                    Ecosystem Partnerships
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Creating strategic partnerships that expand blockchain adoption and utility.
                  </p>
                </div>
              </Reveal>


              {/* 05 */}

              <Reveal variant="rise" delay={0.48}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-[#F7A00B]/15 bg-[#0B111D]/70 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#F7A00B]/50 hover:shadow-[0_15px_40px_rgba(247,160,11,0.15)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F7A00B]/25 bg-[#F7A00B]/10 text-[#FFCB72] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#F7A00B]/20">
                    <Users size={23} />
                  </div>

                  <span className="absolute right-5 top-5 text-xs font-bold text-[#F7A00B]/30">05</span>

                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FFCB72]">
                    Community Participation
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Empowering communities to participate, contribute and grow within the ecosystem.
                  </p>
                </div>
              </Reveal>


              {/* 06 */}

              <Reveal variant="rise" delay={0.56}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-[#F7A00B]/15 bg-[#0B111D]/70 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#F7A00B]/50 hover:shadow-[0_15px_40px_rgba(247,160,11,0.15)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F7A00B]/25 bg-[#F7A00B]/10 text-[#FFCB72] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#F7A00B]/20">
                    <Network size={23} />
                  </div>

                  <span className="absolute right-5 top-5 text-xs font-bold text-[#F7A00B]/30">06</span>

                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FFCB72]">
                    Future Decentralized Applications
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Enabling future decentralized applications across different industries and use cases.
                  </p>
                </div>
              </Reveal>

            </div>


            {/* BOTTOM LINE */}

            <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F7A00B]/60 to-transparent" />

          </div>
        </Reveal>


        {/* WHY PURVEYOR */}

        <div className="mb-8 mt-24 text-center">

          <Reveal variant="rise" delay={0.08}>
            <h3 className="font-gregular font-display text-3xl sm:text-4xl text-gold-300 mb-8 tracking-[-0.02em]">
              Why Purveyor?
            </h3>
          </Reveal>

        </div>


        {/* WHY PURVEYOR CARDS */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {pillars.map((p, i) => (
            <Reveal key={p.title} variant="rise" delay={0.10 + i * 0.12}>
              <div className="group h-full rounded-2xl border border-bone/10 bg-ink-900/50 p-6 transition-all duration-500 hover:border-gold-400/40 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(247,160,11,0.10)]">

                <span className="block w-8 h-[2px] bg-gold-400 mb-5 transition-all duration-500 group-hover:w-14" />

                <h4 className="font-gregular text-lg text-bone mb-2 transition-colors duration-300 group-hover:text-[#FFCB72]">
                  {p.title}
                </h4>

                <p className="text-sm text-bone/55 leading-relaxed">
                  {p.copy}
                </p>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}