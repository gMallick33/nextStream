import Logo from "@/components/Logo";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
