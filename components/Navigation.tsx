"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "../data/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 rounded-b-[32px] bg-[#EDF2F7] shadow-[5px_5px_10px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F8FF] shadow-[5px_5px_10px_rgba(0,0,0,0.06)]">
            <span className="text-lg font-bold text-[#6CABDD]">MC</span>
          </div>
          <h1 className="hidden text-2xl font-semibold tracking-tight sm:inline">MCFC</h1>
        </Link>

        <div className="flex gap-3">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-[28px] px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#6CABDD] text-white shadow-[5px_5px_12px_rgba(0,0,0,0.12)]"
                    : "bg-[#F4F8FF] text-[#1C2C5B] shadow-[-5px_-5px_10px_rgba(255,255,255,0.9)] hover:bg-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
