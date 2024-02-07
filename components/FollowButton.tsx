"use client";

import React, { startTransition, useTransition } from "react";
import { Button } from "./ui/button";
import { onFollow, onUnfollow } from "@/actions/follow";
import { toast } from "sonner";
import { onBlock, onUnblock } from "@/actions/block";

interface FollowButtonProps {
  isFollowing: boolean;
  userId: string;
}

const FollowButton = ({ isFollowing, userId }: FollowButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const onClickFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then(() => toast.success("Followed the user"))
        .catch(() => toast.error("something went wrong"));
    });
  };
  const onClickUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then(() => toast.success("Unfollowed the user"))
        .catch(() => toast.error("something went wrong"));
    });
  };
  const onClickBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then(() => toast.success("Blocked the user"))
        .catch(() => toast.error("something went wrong"));
    });
  };
  const onClickUnblock = () => {
    startTransition(() => {
      onUnblock(userId)
        .then(() => toast.success("Unblocked the user"))
        .catch(() => toast.error("something went wrong"));
    });
  };
  return (
    <>
      <Button
        onClick={isFollowing ? onClickUnfollow : onClickFollow}
        disabled={isPending}
        className="bg-blue-600"
      >
        {!isFollowing && <div>Follow</div>}
        {isFollowing && <div>Unfollow</div>}
      </Button>
      <Button disabled={isPending} onClick={onClickBlock}>
        Block
      </Button>
    </>
  );
};

export default FollowButton;
