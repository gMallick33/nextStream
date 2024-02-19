"use client";

import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  imageUrl: string;
  username: string;
  isLive?: boolean;
  showBadge?: boolean;
}

const avatarSizes = cva("", {
  variants: {
    size: {
      default: "h-8 w-8",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
const UserAvatar = ({
  imageUrl,
  username,
  isLive,
  showBadge,
  size,
}: UserAvatarProps) => {
  const canShowBadge = showBadge && isLive;
  const { collapsed } = useSidebar();
  return (
    <div className="flex items-center">
      <Avatar
        className={cn(
          isLive && "ring-2 ring-rose-600 border border-background",
          avatarSizes({ size })
        )}
      >
        <AvatarImage src={imageUrl} className="object-cover" />

        <AvatarFallback>
          {username[0]}
          {username[username.length - 1]}
        </AvatarFallback>
      </Avatar>
      <div className={cn("ml-2 max-sm:hidden", collapsed ? "hidden" : "")}>
        {username}
      </div>
    </div>
  );
};

export default UserAvatar;
