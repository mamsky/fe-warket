import { z } from "zod";

export const CreateUserSchemas = z.object({
  name: z
    .string()
    .min(1, { message: "Name required" })
    .max(20, { message: "Max 20 character" }),
  username: z
    .string()
    .min(1, { message: "Username required" })
    .max(15, { message: "Max 15 character" }),
  email: z.string().email().max(50, { message: "Max 50 character" }),
  password: z.string().min(6, { message: "Min 6 character" }),
});
export type CreateUserSchemaDTO = z.infer<typeof CreateUserSchemas>;

export const LoginUsersSchemas = z.object({
  username: z
    .string()
    .min(1, { message: "Username required" })
    .max(15, { message: "Max 15 character" }),
  password: z
    .string()
    .min(1, { message: "Password required" })
    .min(6, { message: "Min 6 character" }),
});
export type LoginSchemaDTO = z.infer<typeof LoginUsersSchemas>;
