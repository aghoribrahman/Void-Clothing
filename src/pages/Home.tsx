import { Hero } from "@/components/home/Hero";
import { ProductGrid } from "@/components/home/ProductGrid";
import { StatsBar } from "@/components/home/StatsBar";
import { FeatureSection } from "@/components/home/FeatureSection";
import { Newsletter } from "@/components/home/Newsletter";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";

const products = [
  { id: 1, name: "VOID OVERSIZED TEE", price: "$89", tag: "BESTSELLER", sizes: ["XS", "S", "M", "L", "XL"], pattern: "grid" },
  { id: 2, name: "SHADOW CARGO PANT", price: "$195", tag: "LIMITED", sizes: ["28", "30", "32", "34"], pattern: "diagonal" },
  { id: 3, name: "NULL HOODIE", price: "$145", tag: "NEW", sizes: ["S", "M", "L", "XL", "XXL"], pattern: "circle" },
  { id: 4, name: "BINARY JACKET", price: "$320", tag: "RARE", sizes: ["S", "M", "L"], pattern: "noise" },
  { id: 5, name: "STATIC SHORTS", price: "$75", tag: "DROP #7", sizes: ["S", "M", "L", "XL"], pattern: "diagonal" },
  { id: 6, name: "GHOST LONGSLEEVE", price: "$110", tag: "NEW", sizes: ["XS", "S", "M", "L"], pattern: "circle" },
];

function MarqueeSection() {
  return (
    <div className="border-y-2 border-black py-4 bg-black text-white overflow-hidden">
      <Marquee text="NEW DROP • LIMITED EDITION • SS26 COLLECTION • WEAR THE VOID • NO RESTOCK • GET IT NOW" className="text-sm font-black tracking-[0.2em] uppercase" />
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <MarqueeSection />
      <ProductGrid products={products} />
      <StatsBar />
      <MarqueeReverse />
      <FeatureSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
