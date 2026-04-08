export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ background: "linear-gradient(160deg, #F9F7F4 0%, #F0EDE8 100%)" }}>
      <div className="text-center px-6">
        <h1 className="font-serif text-6xl font-normal text-[#141210] mb-4" style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>404</h1>
        <p className="text-sm text-[#7A7570] tracking-[0.1em] uppercase mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>Page not found</p>
        <a
          href="/"
          className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#F9F7F4] bg-[#141210] border border-[#141210] px-7 py-3 hover:opacity-80 transition-opacity inline-block no-underline"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Return to home
        </a>
      </div>
    </div>
  );
}
