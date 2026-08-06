const ITEMS = [
  "Amazon SP-API Developer Partner",
  "Credenciada Amazon SPN há mais de 6 anos",
  "Parceira certificada Tray",
];

export default function TrustBar() {
  return (
    <div className="border-y border-[#e0dce8] bg-[#faf9fc]">
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {ITEMS.map((item) => (
          <span key={item} className="flex items-center gap-2 text-xs font-medium text-[#755BBC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0CA9A6] flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
