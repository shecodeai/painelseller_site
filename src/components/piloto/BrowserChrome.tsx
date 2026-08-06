export default function BrowserChrome() {
  return (
    <div className="bg-[#f4f4f8] border-b border-[#e0dce8] px-4 py-2.5 flex items-center gap-3">
      <div className="flex gap-1.5 flex-shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[#e0dce8]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#e0dce8]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#e0dce8]" />
      </div>
      <div className="flex-1 max-w-[260px] mx-auto bg-white border border-[#e0dce8] rounded-[6px] px-3 py-1 text-center">
        <span className="text-[10px] text-[#675E66]">app.painelseller.com.br</span>
      </div>
    </div>
  );
}
