import React, { useEffect, useRef, useState } from "react";
import { Globe } from "@/components/Globe";
import kevinImg from "@assets/image_1775667405509.png";
import jerryImg from "@assets/image_1775667437407.png";

const divisions = [
  { name: "Infrastructure", brief: "The physical foundation", count: 4 },
  { name: "Power", brief: "Next-generation energy", count: 4 },
  { name: "Technology", brief: "Intelligence & communications", count: 4 },
  { name: "Security", brief: "Asset & infrastructure protection", count: 4 },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (ref.current) {
                ref.current.style.opacity = "1";
                ref.current.style.transform = "translateY(0)";
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={className} 
      style={{ 
        opacity: 0, 
        transform: "translateY(24px)", 
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" 
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full bg-transparent overflow-hidden">
      
      {/* NAV */}
      <nav className="h-16 flex items-center justify-between px-6 md:px-14 border-b border-rule sticky top-0 z-50 bg-[#F9F7F4]/90 backdrop-blur-md">
        <a href="#" className="flex flex-col gap-[1px] no-underline">
          <span className="font-serif text-lg font-medium tracking-[0.12em] text-ink uppercase leading-none">Xnergy</span>
          <span className="text-[9px] font-normal tracking-[0.18em] text-muted-ink uppercase leading-none mt-1">United Network</span>
        </a>
        <div className="hidden md:flex gap-9 items-center">
          {["Philosophy", "Presence", "Divisions", "Leadership", "Outlook"].map((link) => (
            link === "Divisions" ? (
              <div key={link} className="relative group">
                <a href="#divisions" className="text-[11px] font-normal tracking-[0.1em] text-muted-ink hover:text-ink uppercase transition-colors flex items-center gap-1">
                  Divisions
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className="mt-[1px] opacity-50 group-hover:opacity-100 transition-opacity">
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[#F9F7F4] border border-rule shadow-sm min-w-[280px]">
                    {divisions.map((div, i) => (
                      <a key={i} href="#divisions" className="flex items-start justify-between gap-4 px-5 py-3.5 hover:bg-[#F0EDE8] transition-colors border-b border-rule last:border-b-0 no-underline">
                        <div>
                          <div className="text-[11px] font-medium tracking-[0.06em] text-ink uppercase">{div.name}</div>
                          <div className="text-[11px] font-light text-muted-ink mt-0.5">{div.brief}</div>
                        </div>
                        <span className="text-[10px] font-normal tracking-[0.08em] text-gold whitespace-nowrap mt-0.5">{div.count} capabilities</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[11px] font-normal tracking-[0.1em] text-muted-ink hover:text-ink uppercase transition-colors">
                {link}
              </a>
            )
          ))}
        </div>
        <button className="text-[10px] font-medium tracking-[0.12em] uppercase text-ink bg-transparent border border-rule px-5 py-2 hover:border-ink transition-colors cursor-pointer">
          Inquiries
        </button>
      </nav>

      <main className="max-w-[920px] mx-auto px-6 md:px-14">
        
        {/* HERO */}
        <section className="py-20 md:py-28 border-b border-rule">
          <FadeIn>
            <div className="flex items-center gap-3.5 mb-9">
              <div className="w-6 h-[1px] bg-gold-lt"></div>
              <span className="text-[10px] font-normal tracking-[0.2em] text-gold uppercase">Xnergy United Network</span>
            </div>
            <h1 className="font-serif text-4xl md:text-[62px] leading-[1.04] font-normal tracking-[-0.01em] text-ink mb-9 max-w-[760px]">
              An integrated industrial ecosystem. <em className="italic text-mid">Built to endure.</em>
            </h1>
            <p className="text-[15px] leading-[1.8] text-mid max-w-[560px] mb-14 font-light">
              Xnergy is a strategically structured industrial ecosystem designed to build, power, protect, and technologically advance critical infrastructure across multiple sectors of the global economy. Not a holding company. An integrated platform where each division strengthens the whole.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button className="text-[10px] font-medium tracking-[0.14em] uppercase text-bg bg-ink border border-ink px-7 py-3 hover:opacity-80 transition-opacity cursor-pointer w-full sm:w-auto text-center">
                Request materials
              </button>
              <button className="text-[10px] font-normal tracking-[0.14em] uppercase text-muted-ink bg-transparent border border-rule px-7 py-3 hover:border-muted-ink hover:text-mid transition-colors cursor-pointer w-full sm:w-auto text-center">
                Our divisions
              </button>
            </div>
          </FadeIn>
        </section>

        {/* STRIP */}
        <section className="grid grid-cols-2 md:grid-cols-4 border-b border-rule">
          {[
            { num: "$2.4B", label: "Addressable pipeline" },
            { num: "340%", label: "Revenue growth, 3 years" },
            { num: "38+", label: "Active contracts" },
            { num: "12", label: "Countries of operation" }
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 100} className="p-7 md:p-9 border-r border-rule [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r md:last:border-r-0 border-b md:border-b-0 [&:nth-child(3)]:border-b-0">
              <div className="font-serif text-4xl md:text-[38px] font-normal text-ink tracking-[-0.02em] mb-1.5">{stat.num}</div>
              <div className="text-[10px] font-normal tracking-[0.1em] text-muted-ink uppercase leading-[1.5]">{stat.label}</div>
            </FadeIn>
          ))}
        </section>

        {/* PHILOSOPHY */}
        <section id="philosophy" className="py-20 md:py-24 border-b border-rule">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <FadeIn>
              <div className="text-[10px] font-normal tracking-[0.18em] text-gold uppercase md:pt-1.5">Philosophy</div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="font-serif text-2xl md:text-[30px] font-normal leading-[1.2] text-ink mb-7 tracking-[-0.005em]">
                The convergence of industries <em className="italic text-mid">creates what no single company can.</em>
              </h2>
              <div className="space-y-4 max-w-[580px]">
                <p className="text-[14px] leading-[1.85] text-mid font-light">
                  The name Xnergy reflects the central philosophy behind the organisation. The "X" represents the intersection of industries, expertise, and capabilities, where the convergence of multiple sectors creates a multiplier effect far greater than the sum of individual parts.
                </p>
                <div className="my-9 py-6 border-y border-rule">
                  <p className="font-serif text-xl italic text-mid leading-[1.5] tracking-[0.005em]">
                    "The next era of industrial progress will not be driven by isolated companies operating independently, but by integrated networks of specialised capabilities working in coordinated alignment."
                  </p>
                </div>
                <p className="text-[14px] leading-[1.85] text-mid font-light">
                  Within the Xnergy ecosystem, industries that traditionally operate in isolation are intentionally connected to create operational leverage, efficiency, and strategic advantage. Where a single company provides one service, Xnergy provides a coordinated chain of capability: infrastructure, energy, technology, and security working as one.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* PRESENCE */}
        <section id="presence" className="py-20 md:py-24 border-b border-rule">
          <div className="grid md:grid-cols-[1fr_360px] gap-12 md:gap-20 items-center">
            <FadeIn>
              <div className="text-[10px] font-normal tracking-[0.18em] text-gold uppercase mb-5">Global Presence</div>
              <h2 className="font-serif text-2xl md:text-[28px] font-normal text-ink leading-[1.25] tracking-[-0.005em] mb-6">
                Operating across four continents, with a growing federal presence.
              </h2>
              <p className="text-[13px] text-mid leading-[1.8] font-light mb-9">
                Xnergy's capabilities are deployed where critical infrastructure is being built, secured, and modernised. From North American energy corridors to Southeast Asian logistics networks and beyond.
              </p>
              <div className="flex flex-col gap-3.5">
                {[
                  { name: "North America", desc: "Federal contracts, energy infrastructure" },
                  { name: "Middle East", desc: "Construction, security, rare earth logistics" },
                  { name: "Southeast Asia", desc: "Supply chain, satellite communications" },
                  { name: "Europe", desc: "Cybersecurity, advanced surveillance" }
                ].map((region, i) => (
                  <div key={i} className="flex items-baseline gap-3.5">
                    <div className="w-4 h-[1px] bg-gold-lt shrink-0 mt-2"></div>
                    <span className="text-[12px] font-medium text-ink min-w-[120px] tracking-[0.02em]">{region.name}</span>
                    <span className="text-[12px] text-muted-ink font-light">{region.desc}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={200} className="hidden md:flex items-center justify-center">
              <Globe className="w-full h-auto max-w-[320px]" />
            </FadeIn>
          </div>
        </section>

        {/* DIVISIONS */}
        <section id="divisions" className="pt-20 md:pt-20 pb-14 border-b border-rule">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 pb-14 border-b border-rule">
            <FadeIn>
              <div className="text-[10px] font-normal tracking-[0.18em] text-gold uppercase md:pt-1.5">Divisions</div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="font-serif text-2xl md:text-[30px] font-normal text-ink leading-[1.2] tracking-[-0.005em]">
                Four pillars of modern industrial development. <em className="italic text-mid">One integrated network.</em>
              </h2>
            </FadeIn>
          </div>

          {[
            {
              name: "Xnergy Infrastructure",
              desc: "The physical foundation of the ecosystem. Xnergy Infrastructure develops the built environment upon which all other divisions operate, from structural fabrication to large-scale engineering and the sourcing of critical materials.",
              tags: ["Structural Steel Fabrication", "Logistics", "Engineering & Construction", "Rare Earth Elements"]
            },
            {
              name: "Xnergy Power",
              desc: "The energy backbone of the platform. Xnergy Power focuses on next-generation energy generation and storage, developing the systems that power industrial operations, communities, and the broader economy with resilience and efficiency.",
              tags: ["Small Modular Reactors", "Enhanced Geothermal", "Advanced Solar Systems", "Long-duration Energy Storage"]
            },
            {
              name: "Xnergy Technology",
              desc: "The intelligence layer of the ecosystem. Xnergy Technology enhances the capability, efficiency, and communication of industrial systems through artificial intelligence, advanced surveillance, and satellite-grade communications infrastructure.",
              tags: ["AI & Machine Learning", "Cybersecurity Architecture", "Facial Recognition", "Satellite & Terrestrial Communication"]
            },
            {
              name: "Xnergy Security",
              desc: "The protective layer of the platform. Xnergy Security safeguards the operational environment, from critical assets and mobile operations to large-scale infrastructure, ensuring the continuity and integrity of the broader ecosystem.",
              tags: ["Mobile Asset Protection", "Site Protection", "Advanced Surveillance", "Infrastructure Protection"]
            }
          ].map((div, i) => (
            <div key={i} className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 py-10 border-b border-rule last:border-b-0 items-start">
              <FadeIn>
                <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-mid md:pt-[3px]">{div.name}</div>
              </FadeIn>
              <FadeIn delay={100}>
                <p className="text-[13px] text-mid leading-[1.8] font-light mb-5">{div.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {div.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-normal tracking-[0.08em] uppercase text-muted-ink border border-rule px-3 py-1.5 bg-transparent">
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>
          ))}
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" className="py-20 md:py-24 border-b border-rule">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 mb-14">
            <FadeIn>
              <div className="text-[10px] font-normal tracking-[0.18em] text-gold uppercase md:pt-1.5">Leadership</div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="font-serif text-2xl md:text-[30px] font-normal text-ink leading-[1.2] tracking-[-0.005em]">
                Experienced operators with deep sector knowledge.
              </h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {[
              {
                name: "Jerry G. Mcksieaxxxx",
                title: "Chairman of the Board",
                img: jerryImg,
              },
              {
                name: "Kevin M. Grapes",
                title: "President",
                img: kevinImg,
              }
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <img src={member.img} alt={`${member.name}, ${member.title} of Xnergy United Network`} width="112" height="112" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-2">
                    <h3 className="font-serif text-xl md:text-[22px] text-ink mb-1 leading-[1.2]">{member.name}</h3>
                    <div className="text-[11px] font-normal tracking-[0.08em] text-muted-ink uppercase">{member.title}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* OUTLOOK */}
        <section id="outlook" className="py-20 md:py-24">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 mb-14">
            <FadeIn>
              <div className="text-[10px] font-normal tracking-[0.18em] text-gold uppercase md:pt-1.5">Outlook</div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="font-serif text-2xl md:text-[30px] font-normal text-ink leading-[1.2] tracking-[-0.005em]">
                Three dynamics shaping the opportunity ahead.
              </h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-[1px] bg-rule border border-rule md:bg-rule md:border-rule bg-transparent border-transparent max-md:gap-6">
            {[
              {
                num: "I",
                title: "An integrated platform others cannot easily build",
                desc: "Rare earth sourcing feeds fabrication. Fabrication supports energy builds. Technology optimises operations. Security protects the whole. One relationship activates multiple divisions, a structural depth that single-sector operators simply do not offer."
              },
              {
                num: "II",
                title: "Aligned with where global spending is headed",
                desc: "Federal infrastructure mandates, defence modernisation budgets, and energy transition programmes are at historic levels. Xnergy operates at the intersection of each, positioned not where activity has been, but where it is going."
              },
              {
                num: "III",
                title: "Physical foundations with a technology edge",
                desc: "Steel, energy infrastructure, and physical security provide tangible, enduring value. AI, cybersecurity, and communications add operational efficiency and long-term growth potential. The combination is rare."
              }
            ].map((cell, i) => (
              <FadeIn key={i} delay={i * 100} className="bg-bg p-8 md:px-8 md:py-10 max-md:border max-md:border-rule">
                <span className="block text-[10px] font-normal tracking-[0.15em] text-gold mb-5">{cell.num}</span>
                <h3 className="font-serif text-lg text-ink mb-3.5 leading-[1.3]">{cell.title}</h3>
                <p className="text-[13px] text-mid leading-[1.8] font-light">{cell.desc}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 border-t border-rule">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
            <FadeIn>
              <h2 className="font-serif text-2xl md:text-[28px] font-normal text-ink tracking-[-0.005em] mb-3">
                Enquiries are handled with discretion.
              </h2>
              <p className="text-[13px] text-mid leading-[1.75] max-w-[420px] font-light">
                Xnergy engages selectively with qualified parties. To learn more or arrange a private conversation, please reach out through the appropriate channel.
              </p>
            </FadeIn>
            <FadeIn delay={100} className="flex flex-col gap-2.5 md:items-end">
              <button className="text-[10px] font-medium tracking-[0.14em] uppercase text-bg bg-ink border border-ink px-7 py-3 hover:opacity-80 transition-opacity cursor-pointer w-full md:w-auto text-center">
                Request materials
              </button>
              <button className="text-[10px] font-normal tracking-[0.14em] uppercase text-muted-ink bg-transparent border border-rule px-7 py-3 hover:border-muted-ink hover:text-mid transition-colors cursor-pointer w-full md:w-auto text-center">
                Arrange a conversation
              </button>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-rule py-9 mt-auto">
        <div className="max-w-[920px] mx-auto px-6 md:px-14">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <div className="font-serif text-[15px] font-medium tracking-[0.14em] text-ink uppercase mb-1">Xnergy United Network</div>
              <div className="text-[9px] tracking-[0.16em] text-light uppercase">Confidential · Not for public distribution</div>
            </div>
            <p className="text-[11px] text-light max-w-[420px] leading-[1.65] md:text-right font-light text-left">
              This page is intended solely for the use of qualified institutional investors and accredited parties. The information contained herein is confidential and may not be reproduced or distributed without prior written consent.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
