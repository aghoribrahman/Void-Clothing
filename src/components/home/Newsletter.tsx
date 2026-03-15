import { useMagneticCursor } from "@/hooks/useMagneticCursor";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Newsletter() {
  const btnRef = useMagneticCursor(0.5);
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef as React.Ref<HTMLElement>}
      className="relative px-6 md:px-12 py-16 bg-black text-white overflow-hidden border-b-2 border-black"
    >
      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[clamp(3rem,10vw,10rem)] font-black text-white opacity-[0.03] tracking-tighter">JOIN</span>
      </div>

      <div className="relative z-10 max-w-xl">
        <span className="text-[8px] font-black tracking-[0.3em] uppercase text-white/40 block mb-3">INNER CIRCLE</span>
        <h2 className="text-3xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight mb-4 text-white/95">
          FIRST ACCESS.<br />NO SPAM.
        </h2>
        <p className="text-white/40 text-xs mb-8 max-w-[300px] leading-relaxed">
          Get early drop notifications and access-only codes. We email twice a month. That's it.
        </p>

        <div className="flex flex-col sm:flex-row gap-0">
          <input
            type="email"
            placeholder="YOUR@EMAIL.COM"
            className="flex-1 bg-transparent border-2 border-white/90 text-white placeholder:text-white/20 px-4 py-3 text-[10px] font-bold tracking-widest uppercase outline-none focus:border-white sm:border-r-0 transition-colors"
          />
          <button
                ref={btnRef as React.Ref<HTMLButtonElement>}
                className="bg-white text-black px-6 py-3 text-[10px] font-black tracking-widest uppercase border-2 border-white/90 hover:bg-transparent hover:text-white transition-all duration-300 ease-[0.19,1,0.22,1] whitespace-nowrap"
            data-magnetic
          >
            JOIN THE VOID
          </button>
        </div>

        <p className="text-[8px] text-white/20 tracking-wider mt-4 uppercase font-medium">
          No spam. Unsubscribe anytime. Your data is never sold.
        </p>
      </div>
    </section>
  );
}
