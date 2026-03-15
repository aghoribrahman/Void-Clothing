interface MarqueeProps {
  text: string;
  reverse?: boolean;
  className?: string;
}

export function Marquee({ text, reverse = false, className = "" }: MarqueeProps) {
  const repeated = Array(8).fill(text).join(" • ");

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        <span className="pr-8">{repeated}</span>
        <span className="pr-8">{repeated}</span>
      </div>
    </div>
  );
}
