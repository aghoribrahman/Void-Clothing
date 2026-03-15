import { motion } from "framer-motion";

export function Hero3D() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white">
      {/* Animated geometric orb — CSS/SVG fallback (WebGL not available in sandbox) */}
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        {/* Outermost ring */}
        <motion.div
          className="absolute inset-0 border-2 border-black rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {/* Second ring */}
        <motion.div
          className="absolute inset-6 border-2 border-black"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        />
        {/* Third ring */}
        <motion.div
          className="absolute inset-12 border-2 border-black rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        {/* Fourth ring */}
        <motion.div
          className="absolute inset-[4.5rem] border-[3px] border-black"
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ borderRadius: "50% 50% 30% 70% / 50% 70% 30% 50%" }}
        />
        {/* Center dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            className="w-10 h-10 bg-black rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Orbiting dot 1 */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-black rounded-full" />
        </motion.div>

        {/* Orbiting dot 2 */}
        <motion.div
          className="absolute inset-6"
          animate={{ rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-3 h-3 border-2 border-black rounded-full bg-white" />
        </motion.div>

        {/* Orbiting dot 3 */}
        <motion.div
          className="absolute inset-12"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/2 right-0 translate-x-2 -translate-y-1/2 w-3 h-3 bg-black" />
        </motion.div>
      </div>

      {/* Corner text labels for brutalist effect */}
      <div className="absolute top-6 left-6 text-[10px] font-black tracking-[0.3em] text-[#1A1A1A]/40 uppercase">
        3D.RENDER
      </div>
      <div className="absolute bottom-6 right-6 text-[10px] font-black tracking-[0.3em] text-[#1A1A1A]/40 uppercase">
        SS26
      </div>
    </div>
  );
}
