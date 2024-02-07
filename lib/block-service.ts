import { getSelf } from "./auth-service";
import { db } from "./db";

export const isBlockedByUser = async (id: string) => {
  try {
    const self = await getSelf();
    if (!self) throw new Error("self not found");
    const otherUser = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!otherUser) throw new Error("user not found");
    if (otherUser.id === self?.id) return false;

    const existingBlock = await db.block.findUnique({
      where: {
        blockerId_blockedId: {
          blockerId: otherUser.id,
          blockedId: self?.id,
        },
      },
    });

    return !!existingBlock;
  } catch (error) {
    return false;
  }
};

export const blockUser = async (id: string) => {
  const self = await getSelf();
  if (!self) throw new Error("self not found");
  if (self?.id === id) throw new Error("cannot block yourself");

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });
  if (!otherUser) throw new Error("other user not found");

  const existingBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self?.id,
        blockedId: otherUser?.id,
      },
    },
  });

  if (existingBlock) throw new Error("Already blocked");

  const block = await db.block.create({
    data: {
      blockerId: self?.id,
      blockedId: otherUser?.id,
    },
    include: {
      blocked: true,
    },
  });

  return block;
};

export const unblockUser = async (id: string) => {
  const self = await getSelf();
  if (!self) throw new Error("self not founc");
  if (self?.id === id) {
    throw new Error("cannot unblock yourself");
  }

  const otherUser = await db.user.findUnique({
    where: { id },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  const existingBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self?.id,
        blockedId: otherUser?.id,
      },
    },
  });

  if (!existingBlock) {
    throw new Error("already not blocked");
  }

  const unblock = await db.block.delete({
    where: {
      id: existingBlock.id,
    },
    include: {
      blocked: true,
    },
  });

  return unblock;
};
