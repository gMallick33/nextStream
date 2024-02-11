"use server";

import { db, getSelf } from "@/lib/auth-service";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const updateuser = async (values: Partial<User>) => {
  try {
    const self = await getSelf();
    const validData = {
      bio: values.bio,
    };

    const user = await db.user.update({
      where: { id: self?.id },
      data: { ...validData },
    });

    revalidatePath(`/users/${self?.username}`);
    revalidatePath(`/creator/${self?.username}`);

    return user;
  } catch (error) {
    throw new Error("internal error");
  }
};
