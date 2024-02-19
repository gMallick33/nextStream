"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <aside
      className={cn(
        "fixed left-0 h-full bg-slate-900 w-60 border-r max-sm:w-[70px]",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
