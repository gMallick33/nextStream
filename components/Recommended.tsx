"use client";

import { useSidebar } from "@/store/useSidebar";
import { Stream, User } from "@prisma/client";
import React from "react";
import UserItem from "./UserItem";

interface RecommendedProps {
  data: (User & {
    stream: { isLive: boolean } | null;
  })[];
}
const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSidebar((state) => state);
  const showLabel = !collapsed && data.length > 0;
  return (
    <div>
      {showLabel && (
        <div className="flex justify-start pl-4">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="ml-4">
        {data.map((user: any) => (
          <div className="text-sm text-blue-300" key={user.id}>
            <UserItem
              key={user.id}
              username={user.username}
              imageUrl={user.imageUrl}
              isLive={user.stream?.isLive}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Recommended;
