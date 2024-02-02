import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center p-1 rounded-lg bg-slate-950">
        <Image src="/next_stream_logo.svg" height={50} width={50} alt="logo" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg">Next-Stream</p>
        <p className="text-sm text-neutral-500">Let&apos;s Play</p>
      </div>
    </div>
  );
};

export default Logo;
