import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import logoImg from "@assets/logo_cropped.png";
import securityLogo from "@assets/xnergy_security_logo.png";
import securitySite from "@assets/xnergy_security_site_intelligence.png";
import securitySpecs from "@assets/xnergy_security_xs_msu_pro_solar_specs.png";
import infrastructureHero from "@assets/xnergy_infrastructure_hero.png";
import energyHero from "@assets/xnergy_energy_hero.png";
import technologyHero from "@assets/xnergy_technology_hero.png";

type DivisionSlug = "infrastructure" | "energy" | "technology" | "security";

type Division = {
  slug: DivisionSlug;
  name: string;
  brief: string;
  headline: string;
  emphasis: string;
  overview: string;
  role: string;
  hero: string;
  heroAlt: string;
  heroCaption: string;
  capabilities: Array<{ name: string; description: string }>;
  environments: Array<{ name: string; description: string }>;
};

export const divisions: Record<DivisionSlug, Division> = {
  infrastructure: {
    slug: "infrastructure",
    name: "Infrastructure",
    brief: "The physical foundation",
    headline: "The physical systems that make industrial progress possible.",
    emphasis: "Built from the ground up.",
    overview: "Xnergy Infrastructure develops the built environment upon which every other division operates—from structural fabrication and coordinated logistics to large-scale engineering and the sourcing of critical materials.",
    role: "Infrastructure turns strategy into physical capacity. Within the Xnergy network, it connects materials, fabrication, movement, and execution so complex projects can advance through a coordinated chain of capability.",
    hero: infrastructureHero,
    heroAlt: "Structural steel installation at a large industrial construction site",
    heroCaption: "Infrastructure concept visualization",
    capabilities: [
      { name: "Structural Steel Fabrication", description: "Fabrication capability for resilient industrial, energy, and infrastructure projects." },
      { name: "Logistics", description: "Coordinated movement of equipment, materials, and project-critical resources." },
      { name: "Engineering & Construction", description: "Integrated planning and execution for complex built-environment programs." },
      { name: "Rare Earth Elements", description: "Strategic access to materials essential to advanced industrial and energy systems." },
    ],
    environments: [
      { name: "Industrial Development", description: "Facilities and systems designed around demanding operational requirements." },
      { name: "Energy Infrastructure", description: "The physical layer supporting generation, storage, and distribution." },
      { name: "Large-Scale Construction", description: "Coordinated delivery across structures, materials, and logistics." },
      { name: "Critical Materials", description: "Resources that strengthen supply-chain and project continuity." },
    ],
  },
  energy: {
    slug: "energy",
    name: "Energy",
    brief: "Next-generation energy",
    headline: "Resilient energy systems for an industrial economy in transition.",
    emphasis: "Powering what comes next.",
    overview: "Xnergy Energy focuses on next-generation generation and storage systems designed to power industrial operations, critical infrastructure, and communities with greater resilience and efficiency.",
    role: "Energy is the operating backbone of the Xnergy ecosystem. Its technologies connect directly to infrastructure development, intelligent control systems, and the security required to protect high-value energy assets.",
    hero: energyHero,
    heroAlt: "Advanced energy campus with solar generation and geothermal infrastructure",
    heroCaption: "Energy concept visualization",
    capabilities: [
      { name: "Small Modular Reactors", description: "Advanced nuclear generation designed for scalable, resilient deployment." },
      { name: "Enhanced Geothermal", description: "Firm, location-aware generation built around the earth's thermal resources." },
      { name: "Advanced Solar Systems", description: "Solar generation configured for industrial and infrastructure applications." },
      { name: "Long-Duration Energy Storage", description: "Storage systems that support continuity beyond short-duration balancing." },
    ],
    environments: [
      { name: "Industrial Operations", description: "Reliable power for facilities with continuous and mission-critical demand." },
      { name: "Communities", description: "Scalable generation and storage for resilient local energy systems." },
      { name: "Remote Assets", description: "Energy architectures suited to locations with limited grid access." },
      { name: "Critical Infrastructure", description: "Power systems developed around continuity and operational resilience." },
    ],
  },
  technology: {
    slug: "technology",
    name: "Technology",
    brief: "Intelligence & communications",
    headline: "The intelligence layer connecting every part of the network.",
    emphasis: "Systems that see, learn, and communicate.",
    overview: "Xnergy Technology advances the capability, efficiency, and communication of industrial systems through artificial intelligence, cybersecurity architecture, advanced recognition, and resilient communications infrastructure.",
    role: "Technology gives the wider Xnergy ecosystem a shared layer of intelligence. It connects physical infrastructure, energy systems, and security operations through data, automation, communications, and decision support.",
    hero: technologyHero,
    heroAlt: "Industrial operations center connected to satellite and terrestrial communications",
    heroCaption: "Technology concept visualization",
    capabilities: [
      { name: "AI & Machine Learning", description: "Intelligence systems that improve visibility, analysis, and operational decisions." },
      { name: "Cybersecurity Architecture", description: "Security design for the digital systems supporting critical operations." },
      { name: "Facial Recognition", description: "Advanced recognition capabilities for authorized security and access applications." },
      { name: "Satellite & Terrestrial Communication", description: "Communications infrastructure connecting distributed and remote operations." },
    ],
    environments: [
      { name: "Industrial Systems", description: "Operational intelligence integrated with physical processes and assets." },
      { name: "Distributed Operations", description: "Connected visibility across sites, teams, and geographic regions." },
      { name: "Secure Communications", description: "Resilient exchange of information in demanding environments." },
      { name: "Critical Networks", description: "Technology architecture designed around continuity and control." },
    ],
  },
  security: {
    slug: "security",
    name: "Security",
    brief: "Asset & infrastructure protection",
    headline: "Intelligent protection for critical infrastructure and high-value sites.",
    emphasis: "See earlier. Act sooner.",
    overview: "Xnergy Security combines mobile and fixed surveillance, AI-assisted detection, live monitoring, remote intervention, and incident intelligence to protect industrial operations, critical assets, and changing project environments.",
    role: "Security is the protective layer of the Xnergy ecosystem. It connects engineered field systems, communications, monitoring, response, and analytics so protection can operate as part of the infrastructure—not as an isolated camera network.",
    hero: securitySite,
    heroAlt: "Concept visualization of an Xnergy Security mobile surveillance unit monitoring a construction site",
    heroCaption: "Concept visualization · Interface values shown are illustrative",
    capabilities: [
      { name: "Mobile Surveillance Units", description: "Rapidly deployable, autonomous protection for temporary, remote, and changing sites." },
      { name: "Fixed AI Camera Systems", description: "Persistent coverage with intelligent detection across established facilities." },
      { name: "Remote Live Monitoring", description: "Continuous off-site oversight that turns cameras into an active security operation." },
      { name: "Command Center Integration", description: "Centralized visibility, alerting, reporting, and incident coordination." },
      { name: "Perimeter Detection", description: "Early awareness across boundaries, access points, and restricted zones." },
      { name: "Thermal Imaging", description: "Visibility in darkness, harsh weather, shadows, and low-contrast environments." },
      { name: "Access Control", description: "Integrated management of entry points, gates, and authorized movement." },
      { name: "Intelligent Analytics", description: "AI-assisted event prioritization, video review, reporting, and asset-health insight." },
    ],
    environments: [
      { name: "Energy & Critical Infrastructure", description: "Substations, utilities, renewable assets, industrial campuses, and remote facilities." },
      { name: "Construction", description: "Materials, equipment, access points, and evolving work zones throughout the project lifecycle." },
      { name: "Data Centers", description: "Monitored perimeters, access visibility, thermal options, and documented events." },
      { name: "Remote & High-Risk Sites", description: "Autonomous protection where staffing, power, or fixed infrastructure is limited." },
    ],
  },
};

