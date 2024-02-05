"use client";

import { useSidebar } from "@/store/useSidebar";
import React from "react";
import { Button } from "./ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);
  const label = collapsed ? "Expand" : "Collapse";
  return (
    <>
      {!collapsed && (
        <div className="max-sm:hidden flex justify-between items-center w-full">
          <p className="p-4 text-base font-semibold max-sm:hidden">For You</p>
          <Button variant="ghost" className="ml-auto" onClick={onCollapse}>
            <ArrowLeftFromLine height={10} width={10} />
          </Button>
        </div>
      )}
      {collapsed && (
        <div className="max-sm:hidden flex items-center w-full">
          <Button variant="ghost" className="ml-auto" onClick={onExpand}>
            <ArrowRightFromLine height={10} width={10} />
          </Button>
        </div>
      )}
    </>
  );
};

export default Toggle;
