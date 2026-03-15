import { Newsletter } from "@/components/home/Newsletter";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const values = [
  { title: "THE PHILOSOPHY", content: "Void Clothing is not just a brand. It is an exploration of space, form, and the absence of color. We reject the clutter of modern fast fashion in favor of stark, brutalist silhouettes that command presence through simplicity." },
  { title: "QUALITY FIRST", content: "Every piece is crafted with purpose. Heavyweight fabrics, custom dyes, and precision tailoring ensure that each garment is a long-term investment in your visual expression." },
  { title: "THE COLLECTIVE", content: "We are a community of like-minded individuals who appreciate the intersection of architecture, fashion, and digital culture. Join us in the pursuit of the perfect silhouette." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-24 md:h-32" />
      
      <header className="px-6 md:px-10 py-12 md:py-20 border-b-2 border-black">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-60 mb-4 block">BEYOND THE SILHOUETTE</span>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter">
            ABOUT THE<br />VOID
          </h1>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {values.map((v, i) => (
          <div key={i} className="p-8 md:p-12 border-b-2 md:border-r-2 border-black flex flex-col gap-6 last:md:border-r-0 lg:last:border-r-0">
            <span className="text-[9px] font-black tracking-[0.3em] uppercase opacity-40">0{i + 1} //</span>
            <h2 className="text-3xl font-black uppercase leading-none tracking-tight">{v.title}</h2>
            <p className="text-[13px] font-medium leading-relaxed opacity-80 max-w-sm">
              {v.content}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black">
        <div className="aspect-square bg-black p-10 flex flex-col justify-between text-white">
          <div className="w-24 h-24 border-2 border-white flex items-center justify-center">
            <span className="font-black text-2xl tracking-[0.2em] uppercase">VOID</span>
          </div>
          <div>
            <h3 className="text-5xl font-black uppercase leading-none mb-4">ESTABLISHED<br />IN THE ABYSS.</h3>
            <span className="text-[10px] font-black tracking-widest uppercase opacity-60">SINGAPORE • GLOBAL • 2026</span>
          </div>
        </div>
        <div className="aspect-square bg-white p-10 flex items-center justify-center grain">
          <div className="max-w-md space-y-8">
            <h3 className="text-4xl font-black uppercase leading-none tracking-tighter">"FASHION IS TEMPORARY. THE VOID IS ETERNAL."</h3>
            <div className="h-0.5 w-full bg-black/10" />
            <p className="text-xs font-black tracking-widest uppercase opacity-40">CHIEF DESIGNER // ANONYMOUS</p>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}
