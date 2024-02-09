import StreamPlayer from "@/components/StreamPlayer";
import { getUserByUsername } from "@/lib/user-service";
import { currentUser } from "@clerk/nextjs";
import React from "react";

interface CreatorPageProps {
  params: {
    username: string;
  };
}

const CreaterPage = async ({ params }: CreatorPageProps) => {
  const externalUser = await currentUser();
  const user = await getUserByUsername(params.username);

  if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
    throw new Error("Unauthorized");
  }

  return (
    <div className="h-full">
      <StreamPlayer user={user} stream={user.stream} isFollowing />
    </div>
  );
};

export default CreaterPage;
