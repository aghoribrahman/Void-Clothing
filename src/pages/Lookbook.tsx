import { Newsletter } from "@/components/home/Newsletter";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const images = [
  { src: "/images/lookbook/lookbook_1.webp", title: "THE OVERSIZED SILHOUETTE", desc: "DROP #07 • COLLECTION" },
  { src: "/images/lookbook/lookbook_2.webp", title: "TEXTURE & FORM", desc: "EXPERIMENTAL SERIES" },
  { src: "/images/lookbook/lookbook_3.webp", title: "SHADOW PLAY", desc: "MONOCHROME ESSENTIALS" },
];

export default function Lookbook() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-24 md:h-32" />
      
      <header className="px-6 md:px-10 py-10 md:py-20 border-b-2 border-black">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-60 mb-3 md:mb-4 block">VISUAL ARCHIVE</span>
          <h1 className="text-[clamp(2.5rem,12vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter text-balance">
            THE LOOK<br />BOOK VOL. 1
          </h1>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <div key={i} className={`border-b-2 border-black relative group overflow-hidden ${
            (i + 1) % 2 === 0 ? "sm:border-l-2" : ""
          } lg:border-r-2 lg:${(i + 1) % 3 === 0 ? "border-r-0" : ""}`}>
            <div className="aspect-[3/4] overflow-hidden grayscale md:hover:grayscale-0 transition-all duration-700">
              <img 
                src={img.src} 
                alt={img.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover scale-110 md:group-hover:scale-100 transition-transform duration-1000" 
              />
            </div>
            {/* caption always visible on mobile, hover on desktop */}
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-white border-t-2 border-black transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]">
              <span className="text-[8px] md:text-[9px] font-black tracking-widest opacity-60 block mb-1">{img.desc}</span>
              <h3 className="text-lg md:text-xl font-black uppercase">{img.title}</h3>
            </div>
          </div>
        ))}
        {/* Fillers to complete the grid if needed - Hidden on mobile */}
        <div className="hidden lg:flex border-b-2 border-r-2 border-black bg-black p-10 flex-col justify-end">
          <h2 className="text-white text-4xl font-black uppercase leading-[0.9]">VOID<br />COLLECTIVE<br />2026</h2>
        </div>
        <div className="hidden lg:flex border-b-2 border-black p-10 bg-white grain items-center justify-center">
          <div className="w-20 h-20 border-2 border-black flex items-center justify-center rounded-full animate-spin-slow">
            <span className="text-[8px] font-black tracking-widest uppercase">VOID • VOID</span>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}
