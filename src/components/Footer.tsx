import { Link } from "wouter";

export function Footer() {
  const footerData = [
    { title: "SHOP", links: [{ name: "New Arrivals", path: "/shop" }, { name: "Tops", path: "/shop" }, { name: "Bottoms", path: "/shop" }, { name: "Outerwear", path: "/shop" }, { name: "Accessories", path: "/shop" }] },
    { title: "INFO", links: [{ name: "About", path: "/about" }, { name: "Manifesto", path: "/about" }, { name: "Sustainability", path: "/about" }, { name: "Size Guide", path: "/about" }, { name: "Care", path: "/about" }] },
    { title: "CONNECT", links: [{ name: "Instagram", path: "#" }, { name: "TikTok", path: "#" }, { name: "Newsletter", path: "#" }, { name: "Press", path: "#" }, { name: "Wholesale", path: "#" }] },
  ];

  return (
    <footer className="border-t-0 bg-white px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
        <div>
          <Link href="/">
            <h3 className="text-4xl font-black tracking-tight uppercase mb-1 cursor-pointer">VOID</h3>
          </Link>
          <p className="text-[10px] text-[#1A1A1A]/50 font-bold tracking-[0.3em] uppercase">SS26 COLLECTION</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-xs">
          {footerData.map((col) => (
            <div key={col.title}>
              <h4 className="font-black tracking-[0.2em] mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.path}>
                      <span className="text-[#1A1A1A]/50 font-medium hover:text-black transition-colors duration-100 cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
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
