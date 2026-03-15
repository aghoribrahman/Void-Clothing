export function Footer() {
  return (
    <footer className="border-t-0 bg-white px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
        <div>
          <h3 className="text-4xl font-black tracking-tight uppercase mb-1">VOID</h3>
          <p className="text-[10px] text-[#1A1A1A]/50 font-bold tracking-[0.3em] uppercase">SS26 COLLECTION</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-xs">
          {[
            { title: "SHOP", links: ["New Arrivals", "Tops", "Bottoms", "Outerwear", "Accessories"] },
            { title: "INFO", links: ["About", "Manifesto", "Sustainability", "Size Guide", "Care"] },
            { title: "CONNECT", links: ["Instagram", "TikTok", "Newsletter", "Press", "Wholesale"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-black tracking-[0.2em] mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#1A1A1A]/50 font-medium hover:text-black transition-colors duration-100">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-black pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-[9px] font-black tracking-[0.2em] uppercase text-[#1A1A1A]/40">
        <span>© 2026 VOID COLLECTIVE. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED IN THE VOID.</span>
      </div>
    </footer>
  );
}
