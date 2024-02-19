"use server";

import { followUser, unfollowUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const onFollow = async (id: string) => {
  try {
    const follow = await followUser(id);
    revalidatePath("/");
    if (follow) {
      revalidatePath(`/users/${follow?.following?.username}`);
    }
    return follow;
  } catch (error) {
    throw new Error("internal error");
  }
};

export const onUnfollow = async (id: string) => {
  try {
    const unfollowedUser = await unfollowUser(id);
    revalidatePath("/");
    if (unfollowedUser) {
      revalidatePath(`/users/${unfollowedUser.following.username}`);
    }
    return unfollowedUser;
  } catch (error) {
    throw new Error("internal error");
  }
};
