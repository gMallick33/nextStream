import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image
            src="/next_stream_logo.svg"
            alt="Next-Stream"
            height="32"
            width="32"
          />
        </div>
        <div className="hidden lg:block">
          <p className="text-lg font-semibold">NextStream</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
