import FollowButton from "@/components/FollowButton";
import StreamPlayer from "@/components/stream-player/StreamPlayer";
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
  if (!user || !user.stream) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }

  return (
    <StreamPlayer user={user} stream={user.stream} isFollowing={isFollowing} />
  );
};

export default page;