function FadeIn({ children, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={className}>{children}</div>;
}

function InquiryForm({ division, onSubmitted }: { division: string; onSubmitted?: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, message: `Division: ${division}\n\n${form.message}` }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      onSubmitted?.();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") return <div className="py-8 text-center"><h3 className="font-serif text-2xl text-ink mb-3">Thank you.</h3><p className="text-[13px] text-mid font-light">Your inquiry has been received.</p></div>;

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="text-[10px] tracking-[0.1em] text-muted-ink uppercase">Full name *<input required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5 w-full bg-transparent border border-rule px-3.5 py-2.5 text-[13px] text-ink outline-none focus:border-ink" /></label>
        <label className="text-[10px] tracking-[0.1em] text-muted-ink uppercase">Email *<input required type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5 w-full bg-transparent border border-rule px-3.5 py-2.5 text-[13px] text-ink outline-none focus:border-ink" /></label>
      </div>
      <label className="block text-[10px] tracking-[0.1em] text-muted-ink uppercase">Organization<input autoComplete="organization" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} className="mt-1.5 w-full bg-transparent border border-rule px-3.5 py-2.5 text-[13px] text-ink outline-none focus:border-ink" /></label>
      <label className="block text-[10px] tracking-[0.1em] text-muted-ink uppercase">How can we help?<textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5 w-full bg-transparent border border-rule px-3.5 py-2.5 text-[13px] text-ink outline-none focus:border-ink resize-none" /></label>
      {status === "error" && <p role="alert" className="text-[12px] text-red-700">The inquiry could not be sent. Please try again.</p>}
      <button disabled={status === "loading"} className="w-full text-[10px] font-medium tracking-[0.14em] uppercase text-bg bg-ink border border-ink px-7 py-3 hover:opacity-80 disabled:opacity-50">
        {status === "loading" ? "Sending…" : "Submit inquiry"}
      </button>
      <p className="text-[10px] leading-relaxed text-muted-ink">Xnergy will use these details only to evaluate and respond to your inquiry.</p>
    </form>
  );
}

