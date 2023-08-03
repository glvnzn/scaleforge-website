import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(3, "First Name must be at least 3 characters")
    .max(50),
  lastName: z
    .string()
    .min(3, "Last Name must be at least 3 characters")
    .max(50),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string(),
  organization: z.string(),
  message: z.string(),
});
