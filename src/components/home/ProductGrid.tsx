import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Product {
  id: number;
  name: string;
  price: string;
  tag: string;
  sizes: string[];
  pattern: string;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const headingRef = useScrollReveal();

  return (
    <section className="border-b-2 border-black">
      <div className="border-b-2 border-black px-6 md:px-10 py-6">
        <div
          ref={headingRef as React.Ref<HTMLDivElement>}
          className="flex flex-col md:flex-row md:items-end justify-between gap-3"
        >
          <div>
            <span className="text-[9px] font-black tracking-[0.3em] text-[#1A1A1A] uppercase block mb-1.5 opacity-60">DROP #07</span>
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-black uppercase leading-none tracking-tight">
              THE COLLECTION
            </h2>
          </div>
          <button
            className="self-start md:self-auto flex items-center gap-2 text-[10px] font-black tracking-widest uppercase border-2 border-black px-4 py-2.5 hover:bg-black hover:text-white transition-all duration-300 ease-[0.19,1,0.22,1]"
            data-magnetic
          >
            VIEW ALL <ArrowRight size={11} />
          </button>
        </div>
      </div>

      {/* Broken grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Big card */}
        <div className="col-span-2 border-b-2 sm:border-r-2 border-black p-2.5 md:p-5">
          <ProductCard product={products[0]} delay={0} imageAspectRatio="aspect-[16/10]" />
        </div>
        {/* Normal cards */}
        {products.slice(1, 5).map((p, i) => (
          <div
            key={p.id}
            className={`border-b-2 border-black p-2.5 md:p-3.5 ${i % 2 === 0 ? "border-r-2" : "border-r-2 sm:border-r-0 md:border-r-2"}`}
          >
            <ProductCard product={p} delay={i * 80} />
          </div>
        ))}
        {/* Last card — full width on mobile, part of grid on desktop */}
        <div className="col-span-2 border-r-0 md:border-r-2 border-black p-2.5 md:p-3.5 lg:col-span-1">
          <ProductCard product={products[5]} delay={300} />
        </div>
      </div>
    </section>
  );
}
