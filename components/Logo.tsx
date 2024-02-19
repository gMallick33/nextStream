import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center p-1 rounded-lg bg-slate-950">
        <Link
          href="/"
          className="flex items-center hover:opacity-50 transition"
        >
          <Image
            src="/next_stream_logo.svg"
            height={50}
            width={50}
            alt="logo"
          />
          <p className="text-red-500 text-xl pl-2 max-sm:hidden">Next-</p>
          <p className="max-sm:hidden">Stream</p>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
