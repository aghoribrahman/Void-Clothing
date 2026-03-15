import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useMagneticCursor } from "@/hooks/useMagneticCursor";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  const cartRef = useMagneticCursor(0.5);
  const menuRef = useMagneticCursor(0.5);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["NEW DROP", "SHOP", "LOOKBOOK", "ABOUT"];

  return (
    <>
      <motion.nav
        className="fixed top-4 left-1/2 z-50"
        initial={{ x: "-50%", y: -80, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div
          className={`flex items-center gap-8 px-6 py-3 border-2 border-black transition-all duration-300 ${
            scrolled
              ? "bg-black text-white shadow-[4px_4px_0px_rgba(255,255,255,0.3)]"
              : "bg-white text-black shadow-[4px_4px_0px_#000]"
          }`}
        >
          <span className="font-black text-lg tracking-[0.3em] uppercase">VOID</span>

          <div className="hidden md:flex gap-6">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs font-bold tracking-widest uppercase relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              ref={cartRef as React.Ref<HTMLButtonElement>}
              className="relative p-1"
              data-magnetic
            >
              <ShoppingBag size={18} strokeWidth={2.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[9px] font-black flex items-center justify-center border border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              ref={menuRef as React.Ref<HTMLButtonElement>}
              className="md:hidden p-1"
              onClick={() => setMenuOpen(true)}
              data-magnetic
            >
              <Menu size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-[100] flex flex-col p-8"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-black text-2xl text-white tracking-[0.3em] uppercase">VOID</span>
              <button onClick={() => setMenuOpen(false)} className="text-white">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-white text-5xl font-black tracking-tight uppercase hover:pl-4 transition-all duration-200"
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
