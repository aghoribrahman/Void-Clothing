export function StatsBar() {
  const stats = [
    { label: "PIECES SOLD", value: "12,847" },
    { label: "DROPS IN 2025", value: "7" },
    { label: "COUNTRIES", value: "43" },
    { label: "RESTOCK RATE", value: "0%" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-b-2 border-black">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`px-6 py-6 md:py-8 ${i < stats.length - 1 ? "border-r-2 border-black" : ""}`}
        >
          <div className="text-3xl md:text-4xl font-black tracking-tighter leading-none">{s.value}</div>
          <div className="text-[8px] font-black tracking-[0.2em] text-[#1A1A1A] uppercase mt-1.5 opacity-50">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
