import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import React from "react";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="pt-20 flex h-screen">
          <Sidebar />
          <Container>{children}</Container>
        </div>
      </div>
    </>
  );
};

export default BrowseLayout;
