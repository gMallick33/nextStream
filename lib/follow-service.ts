import { getSelf } from "./auth-service";
import { db } from "./db";

export const getFollowedUsers = async () => {
  try {
    const self = await getSelf();

    const followedUsers = db.follow.findMany({
      where: {
        followerId: self?.id,
        following: {
          blocking: {
            none: {
              blockedId: self?.id,
            },
          },
        },
      },
      include: {
        following: {
          include: {
            stream: {
              select: {
                isLive: true,
              },
            },
          },
        },
      },
    });
    return followedUsers;
  } catch (error) {
    return [];
  }
};

export const isFollowingUser = async (id: string) => {
  try {
    const self = await getSelf();
    const otherUser = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (self?.id === otherUser?.id) return true;
    const isFollowing = await db.follow.findFirst({
      where: {
        followerId: self?.id,
        followingId: otherUser?.id,
      },
    });
    return !!isFollowing;
  } catch (error) {
    return false;
  }
};

export const followUser = async (id: string) => {
  const self = await getSelf();
  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });
  if (!otherUser) throw Error("other user not founc");
  if (!self) throw Error("self not found");
  const isFollowing = await db.follow.findFirst({
    where: {
      followerId: self?.id,
      followingId: otherUser?.id,
    },
  });

  if (isFollowing) {
    return null;
  }

  const follow = await db.follow.create({
    data: {
      followerId: self?.id,
      followingId: otherUser?.id,
    },
    include: {
      following: true,
      follower: true,
    },
  });
  return follow;
};

export const unfollowUser = async (id: string) => {
  const self = await getSelf();
  if (!self) return null;
  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });
  if (!otherUser) {
    throw new Error("user not found");
  }
  if (otherUser.id === self.id) {
    throw new Error("cannot unfollow yourself");
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self?.id,
      followingId: otherUser.id,
    },
  });

  if (!existingFollow) throw new Error("not following");

  const follow = await db.follow.delete({
    where: {
      id: existingFollow.id,
    },
    include: {
      following: true,
    },
  });

  return follow;
};
