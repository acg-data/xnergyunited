import React, { useEffect, useRef, useState } from "react";
import kevinImg from "@assets/image_1775667405509.png";
import jerryImg from "@assets/WhatsApp_Image_2026-04-09_at_12.47.38_AM_1775678013783.jpeg";
import logoImg from "@assets/logo_cropped.png";

const divisions = [
  { name: "Infrastructure", brief: "The physical foundation", count: 4 },
  { name: "Energy", brief: "Next-generation energy", count: 4 },
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

function ContactForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmitted?.();
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center py-6">
        <div className="text-center">
          <h3 className="font-serif text-2xl text-ink mb-3">Thank you.</h3>
          <p className="text-[13px] text-mid font-light leading-[1.7]">Your request has been received. A member of our team will be in contact with you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-[10px] font-normal tracking-[0.1em] text-muted-ink uppercase mb-1.5">Full Name *</label>
        <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full bg-transparent border border-rule px-3.5 py-2.5 text-[13px] text-ink font-light outline-none focus:border-ink transition-colors" />
      </div>
      <div>
        <label className="block text-[10px] font-normal tracking-[0.1em] text-muted-ink uppercase mb-1.5">Email Address *</label>
        <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full bg-transparent border border-rule px-3.5 py-2.5 text-[13px] text-ink font-light outline-none focus:border-ink transition-colors" />
      </div>
      <div>
        <label className="block text-[10px] font-normal tracking-[0.1em] text-muted-ink uppercase mb-1.5">Organization</label>
        <input type="text" value={form.organization} onChange={(e) => setForm({...form, organization: e.target.value})} className="w-full bg-transparent border border-rule px-3.5 py-2.5 text-[13px] text-ink font-light outline-none focus:border-ink transition-colors" />
      </div>
      <div>
        <label className="block text-[10px] font-normal tracking-[0.1em] text-muted-ink uppercase mb-1.5">Message</label>
        <textarea rows={3} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full bg-transparent border border-rule px-3.5 py-2.5 text-[13px] text-ink font-light outline-none focus:border-ink transition-colors resize-none" />
      </div>
      <button type="submit" className="w-full text-[10px] font-medium tracking-[0.14em] uppercase text-bg bg-ink border border-ink px-7 py-3 hover:opacity-80 transition-opacity cursor-pointer mt-2">
        Submit Request
      </button>
    </form>
  );
}

function RequestMaterialsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-[#141210]/60 backdrop-blur-sm"></div>
      <div className="relative bg-[#F9F7F4] border border-rule w-full max-w-[520px] mx-4 p-8 md:p-10" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-5 text-muted-ink hover:text-ink transition-colors cursor-pointer bg-transparent border-none text-lg leading-none">&times;</button>
        <h3 className="font-serif text-2xl text-ink mb-2">Request Materials</h3>
        <p className="text-[12px] text-muted-ink font-light mb-7">All inquiries are handled with discretion.</p>
        <ContactForm onSubmitted={onClose} />
      </div>
    </div>
  );
}

