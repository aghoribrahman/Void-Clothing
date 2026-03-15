import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Product {
  id: number;
  name: string;
  price: string;
  tag: string;
  sizes: string[];
  pattern: string;
}

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const revealRef = useScrollReveal();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedSize) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      ref={revealRef as React.Ref<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className="relative border-2 border-black brutal-shadow bg-white grain overflow-hidden cursor-none"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Product image area */}
      <div className="relative aspect-[3/4] overflow-hidden border-b-2 border-black bg-[#1A1A1A]">
        {/* Abstract pattern as product placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 200 260"
            className="w-full h-full"
            style={{ filter: hovering ? "invert(1)" : "none", transition: "filter 0.3s" }}
          >
            <rect width="200" height="260" fill="#1A1A1A" />
            {product.pattern === "grid" && (
              <>
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 26} x2="200" y2={i * 26} stroke="#333" strokeWidth="1" />
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 28} y1="0" x2={i * 28} y2="260" stroke="#333" strokeWidth="1" />
                ))}
                <text x="100" y="130" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="32" fontWeight="900" fontFamily="Inter, sans-serif">
                  {product.id < 10 ? `0${product.id}` : product.id}
                </text>
              </>
            )}
            {product.pattern === "diagonal" && (
              <>
                {Array.from({ length: 20 }).map((_, i) => (
                  <line key={i} x1={i * 20 - 100} y1="0" x2={i * 20 + 100} y2="260" stroke="#444" strokeWidth="1.5" />
                ))}
                <text x="100" y="130" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="32" fontWeight="900" fontFamily="Inter, sans-serif">
                  {product.id < 10 ? `0${product.id}` : product.id}
                </text>
              </>
            )}
            {product.pattern === "circle" && (
              <>
                {Array.from({ length: 6 }).map((_, i) => (
                  <circle key={i} cx="100" cy="130" r={(i + 1) * 22} fill="none" stroke="#444" strokeWidth="1.5" />
                ))}
                <text x="100" y="130" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="32" fontWeight="900" fontFamily="Inter, sans-serif">
                  {product.id < 10 ? `0${product.id}` : product.id}
                </text>
              </>
            )}
            {product.pattern === "noise" && (
              <>
                <filter id="noise-filter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                  <feColorMatrix type="saturate" values="0" />
                  <feBlend in="SourceGraphic" mode="multiply" />
                </filter>
                <rect width="200" height="260" filter="url(#noise-filter)" opacity="0.5" fill="#888" />
                <text x="100" y="130" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="32" fontWeight="900" fontFamily="Inter, sans-serif">
                  {product.id < 10 ? `0${product.id}` : product.id}
                </text>
              </>
            )}
          </svg>
        </div>

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-white text-black text-[10px] font-black tracking-widest uppercase px-2 py-1 border border-black">
            {product.tag}
          </span>
        </div>

        {/* Quick-add overlay */}
        <AnimatePresence>
          {hovering && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-black p-3"
            >
              <div className="flex gap-2 mb-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`text-[10px] font-black px-2 py-1 border-2 border-black transition-all duration-100 ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button
                onClick={handleAdd}
                className={`w-full py-2 text-[11px] font-black tracking-widest uppercase flex items-center justify-center gap-2 border-2 border-black transition-all duration-200 ${
                  selectedSize
                    ? "bg-black text-white hover:bg-white hover:text-black"
                    : "bg-white text-black opacity-50"
                }`}
                data-magnetic
              >
                <AnimatePresence mode="wait">
                  {added ? (
                    <motion.span
                      key="check"
                      className="flex items-center gap-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Check size={12} />
                      ADDED
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      className="flex items-center gap-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Plus size={12} />
                      {selectedSize ? "QUICK ADD" : "SELECT SIZE"}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info */}
      <div className="p-3">
        <div className="flex justify-between items-start">
          <h3 className="font-black text-sm uppercase tracking-tight leading-tight">{product.name}</h3>
          <span className="font-black text-sm">{product.price}</span>
        </div>
      </div>
    </div>
  );
}
