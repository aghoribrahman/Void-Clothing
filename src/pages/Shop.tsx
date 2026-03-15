import { ProductGrid } from "@/components/home/ProductGrid";
import { Newsletter } from "@/components/home/Newsletter";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";

const allProducts = [
  { id: 1, name: "VOID OVERSIZED TEE", price: "$89", tag: "BESTSELLER", sizes: ["XS", "S", "M", "L", "XL"], pattern: "grid", imageUrl: "/images/products/tee_black.png" },
  { id: 2, name: "SHADOW CARGO PANT", price: "$195", tag: "LIMITED", sizes: ["28", "30", "32", "34"], pattern: "diagonal", imageUrl: "/images/products/cargo_pant.png" },
  { id: 3, name: "NULL HOODIE", price: "$145", tag: "NEW", sizes: ["S", "M", "L", "XL", "XXL"], pattern: "circle", imageUrl: "/images/products/hoodie_black.png" },
  { id: 4, name: "BINARY JACKET", price: "$320", tag: "RARE", sizes: ["S", "M", "L"], pattern: "noise" },
  { id: 5, name: "STATIC SHORTS", price: "$75", tag: "DROP #7", sizes: ["S", "M", "L", "XL"], pattern: "diagonal" },
  { id: 6, name: "GHOST LONGSLEEVE", price: "$110", tag: "NEW", sizes: ["XS", "S", "M", "L"], pattern: "circle" },
  { id: 7, name: "NEON SIGNAL CAP", price: "$55", tag: "DROP #7", sizes: ["ONE SIZE"], pattern: "grid" },
  { id: 8, name: "CYBERPUNK BEANIE", price: "$45", tag: "NEW", sizes: ["ONE SIZE"], pattern: "noise" },
  { id: 9, name: "VOID TOTE BAG", price: "$35", tag: "ESSENTIAL", sizes: ["ONE SIZE"], pattern: "diagonal" },
  { id: 10, name: "TECHWEAR VEST", price: "$210", tag: "LIMITED", sizes: ["M", "L", "XL"], pattern: "circle" },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Space for Nav */}
      <div className="h-24 md:h-32" />
      
      <header className="px-6 md:px-10 py-12 md:py-20 border-b-2 border-black">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-60 mb-4 block">BROWSE ALL PIECES</span>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter">
            SHOP THE<br />ENTIRE VOID
          </h1>
        </motion.div>
      </header>

      <div className="border-b-2 border-black py-4 bg-black text-white overflow-hidden">
        <Marquee text="SECURE CHECKOUT • WORLDWIDE SHIPPING • NO RETURNS • VOID COLLECTIVE •" className="text-xs font-black tracking-[0.2em] uppercase" />
      </div>

      <ProductGrid products={allProducts} />
      
      <Newsletter />
      <Footer />
    </div>
  );
}
