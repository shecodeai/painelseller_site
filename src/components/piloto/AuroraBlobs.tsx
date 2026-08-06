interface AuroraBlobsProps {
  variant?: "hero" | "trust" | "cta";
}

export default function AuroraBlobs({ variant = "hero" }: AuroraBlobsProps) {
  if (variant === "trust") {
    return (
      <>
        <div className="pl-blob w-[440px] h-[440px] -left-24 top-10 bg-[#0CA9A6]/30" />
        <div className="pl-blob w-[300px] h-[300px] right-[-60px] bottom-0 bg-[#8008DC]/18" />
      </>
    );
  }
  if (variant === "cta") {
    return (
      <>
        <div className="pl-blob w-[380px] h-[380px] left-1/2 -translate-x-1/2 -top-32 bg-[#F98A4D]/28" />
        <div className="pl-blob w-[280px] h-[280px] right-0 bottom-0 bg-[#0CA9A6]/20" />
      </>
    );
  }
  return (
    <>
      <div className="pl-blob w-[420px] h-[420px] -left-28 top-0 bg-[#8008DC]/24" />
      <div className="pl-blob w-[380px] h-[380px] right-[-60px] top-24 bg-[#0CA9A6]/22" />
      <div className="pl-blob w-[300px] h-[300px] left-1/3 bottom-[-100px] bg-[#F98A4D]/20" />
    </>
  );
}
