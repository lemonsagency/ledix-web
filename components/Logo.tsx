"use client";

export default function Logo() {
  return (
    <div className="flex items-center space-x-1">
      <div className="relative w-8 h-8">
        <div className="absolute top-0 left-0 w-[45%] h-[45%] bg-black rounded-tl-full" />
        <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-black rounded-tr-full" />
        <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-black rounded-bl-full" />
        <div className="absolute bottom-0 right-0 w-[1px] h-[55%] bg-black" />
      </div>
      <span className="text-2xl font-bold tracking-tight">LeDix</span>
    </div>
  );
}