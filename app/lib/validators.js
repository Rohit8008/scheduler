import { z } from "zod";

export const userNameSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only consist of letters,numbers and underscore(_)"
    ),
});

export const eventSchema = z.object({
  title: z.string()
    .min(1, "Title is Required")
    .max(100, "Title must be 100 character or less"),
  description: z.string()
    .min(1, "Description is Required")
    .max(500, "Description must be 500 character or less"),
  duration: z.number().int().positive("Duration must be a positive number"),

  isPrivate: z.boolean(),
});
