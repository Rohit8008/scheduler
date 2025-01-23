"use server";

import { db } from "@/lib/prisma";
import { useAuth } from "@clerk/nextjs";
import { auth , clerkClient } from "@clerk/nextjs/server";


export async function updateUserName(username) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  const exisitingUserName = await db?.user.findUnique({
    where: { username },
  });

  if (exisitingUserName && exisitingUserName.id !== username) {
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

  return { success: true };
}
