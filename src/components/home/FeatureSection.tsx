import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FeatureSection() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black">
      <div
        ref={ref1 as React.Ref<HTMLDivElement>}
        className="p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-between min-h-[340px] bg-[#1A1A1A] text-white"
      >
        <span className="text-[8px] font-black tracking-[0.3em] uppercase border border-white/30 inline-block px-2 py-0.5 self-start opacity-70">
          MANIFESTO
        </span>
        <div>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] mb-3">
            NOT FOR<br />EVERYONE.
          </h2>
          <p className="text-xs text-white/50 max-w-[260px] leading-relaxed">
            Void exists for those who move against the grain. No trends. No compromises. Just raw, unfiltered expression in fabric form.
          </p>
        </div>
      </div>
      <div
        ref={ref2 as React.Ref<HTMLDivElement>}
        className="p-8 md:p-12 bg-white flex flex-col justify-between min-h-[340px]"
      >
        <span className="text-[8px] font-black tracking-[0.3em] uppercase border border-black inline-block px-2 py-0.5 self-start opacity-70">
          PROCESS
        </span>
        <div>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] mb-3">
            MADE TO<br />LAST.
          </h2>
          <p className="text-xs text-[#1A1A1A]/60 max-w-[260px] leading-relaxed">
            Every piece is crafted from heavyweight organic cotton. Limited runs. Zero waste. We never produce more than demand.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-6">
          {["100% Organic", "Limited Runs", "Zero Waste"].map((tag) => (
            <div key={tag} className="border border-black px-2 py-1.5 text-center">
              <span className="text-[8px] font-black tracking-wider uppercase opacity-80">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
