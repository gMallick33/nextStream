"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { collapsed } = useSidebar((state) => state);

  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
};

export default Container;
