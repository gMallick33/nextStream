import FollowButton from "@/components/FollowButton";
import { isBlockedByUser } from "@/lib/block-service";
import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import React from "react";

interface UserProps {
  params: {
    username: string;
  };
}
const page = async ({ params }: UserProps) => {
  const user = await getUserByUsername(params.username);
  if (!user) {
    notFound();
  }
  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);
  if (isBlocked) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-y-4">
      <p>username: {user.username}</p>
      <p>user Id: {user.id}</p>
      <FollowButton userId={user.id} isFollowing={isFollowing} />
    </div>
  );
};

export default page;
