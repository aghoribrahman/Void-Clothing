import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useMagneticCursor } from "@/hooks/useMagneticCursor";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useMagneticCursor(0.5);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [location] = useLocation();
  const links = [
    { name: "NEW DROP", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "LOOKBOOK", path: "/lookbook" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-3 left-1/2 z-50 w-auto"
        initial={{ x: "-50%", y: -80, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <div
          className={`flex items-center gap-6 px-4 py-2 border-2 border-black transition-all duration-500 whitespace-nowrap ${
            scrolled
              ? "bg-black text-white shadow-[2px_2px_0px_rgba(255,255,255,0.3)]"
              : "bg-white text-black shadow-[3px_3px_0px_#000]"
          }`}
        >
          <span className="font-black text-base tracking-[0.25em] uppercase">VOID</span>

          <div className="hidden md:flex gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-[10px] font-black tracking-[0.15em] uppercase relative group ${
                  location === link.path ? "opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-current transition-all duration-300 ease-[0.19,1,0.22,1] ${
                  location === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
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
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                >
                  <motion.div
                    className={`text-white text-5xl font-black tracking-tight uppercase hover:pl-4 transition-all duration-200 cursor-pointer flex items-center gap-4 ${
                      location === link.path ? "opacity-100" : "opacity-40"
                    }`}
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: location === link.path ? 1 : 0.4 }}
                    transition={{ delay: i * 0.08 + 0.1 }}
                  >
                    {location === link.path && <div className="w-4 h-4 bg-white" />}
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