function InquiryModal({ division, open, onClose }: { division: string; open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button, input, textarea, select, a[href], [tabindex]:not([tabindex="-1"])') ?? []).filter((element) => !element.hasAttribute("disabled"));
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const elements = focusable();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => focusable()[0]?.focus());
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-[#141210]/60 backdrop-blur-sm" />
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="division-dialog-title" className="relative bg-[#F9F7F4] border border-rule w-full max-w-[560px] mx-4 p-8 md:p-10" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close inquiry form" className="absolute top-4 right-5 text-muted-ink hover:text-ink bg-transparent border-none text-xl">×</button>
        <h3 id="division-dialog-title" className="font-serif text-2xl text-ink mb-2">Discuss {division}</h3>
        <p className="text-[12px] text-muted-ink font-light mb-7">All inquiries are handled with discretion.</p>
        <InquiryForm division={division} />
      </div>
    </div>
  );
}

export default function DivisionPage({ slug }: { slug: DivisionSlug }) {
  const division = divisions[slug];
  const [modalOpen, setModalOpen] = useState(false);
  const isSecurity = slug === "security";

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Xnergy ${division.name} | Xnergy United Networks`;
    return () => { document.title = previousTitle; };
  }, [division.name]);

  return (
    <div className="w-full bg-transparent overflow-hidden">
      <nav className="h-16 flex items-center justify-between px-6 md:px-14 border-b border-rule sticky top-0 z-50 bg-[#F9F7F4]/95 backdrop-blur-md">
        <a href="/" className="flex items-center gap-3 no-underline">
          {isSecurity ? (
            <object
              data="/xnergy-security-logo.svg"
              type="image/svg+xml"
              aria-label="Xnergy Security"
              width="72"
              height="54"
              style={{ width: 72, height: 54, pointerEvents: "none" }}
            />
          ) : (
            <>
              <img src={logoImg} alt="Xnergy United Networks logo" width="36" height="36" className="w-9 h-9 object-contain" />
              <div className="flex flex-col gap-[1px]"><span className="font-serif text-lg font-medium tracking-[0.12em] text-ink uppercase leading-none">Xnergy</span><span className="text-[9px] tracking-[0.18em] text-muted-ink uppercase leading-none mt-1">United Networks</span></div>
            </>
          )}
        </a>
        <div className="hidden md:flex gap-9 items-center">
          <a href="/" className="text-[11px] tracking-[0.1em] text-muted-ink hover:text-ink uppercase">Home</a>
          <a href="#capabilities" className="text-[11px] tracking-[0.1em] text-muted-ink hover:text-ink uppercase">Capabilities</a>
          {isSecurity && <a href="#platform" className="text-[11px] tracking-[0.1em] text-muted-ink hover:text-ink uppercase">Platform</a>}
          <a href="#network" className="text-[11px] tracking-[0.1em] text-muted-ink hover:text-ink uppercase">Network</a>
        </div>
        <button onClick={() => setModalOpen(true)} className="text-[10px] font-medium tracking-[0.12em] uppercase text-ink bg-transparent border border-rule px-5 py-2 hover:border-ink">Inquiries</button>
      </nav>

      <main className="max-w-[920px] mx-auto px-6 md:px-14">
        <section className="py-20 md:py-28 border-b border-rule grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <FadeIn>
            <div className="flex items-center gap-3.5 mb-9"><div className="w-6 h-px bg-gold-lt" /><span className="text-[10px] tracking-[0.2em] text-gold uppercase">Xnergy {division.name}</span></div>
            <h1 className="font-serif text-4xl md:text-[38px] leading-[1.04] font-normal tracking-[-0.01em] text-ink mb-9 max-w-[790px]">{division.headline} <em className="italic text-mid">{division.emphasis}</em></h1>
            <p className="text-[15px] leading-[1.8] text-mid max-w-[610px] mb-12 font-light">{division.overview}</p>
            <div className="flex flex-col sm:flex-row gap-5"><button onClick={() => setModalOpen(true)} className="text-[10px] font-medium tracking-[0.14em] uppercase text-bg bg-ink border border-ink px-7 py-3 hover:opacity-80">Discuss a project</button><a href="#capabilities" className="text-[10px] tracking-[0.14em] uppercase text-muted-ink border border-rule px-7 py-3 hover:border-muted-ink text-center">Explore capabilities</a></div>
          </FadeIn>
          <FadeIn><figure className="border border-rule bg-[#EEEAE4]"><img src={division.hero} alt={division.heroAlt} className="w-full max-h-[640px] object-cover object-center" /><figcaption className="px-4 py-3 text-[9px] tracking-[0.08em] uppercase text-muted-ink border-t border-rule">{division.heroCaption}</figcaption></figure></FadeIn>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 border-b border-rule">
          {division.capabilities.slice(0, 4).map((capability, index) => <FadeIn key={capability.name} delay={index * 70} className="p-6 md:p-8 border-r border-b md:border-b-0 border-rule last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"><div className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">{capability.name}</div><div className="text-[9px] tracking-[0.12em] uppercase text-muted-ink">Core capability</div></FadeIn>)}
        </section>

        <section id="capabilities" className="py-20 md:py-24 border-b border-rule">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 mb-12"><FadeIn><div className="text-[10px] tracking-[0.18em] text-gold uppercase md:pt-1.5">Capabilities</div></FadeIn><FadeIn delay={80}><h2 className="font-serif text-2xl md:text-[30px] leading-[1.2] text-ink">Specialized capability. <em className="italic text-mid">Integrated execution.</em></h2></FadeIn></div>
          <div className="border-t border-rule">
            {division.capabilities.map((capability, index) => <FadeIn key={capability.name} delay={Math.min(index * 45, 180)} className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-16 py-7 border-b border-rule"><h3 className="text-[11px] font-medium tracking-[0.08em] uppercase text-ink">{capability.name}</h3><p className="text-[13px] leading-[1.8] text-mid font-light max-w-[580px]">{capability.description}</p></FadeIn>)}
          </div>
        </section>

        {isSecurity && (
          <>
            <section id="platform" className="py-20 md:py-24 border-b border-rule">
              <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 mb-12"><FadeIn><div className="text-[10px] tracking-[0.18em] text-gold uppercase md:pt-1.5">Mobile platform</div></FadeIn><FadeIn delay={80}><img src={securityLogo} alt="Xnergy Security" className="w-44 h-28 object-cover object-[center_80%] bg-white mb-7" /><h2 className="font-serif text-2xl md:text-[30px] leading-[1.2] text-ink mb-5">Autonomous surveillance for difficult sites.</h2><p className="text-[13px] leading-[1.8] text-mid font-light">The XS-MSU Pro Solar+ combines solar operation, backup generation, 360-degree coverage, cellular communications, flexible camera options, lighting, sensing, and remote deterrence in a rapidly deployable platform powered by ECAM surveillance technology.</p></FadeIn></div>
              <FadeIn className="mt-8"><a href={securitySpecs} target="_blank" rel="noreferrer" className="inline-flex text-[10px] tracking-[0.12em] uppercase text-ink border-b border-ink pb-1">View XS-MSU Pro Solar+ specifications →</a></FadeIn>
            </section>
          </>
        )}

        <section className="py-20 md:py-24 border-b border-rule">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 mb-12"><FadeIn><div className="text-[10px] tracking-[0.18em] text-gold uppercase md:pt-1.5">Operating environments</div></FadeIn><FadeIn delay={80}><h2 className="font-serif text-2xl md:text-[30px] leading-[1.2] text-ink">Capability shaped around <em className="italic text-mid">the environment.</em></h2></FadeIn></div>
          <div className="border-t border-rule">{division.environments.map((environment) => <FadeIn key={environment.name} className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-16 py-7 border-b border-rule"><h3 className="text-[11px] font-medium tracking-[0.08em] uppercase text-ink">{environment.name}</h3><p className="text-[13px] leading-[1.8] text-mid font-light">{environment.description}</p></FadeIn>)}</div>
        </section>

        <section id="network" className="py-20 md:py-24 border-b border-rule">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16"><FadeIn><div className="text-[10px] tracking-[0.18em] text-gold uppercase md:pt-1.5">Within Xnergy</div></FadeIn><FadeIn delay={80}><h2 className="font-serif text-2xl md:text-[30px] leading-[1.2] text-ink mb-7">One division strengthens <em className="italic text-mid">the whole network.</em></h2><p className="text-[14px] leading-[1.85] text-mid font-light mb-9">{division.role}</p><div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">{Object.values(divisions).filter((item) => item.slug !== slug).map((item) => <a key={item.slug} href={`/${item.slug}/`} className="bg-[#F9F7F4] p-5 hover:bg-[#F0EDE8]"><span className="block font-serif text-xl text-ink mb-1">{item.name}</span><span className="text-[9px] tracking-[0.1em] uppercase text-muted-ink">{item.brief}</span></a>)}</div></FadeIn></div>
        </section>

        <section className="py-20 md:py-24"><div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16"><FadeIn><div className="text-[10px] tracking-[0.18em] text-gold uppercase md:pt-1.5">Inquiries</div></FadeIn><FadeIn delay={80}><h2 className="font-serif text-2xl md:text-[30px] leading-[1.2] text-ink mb-3">Start a conversation.</h2><p className="text-[13px] leading-[1.8] text-muted-ink font-light mb-8">Tell us about the project, operating environment, or strategic opportunity.</p><InquiryForm division={division.name} /></FadeIn></div></section>
      </main>

      <footer className="border-t border-rule py-9"><div className="max-w-[920px] mx-auto px-6 md:px-14 flex flex-col md:flex-row justify-between gap-6"><div><div className="font-serif text-[15px] font-medium tracking-[0.14em] text-ink uppercase mb-1">Xnergy United Networks</div><div className="text-[9px] tracking-[0.16em] text-muted-ink uppercase">Not for public distribution</div></div><p className="text-[11px] text-muted-ink max-w-[420px] leading-[1.65] md:text-right font-light">This page is intended for qualified institutional investors, strategic partners, and accredited parties. Information may not be reproduced without prior written consent.</p></div></footer>
      <InquiryModal division={division.name} open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
