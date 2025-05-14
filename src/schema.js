import { z } from "zod";
export const schema = z.object({
  username: z.string().min(3, { message: "username is too short" }),
  lastname: z.string().min(3, { message: "lastName is too short" }),
  email: z.string().email({ message: "Invalid email address" }),
});
