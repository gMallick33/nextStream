"use client";

import { useSidebar } from "@/store/useSidebar";
import { Follow, User } from "@prisma/client";
import React from "react";
import UserItem from "./UserItem";

interface FollowingUsersProps {
  data: (Follow & { following: User })[];
}

const FollowingUsers = ({ data }: FollowingUsersProps) => {
  const { collapsed } = useSidebar((state) => state);
  if (!data.length) return null;

  return (
    <div>
      {!collapsed && (
        <div className="pl-4 mb-4">
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      )}
      <ul className="pl-4">
        {data.map((follow) => (
          <UserItem
            key={follow.following.id}
            username={follow.following.username}
            imageUrl={follow.following.imageUrl}
          />
        ))}
      </ul>
    </div>
  );
};

export default FollowingUsers;
