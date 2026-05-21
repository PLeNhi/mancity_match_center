"use client";

interface StatBoxProps {
  value: string;
  label: string;
}

export function StatBox({ value, label }: StatBoxProps) {
  return (
    <div className="rounded-[24px] bg-[#F4F8FF] p-6 text-center shadow-[5px_5px_10px_rgba(0,0,0,0.04)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.9)]">
      <p className="text-4xl font-bold text-[#6CABDD]">{value}</p>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}
