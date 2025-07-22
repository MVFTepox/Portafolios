import {z} from "zod";

export const formSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.email("Invalid email").nonempty("Email is required"),
    message: z.string().nonempty("Message is required"),
})

export type FormSchema = z.infer<typeof formSchema>