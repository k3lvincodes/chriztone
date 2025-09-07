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
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
        {children}
      </div>
    </div>
  );
}
