"use client";

import React from "react";
import ChatToggle from "./ChatToggle";
import VariantToggle from "./VariantToggle";

const ChatHeader = () => {
  return (
    <div className="relative p-3 border-b">
      <div className="absolute left-2 top-2 hidden lg:block">
        <ChatToggle />
      </div>

      <p className="font-semibold text-primary text-center">Stream Chat</p>
      <div className="absolute right-2 top-2">
        <VariantToggle />
      </div>
    </div>
  );
};

export default ChatHeader;
