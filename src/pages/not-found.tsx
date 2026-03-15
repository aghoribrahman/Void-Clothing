import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white p-6 md:p-10 select-none overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none">
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-black" />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-40 mb-8">ERROR // 404</span>
        <h1 className="text-[clamp(6rem,20vw,15rem)] font-black uppercase leading-none tracking-tighter mb-4">
          LOST IN<br />THE VOID
        </h1>
        <p className="text-xs font-black tracking-widest uppercase opacity-60 max-w-xs mb-12">
          THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST IN THIS REALITY.
        </p>
        
        <Link href="/">
          <button className="flex items-center gap-3 bg-black text-white px-10 py-5 text-[12px] font-black tracking-[0.2em] uppercase border-2 border-black hover:bg-white hover:text-black transition-all duration-300 ease-[0.19,1,0.22,1] shadow-[8px_8px_0px_#00000033] hover:shadow-none">
            RETURN TO ORIGIN
          </button>
        </Link>
      </motion.div>

      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="w-20 h-20 border-2 border-black flex items-center justify-center rounded-full animate-spin-slow opacity-20">
          <span className="text-[8px] font-black tracking-widest uppercase">VOID • VOID</span>
        </div>
      </div>
    </div>
  );
}
