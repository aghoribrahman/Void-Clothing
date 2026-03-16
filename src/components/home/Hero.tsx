import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Hero3D } from "@/components/Hero3D";
import { useLocation } from "wouter";
import { useMagneticCursor } from "@/hooks/useMagneticCursor";

export function Hero() {
  const [, setLocation] = useLocation();
  const ctaRef = useMagneticCursor(0.6);
  const scrollRef = useMagneticCursor(0.5);

  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] grayscale mix-blend-multiply">
          <img src="/images/lookbook/lookbook_1.webp" className="w-full h-full object-cover" alt="" />
        </div>
        <span className="text-[22vw] font-black text-[#1A1A1A] opacity-[0.035] tracking-tight leading-none whitespace-nowrap z-10">
          VOID
        </span>
      </div>

      {/* Main hero layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-screen relative">
        {/* Left — Text */}
        <div className="relative z-20 flex flex-col justify-end lg:justify-end items-center lg:items-start text-center lg:text-left px-6 md:px-10 pb-12 pt-20 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col items-center lg:items-start"
          >
            <span className="inline-block text-[8px] md:text-[9px] font-black tracking-[0.3em] uppercase border border-black px-2 py-1 mb-4 md:mb-5">
              SS26 COLLECTION
            </span>
            <br />
            <h1
              className="glitch-text text-[clamp(2.5rem,12vw,5.5rem)] font-black leading-[0.9] tracking-tight uppercase mb-4 md:mb-5"
              data-text="WEAR THE VOID"
            >
              WEAR THE
              <br />
              <span className="relative inline-block">
                VOID
                <span className="absolute bottom-1 left-0 w-full h-1.5 bg-black -z-10" />
              </span>
            </h1>

            <p className="text-xs md:text-sm font-medium text-[#1A1A1A] max-w-[240px] md:max-w-xs mb-8 md:mb-6 leading-relaxed opacity-80">
              Brutalist silhouettes. Zero compromise. Exclusively for those who exist outside the algorithm.
            </p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2.5">
              <button
                ref={ctaRef as React.Ref<HTMLButtonElement>}
                className="flex items-center justify-center gap-2 bg-black text-white px-8 lg:px-6 py-4 lg:py-3.5 text-[10px] font-black tracking-widest uppercase border-2 border-black hover:bg-white hover:text-black transition-all duration-300 ease-[0.19,1,0.22,1]"
                data-magnetic
                onClick={() => setLocation("/shop")}
              >
                SHOP NOW <ArrowRight size={12} />
              </button>
              <button
                className="flex items-center justify-center gap-2 bg-white text-black px-8 lg:px-6 py-4 lg:py-3.5 text-[10px] font-black tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white transition-all duration-300 ease-[0.19,1,0.22,1]"
                data-magnetic
                onClick={() => setLocation("/lookbook")}
              >
                LOOKBOOK
              </button>
            </div>
          </motion.div>

          {/* Scroll indicator - hidden on small mobile to save space */}
          <motion.div
            ref={scrollRef as React.Ref<HTMLDivElement>}
            className="mt-8 md:mt-10 hidden sm:flex items-center gap-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            data-magnetic
          >
            <ArrowDown size={12} className="animate-bounce" />
            <span className="text-[9px] font-black tracking-[0.2em] uppercase opacity-50">SCROLL</span>
          </motion.div>
        </div>

        {/* Right — 3D */}
        <div className="relative min-h-[45vh] lg:min-h-0 bg-white/50 backdrop-blur-sm lg:backdrop-blur-none">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Hero3D imageUrl="/images/products/hoodie_black.webp" />
          </motion.div>

          {/* Stats overlay - repositioned for mobile efficiency */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:bottom-8 lg:right-8 flex flex-row lg:flex-col items-center lg:items-end gap-8 lg:gap-2 z-10 w-full lg:w-auto px-6 lg:px-0 justify-center lg:justify-end">
            {[
              { label: "DROPS", value: "7" },
              { label: "LIMITED", value: "500" },
              { label: "SOLD OUT", value: "∞" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-right border-x lg:border-x-0 lg:border-r-2 border-black/10 lg:border-black px-4 lg:px-0 lg:pr-3">
                <div className="text-lg lg:text-2xl font-black leading-none">{stat.value}</div>
                <div className="text-[6px] lg:text-[8px] tracking-[0.3em] text-[#1A1A1A]/60 lg:text-[#1A1A1A]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="h-2 bg-black w-full" />
    </section>
  );
}
