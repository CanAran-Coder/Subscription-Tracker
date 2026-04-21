import {email, z} from "zod";

export const LoginSchema = z.object({
    email:z.email("You Must Use E-Mail Format!").min(1,"E-Mail Cannot Pass Empty!").trim(),
    password:z.string().min(1,"You Must Enter A Password!").trim()
});