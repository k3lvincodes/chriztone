import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto border-black bg-black border-[10px] rounded-[2.5rem] shadow-xl", className)}>
      <div className="w-[120px] h-[18px] bg-black top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
      <div className="h-[40px] w-[3px] bg-black absolute -left-[13px] top-[104px] rounded-l-lg"></div>
      <div className="h-[40px] w-[3px] bg-black absolute -left-[13px] top-[158px] rounded-l-lg"></div>
      <div className="h-[54px] w-[3px] bg-black absolute -right-[13px] top-[122px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-8 bg-white z-10 flex justify-between items-center px-6">
            <span className="text-sm font-semibold">9:41</span>
            <div className="flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.85a10 10 0 0 1 14 0"/><path d="M8.5 16.42a5 5 0 0 1 7 0"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><path d="M6 12h.01"/></svg>
            </div>
        </div>
        <div className="pt-8 h-full">
            {children}
        </div>
      </div>
    </div>
  );
}