interface BrandLogoProps {
  iconSize?: number;
  textSize?: "sm" | "md" | "lg" | "xl";
  textColor?: string;
  className?: string;
}

const textSizeMap = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
};

export default function BrandLogo({
  iconSize = 28,
  textSize = "lg",
  textColor = "text-[#462073]",
  className = "",
}: BrandLogoProps) {
  const gap = Math.max(1, Math.round(iconSize * 0.07));
  const padding = Math.max(2, Math.round(iconSize * 0.14));
  const radius = Math.max(2, Math.round(iconSize * 0.14));
  const innerRadius = Math.max(1, Math.round(iconSize * 0.07));

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Ícone: quadrado roxo com 4 quadradinhos (3 brancos + 1 teal) */}
      <div
        style={{
          width: iconSize,
          height: iconSize,
          backgroundColor: "#8008DC",
          borderRadius: radius,
          padding: padding,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: gap,
        }}
      >
        <div style={{ backgroundColor: "white", borderRadius: innerRadius }} />
        <div style={{ backgroundColor: "white", borderRadius: innerRadius }} />
        <div style={{ backgroundColor: "white", borderRadius: innerRadius }} />
        <div style={{ backgroundColor: "#0CA9A6", borderRadius: innerRadius }} />
      </div>

      {/* Nome */}
      <span className={`font-bold ${textSizeMap[textSize]} ${textColor}`}>
        Painel<span className="text-[#0CA9A6]">Seller</span>
      </span>
    </div>
  );
}
