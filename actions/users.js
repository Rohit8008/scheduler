"use server";

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function updateUserName(username) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  const exisitingUser = await db?.user.findUnique({
    where: { username },
  });

  if (exisitingUser && exisitingUser.clerkUserId !== userId) {
    throw new Error("Username is Already taken");
  }

  await db.user.update({
    where: { clerkUserId: userId },
    data: { username },
  });

  const client = await clerkClient();
  console.log(await client.users?.getCount());

  await client.users.updateUser(userId, {
    username,
  });

  return { success: true, message: "Username updated successfully" };
}

export async function getUserByUsername(username) {
  const user = await db.user.findUnique({
    where: { username },
    select: {
      id: true,
      name: true,
      email: true,
      imageUrl: true,
      events: {
        where: {
          isPrivate: false,
        },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          description: true,
          duration: true,
          isPrivate: true,
          _count: {
            select: { bookings: true },
          },
        },
      },
    },
  });

  return user;
}
