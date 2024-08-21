"use client";

import Link from "next/link";
import React from "react";
import { sideLinks } from "./sideLink";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex scrollbar-hide self-stretch gap-2 md:gap-1 flex-row md:flex-col overflow-x-auto md:overflow-x-visible w-full h-full">
      {sideLinks.map((link, index) => (
        <Link
          href={link.url}
          key={index}
          className={`px-3 py-2.5 md:p-2.5 w-full border rounded-[10px_22px] shadow-sm whitespace-nowrap md:whitespace-normal text-sm 
            ${pathname === link.url
              ? "text-[#222] font-bold border-[#CAF7CE] bg-[#CAF7CE]"
              : "text-[#222] border-[#f2f2f2]"
            }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
