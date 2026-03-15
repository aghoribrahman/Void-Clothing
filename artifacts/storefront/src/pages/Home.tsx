import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Hero3D } from "@/components/Hero3D";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductCard";
import { useMagneticCursor } from "@/hooks/useMagneticCursor";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const products = [
  { id: 1, name: "VOID OVERSIZED TEE", price: "$89", tag: "BESTSELLER", sizes: ["XS", "S", "M", "L", "XL"], pattern: "grid" },
  { id: 2, name: "SHADOW CARGO PANT", price: "$195", tag: "LIMITED", sizes: ["28", "30", "32", "34"], pattern: "diagonal" },
  { id: 3, name: "NULL HOODIE", price: "$145", tag: "NEW", sizes: ["S", "M", "L", "XL", "XXL"], pattern: "circle" },
  { id: 4, name: "BINARY JACKET", price: "$320", tag: "RARE", sizes: ["S", "M", "L"], pattern: "noise" },
  { id: 5, name: "STATIC SHORTS", price: "$75", tag: "DROP #7", sizes: ["S", "M", "L", "XL"], pattern: "diagonal" },
  { id: 6, name: "GHOST LONGSLEEVE", price: "$110", tag: "NEW", sizes: ["XS", "S", "M", "L"], pattern: "circle" },
];

