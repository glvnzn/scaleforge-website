import { z } from "zod";

export const applyFormSchema = z.object({
  firstName: z
    .string()
    .min(3, "First Name must be at least 3 characters")
    .max(50),
  lastName: z
    .string()
    .min(3, "Last Name must be at least 3 characters")
    .max(50),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(3, "Contact number must be at least 3 characters")
    .max(50),
  organization: z.string(),
  coverLetter: z
    .string()
    .min(3, "Cover letter must be at least 3 characters")
    .max(500),
  resume: typeof window === "undefined" ? z.any() : z.instanceof(File),
});
