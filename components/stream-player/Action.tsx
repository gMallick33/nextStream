"use client";

import React, { useTransition } from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { onFollow, onUnfollow } from "@/actions/follow";
import { toast } from "sonner";

interface ActionProps {
  hostIdentity: string;
  isFollowing: boolean;
  isHost: boolean;
}

const Action = ({ hostIdentity, isFollowing, isHost }: ActionProps) => {
  const [isPending, startTransition] = useTransition();
  const { userId } = useAuth();
  const router = useRouter();
  const handleFollow = () => {
    startTransition(() => {
      onFollow(hostIdentity)
        .then((data) =>
          toast.success(`you are now following ${data?.following.username}`)
        )
        .catch(() => toast.error("could not follow, something went wrong"));
    });
  };
  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(hostIdentity)
        .then((data) =>
          toast.success(`you unfollowed ${data?.following.username}`)
        )
        .catch(() => toast.error("could not unfollow, something went wrong"));
    });
  };
  const toggleFollow = () => {
    if (!userId) {
      return router.push("/sign-in");
    }
    if (isHost) {
      return;
    }

    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };
  return (
    <Button
      disabled={isPending || isHost}
      onClick={toggleFollow}
      size="sm"
      className="w-full lg:w-auto bg-blue-500"
    >
      <Heart
        className={cn("h-4 w-4 mr-2", isFollowing ? "fill-white" : "fill-none")}
      />
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default Action;