function Hero() {
  const ctaRef = useMagneticCursor(0.6);
  const scrollRef = useMagneticCursor(0.5);

  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[22vw] font-black text-[#1A1A1A] opacity-[0.035] tracking-tight leading-none whitespace-nowrap">
          VOID
        </span>
      </div>

      {/* Main hero layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left — Text */}
        <div className="relative z-10 flex flex-col justify-end px-6 md:px-12 pb-16 pt-32 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <span className="inline-block text-[10px] font-black tracking-[0.4em] uppercase border border-black px-3 py-1 mb-6">
              SS26 COLLECTION
            </span>

            <h1
              className="glitch-text text-[clamp(3rem,8vw,7rem)] font-black leading-none tracking-tight uppercase mb-6"
              data-text="WEAR THE VOID"
            >
              WEAR THE
              <br />
              <span className="relative inline-block">
                VOID
                <span className="absolute bottom-1 left-0 w-full h-2 bg-black -z-10" />
              </span>
            </h1>

            <p className="text-base font-medium text-[#1A1A1A] max-w-sm mb-8 leading-relaxed">
              Brutalist silhouettes. Zero compromise. Exclusively for those who exist outside the algorithm.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                ref={ctaRef as React.Ref<HTMLButtonElement>}
                className="flex items-center gap-2 bg-black text-white px-8 py-4 text-xs font-black tracking-widest uppercase border-2 border-black hover:bg-white hover:text-black transition-colors duration-150"
                data-magnetic
              >
                SHOP NOW <ArrowRight size={14} />
              </button>
              <button
                className="flex items-center gap-2 bg-white text-black px-8 py-4 text-xs font-black tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white transition-colors duration-150"
                data-magnetic
              >
                LOOKBOOK
              </button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            ref={scrollRef as React.Ref<HTMLDivElement>}
            className="mt-12 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            data-magnetic
          >
            <ArrowDown size={14} className="animate-bounce" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase">SCROLL</span>
          </motion.div>
        </div>

        {/* Right — 3D */}
        <div className="relative border-l-0 lg:border-l-2 border-black">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Hero3D />
          </motion.div>

          {/* Stats overlay */}
          <div className="absolute bottom-8 right-8 space-y-2 z-10">
            {[
              { label: "DROPS", value: "7" },
              { label: "LIMITED", value: "500" },
              { label: "SOLD OUT", value: "∞" },
            ].map((stat) => (
              <div key={stat.label} className="text-right border-r-2 border-black pr-3">
                <div className="text-2xl font-black leading-none">{stat.value}</div>
                <div className="text-[8px] tracking-[0.3em] text-[#1A1A1A]">{stat.label}</div>
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

function MarqueeSection() {
  return (
    <div className="border-y-2 border-black py-4 bg-black text-white overflow-hidden">
      <Marquee text="NEW DROP • LIMITED EDITION • SS26 COLLECTION • WEAR THE VOID • NO RESTOCK • GET IT NOW" className="text-sm font-black tracking-[0.2em] uppercase" />
    </div>
  );
}

function ProductGrid() {
  const headingRef = useScrollReveal();

  return (
    <section className="border-b-2 border-black">
      <div className="border-b-2 border-black px-6 md:px-12 py-8">
        <div
          ref={headingRef as React.Ref<HTMLDivElement>}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="text-[10px] font-black tracking-[0.4em] text-[#1A1A1A] uppercase block mb-2">DROP #07</span>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-none tracking-tight">
              THE COLLECTION
            </h2>
          </div>
          <button
            className="self-start md:self-auto flex items-center gap-2 text-xs font-black tracking-widest uppercase border-2 border-black px-5 py-3 hover:bg-black hover:text-white transition-colors duration-150"
            data-magnetic
          >
            VIEW ALL <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Broken grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Big card */}
        <div className="col-span-2 row-span-2 border-b-2 border-r-2 border-black p-4 md:p-6">
          <ProductCard product={products[0]} delay={0} />
        </div>
        {/* Normal cards */}
        {products.slice(1, 5).map((p, i) => (
          <div
            key={p.id}
            className={`border-b-2 border-black p-3 md:p-4 ${i % 2 === 0 ? "border-r-2" : ""}`}
          >
            <ProductCard product={p} delay={i * 80} />
          </div>
        ))}
        {/* Last card — full width */}
        <div className="col-span-2 border-r-2 border-black p-3 md:p-4 lg:col-span-1">
          <ProductCard product={products[5]} delay={300} />
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { label: "PIECES SOLD", value: "12,847" },
    { label: "DROPS IN 2025", value: "7" },
    { label: "COUNTRIES", value: "43" },
    { label: "RESTOCK RATE", value: "0%" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-b-2 border-black">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`px-6 py-8 ${i < stats.length - 1 ? "border-r-2 border-black" : ""}`}
        >
          <div className="text-4xl md:text-5xl font-black tracking-tighter">{s.value}</div>
          <div className="text-[10px] font-black tracking-[0.3em] text-[#1A1A1A] uppercase mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function MarqueeReverse() {
  return (
    <div className="border-y-2 border-black py-4 bg-white overflow-hidden">
      <Marquee
        text="BRUTALIST FASHION • OVERSIZED SILHOUETTES • MONOCHROME ONLY • QUALITY > QUANTITY • VOID COLLECTIVE"
        reverse
        className="text-sm font-black tracking-[0.2em] uppercase text-[#1A1A1A]"
      />
    </div>
  );
}

function FeatureSection() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black">
      <div
        ref={ref1 as React.Ref<HTMLDivElement>}
        className="p-8 md:p-16 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-between min-h-[400px] bg-[#1A1A1A] text-white"
      >
        <span className="text-[9px] font-black tracking-[0.4em] uppercase border border-white/30 inline-block px-2 py-1 self-start">
          MANIFESTO
        </span>
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-4">
            NOT FOR<br />EVERYONE.
          </h2>
          <p className="text-sm text-white/60 max-w-xs leading-relaxed">
            Void exists for those who move against the grain. No trends. No compromises. Just raw, unfiltered expression in fabric form.
          </p>
        </div>
      </div>
      <div
        ref={ref2 as React.Ref<HTMLDivElement>}
        className="p-8 md:p-16 bg-white flex flex-col justify-between min-h-[400px]"
      >
        <span className="text-[9px] font-black tracking-[0.4em] uppercase border border-black inline-block px-2 py-1 self-start">
          PROCESS
        </span>
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-4">
            MADE TO<br />LAST.
          </h2>
          <p className="text-sm text-[#1A1A1A]/70 max-w-xs leading-relaxed">
            Every piece is crafted from heavyweight organic cotton. Limited runs. Zero waste. We never produce more than demand.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {["100% Organic", "Limited Runs", "Zero Waste"].map((tag) => (
            <div key={tag} className="border-2 border-black px-3 py-2 text-center">
              <span className="text-[9px] font-black tracking-wider uppercase">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const btnRef = useMagneticCursor(0.5);
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef as React.Ref<HTMLElement>}
      className="relative px-6 md:px-16 py-20 bg-black text-white overflow-hidden border-b-2 border-black"
    >
      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[clamp(4rem,12vw,12rem)] font-black text-white opacity-[0.04] tracking-tight">JOIN</span>
      </div>

      <div className="relative z-10 max-w-2xl">
        <span className="text-[9px] font-black tracking-[0.4em] uppercase text-white/50 block mb-4">INNER CIRCLE</span>
        <h2 className="text-4xl md:text-7xl font-black uppercase leading-none tracking-tight mb-4">
          FIRST ACCESS.<br />NO SPAM.
        </h2>
        <p className="text-white/50 text-sm mb-10 max-w-sm">
          Get early drop notifications and access-only codes. We email twice a month. That's it.
        </p>

        <div className="flex flex-col sm:flex-row gap-0">
          <input
            type="email"
            placeholder="YOUR@EMAIL.COM"
            className="flex-1 bg-transparent border-2 border-white text-white placeholder:text-white/30 px-5 py-4 text-xs font-bold tracking-widest uppercase outline-none focus:border-white sm:border-r-0"
          />
          <button
            ref={btnRef as React.Ref<HTMLButtonElement>}
            className="bg-white text-black px-8 py-4 text-xs font-black tracking-widest uppercase border-2 border-white hover:bg-transparent hover:text-white transition-colors duration-150 whitespace-nowrap"
            data-magnetic
          >
            JOIN THE VOID
          </button>
        </div>

        <p className="text-[9px] text-white/30 tracking-wider mt-4 uppercase">
          No spam. Unsubscribe anytime. Your data is never sold.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-0 bg-white px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
        <div>
          <h3 className="text-4xl font-black tracking-tight uppercase mb-1">VOID</h3>
          <p className="text-[10px] text-[#1A1A1A]/50 font-bold tracking-[0.3em] uppercase">SS26 COLLECTION</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-xs">
          {[
            { title: "SHOP", links: ["New Arrivals", "Tops", "Bottoms", "Outerwear", "Accessories"] },
            { title: "INFO", links: ["About", "Manifesto", "Sustainability", "Size Guide", "Care"] },
            { title: "CONNECT", links: ["Instagram", "TikTok", "Newsletter", "Press", "Wholesale"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-black tracking-[0.2em] mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#1A1A1A]/50 font-medium hover:text-black transition-colors duration-100">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-black pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-[9px] font-black tracking-[0.2em] uppercase text-[#1A1A1A]/40">
        <span>© 2026 VOID COLLECTIVE. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED IN THE VOID.</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <MarqueeSection />
      <ProductGrid />
      <StatsBar />
      <MarqueeReverse />
      <FeatureSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
