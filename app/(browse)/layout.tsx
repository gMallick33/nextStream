import Navbar from "@/components/Navbar";
import React from "react";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="pt-20">{children}</div>
      </div>
    </>
  );
};

export default BrowseLayout;