function CtaForm() {
  return <ContactForm />;
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full bg-transparent overflow-hidden">
      
      {/* NAV */}
      <nav className="h-16 flex items-center justify-between px-6 md:px-14 border-b border-rule sticky top-0 z-50 bg-[#F9F7F4]/90 backdrop-blur-md">
        <a href="#" className="flex items-center gap-3 no-underline">
          <img src={logoImg} alt="Xnergy United Networks logo" width="36" height="36" className="w-9 h-9 object-contain" />
          <div className="flex flex-col gap-[1px]">
            <span className="font-serif text-lg font-medium tracking-[0.12em] text-ink uppercase leading-none">Xnergy</span>
            <span className="text-[9px] font-normal tracking-[0.18em] text-muted-ink uppercase leading-none mt-1">United Networks</span>
          </div>
        </a>
        <div className="hidden md:flex gap-9 items-center">
          {["Philosophy", "Divisions", "Leadership", "Outlook"].map((link) => (
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
        <button onClick={() => setModalOpen(true)} className="text-[10px] font-medium tracking-[0.12em] uppercase text-ink bg-transparent border border-rule px-5 py-2 hover:border-ink transition-colors cursor-pointer">
          Inquiries
        </button>
      </nav>

      <main className="max-w-[920px] mx-auto px-6 md:px-14">
        
        {/* HERO */}
        <section className="py-20 md:py-28 border-b border-rule">
          <FadeIn>
            <div className="flex items-center gap-3.5 mb-9">
              <div className="w-6 h-[1px] bg-gold-lt"></div>
              <span className="text-[10px] font-normal tracking-[0.2em] text-gold uppercase">Xnergy United Networks</span>
            </div>
            <h1 className="font-serif text-4xl md:text-[62px] leading-[1.04] font-normal tracking-[-0.01em] text-ink mb-9 max-w-[760px]">
              An integrated industrial ecosystem. <em className="italic text-mid">Built to endure.</em>
            </h1>
            <p className="text-[15px] leading-[1.8] text-mid max-w-[560px] mb-14 font-light">
              Xnergy is a strategically structured industrial ecosystem designed to build, power, protect, and technologically advance critical infrastructure across multiple sectors of the global economy. Not a holding company. An integrated platform where each division strengthens the whole.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button onClick={() => setModalOpen(true)} className="text-[10px] font-medium tracking-[0.14em] uppercase text-bg bg-ink border border-ink px-7 py-3 hover:opacity-80 transition-opacity cursor-pointer w-full sm:w-auto text-center">
                Request materials
              </button>
              <a href="#divisions" className="text-[10px] font-normal tracking-[0.14em] uppercase text-muted-ink bg-transparent border border-rule px-7 py-3 hover:border-muted-ink hover:text-mid transition-colors cursor-pointer w-full sm:w-auto text-center no-underline inline-block">
                Our divisions
              </a>
            </div>
          </FadeIn>
        </section>

        {/* STRIP */}
        <section className="grid grid-cols-2 md:grid-cols-4 border-b border-rule">
          {[
            { num: "$50B", label: "Addressable pipeline" },
            { num: "340%", label: "Revenue growth, 3 years" },
            { num: "56", label: "Active network partners" },
            { num: "FL", label: "HQ location" }
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
                  The name Xnergy reflects the central philosophy behind the organization. The "X" represents the intersection of industries, expertise, and capabilities, where the convergence of multiple sectors creates a multiplier effect far greater than the sum of individual parts.
                </p>
                <div className="my-9 py-6 border-y border-rule">
                  <p className="font-serif text-xl italic text-mid leading-[1.5] tracking-[0.005em]">
                    "The next era of industrial progress will not be driven by isolated companies operating independently, but by integrated networks of specialized capabilities working in coordinated alignment."
                  </p>
                </div>
                <p className="text-[14px] leading-[1.85] text-mid font-light">
                  Within the Xnergy ecosystem, industries that traditionally operate in isolation are intentionally connected to create operational leverage, efficiency, and strategic advantage. Where a single company provides one service, Xnergy provides a coordinated chain of capability: infrastructure, energy, technology, and security working as one.
                </p>
              </div>
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
              name: "Infrastructure",
              desc: "The physical foundation of the ecosystem. Xnergy Infrastructure develops the built environment upon which all other divisions operate, from structural fabrication to large-scale engineering and the sourcing of critical materials.",
              tags: ["Structural Steel Fabrication", "Logistics", "Engineering & Construction", "Rare Earth Elements"]
            },
            {
              name: "Energy",
              desc: "The energy backbone of the platform. Xnergy Energy focuses on next-generation energy generation and storage, developing the systems that power industrial operations, communities, and the broader economy with resilience and efficiency.",
              tags: ["Small Modular Reactors", "Enhanced Geothermal", "Advanced Solar Systems", "Long-duration Energy Storage"]
            },
            {
              name: "Technology",
              desc: "The intelligence layer of the ecosystem. Xnergy Technology enhances the capability, efficiency, and communication of industrial systems through artificial intelligence, advanced surveillance, and satellite-grade communications infrastructure.",
              tags: ["AI & Machine Learning", "Cybersecurity Architecture", "Facial Recognition", "Satellite & Terrestrial Communication"]
            },
            {
              name: "Security",
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
                name: "Jerry G. Mikolajczyk",
                title: "Chairman, Co-Founder",
                img: jerryImg,
              },
              {
                name: "Kevin M. Grapes",
                title: "President, Co-Founder",
                img: kevinImg,
              }
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <img src={member.img} alt={`${member.name}, ${member.title} of Xnergy United Networks`} width="112" height="112" loading="lazy" className="w-full h-full object-cover" />
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
                Four dynamics shaping the opportunity ahead.
              </h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-4 gap-[1px] bg-rule border border-rule md:bg-rule md:border-rule bg-transparent border-transparent max-md:gap-6">
            {[
              {
                num: "I",
                title: "Energy demand opens the door",
                desc: "Every major development begins with power. Xnergy Energy delivers next-generation generation and storage solutions that establish presence in new markets, creating the entry point for the full ecosystem to follow."
              },
              {
                num: "II",
                title: "Steel infrastructure leads to construction contracts",
                desc: "Structural fabrication, rare earth sourcing, and engineering capabilities position Xnergy at the entry point of large-scale development. Every project begins with the physical foundation, and Xnergy builds it."
              },
              {
                num: "III",
                title: "Construction contracts lead to security deals",
                desc: "Once infrastructure is in place, it must be protected. Xnergy Security integrates directly into active construction and operational environments, creating a natural expansion from build to protect."
              },
              {
                num: "IV",
                title: "Technology connects it all",
                desc: "AI, cybersecurity, satellite communications, and advanced surveillance run across every division. Xnergy Technology is the intelligence layer that optimizes operations, strengthens security, and creates long-term efficiency across the entire ecosystem."
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

        {/* CTA - INFO BOX */}
        <section className="py-20 md:py-24 border-t border-rule">
          <FadeIn>
            <div className="border border-rule p-8 md:p-12">
              <div className="grid md:grid-cols-[1fr_1fr] gap-10 md:gap-16">
                <div>
                  <h2 className="font-serif text-2xl md:text-[28px] font-normal text-ink tracking-[-0.005em] mb-3">
                    Request Materials
                  </h2>
                  <p className="text-[13px] text-mid leading-[1.75] font-light mb-2">
                    Xnergy engages selectively with qualified parties. Submit your details and a member of our team will be in contact with you.
                  </p>
                  <p className="text-[11px] text-muted-ink font-light">All inquiries are handled with discretion.</p>
                </div>
                <CtaForm />
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-rule py-9 mt-auto">
        <div className="max-w-[920px] mx-auto px-6 md:px-14">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <div className="font-serif text-[15px] font-medium tracking-[0.14em] text-ink uppercase mb-1">Xnergy United Networks</div>
              <div className="text-[9px] tracking-[0.16em] text-muted-ink uppercase">Not for public distribution</div>
            </div>
            <p className="text-[11px] text-muted-ink max-w-[420px] leading-[1.65] md:text-right font-light text-left">
              This page is intended solely for the use of qualified institutional investors and accredited parties. The information contained herein is confidential and may not be reproduced or distributed without prior written consent.
            </p>
          </div>
        </div>
      </footer>

      <RequestMaterialsModal open={modalOpen} onClose={() => { setModalOpen(false); }} />
    </div>
  );
}
