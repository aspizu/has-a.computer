import {z} from "zod"

export interface ApiErrorResponse {
  error: string
}

export const subdomainSchema = z.string().min(1, "Enter an address to reserve.")

export const emailSchema = z.email("Enter a valid email address.")

const bareDomain = /^[a-z0-9-]+(\.[a-z0-9-]+)+(:\d+)?([/?#]\S*)?$/i

export const websiteSchema = z
  .string()
  .min(1, "Enter the URL of your current website.")
  .refine(
    (value) => value === "" || z.url().safeParse(value).success || bareDomain.test(value),
    "Enter a valid URL.",
  )

export const coverLetterSchema = z
  .string()
  .min(80, "Tell us a bit more. At least 80 characters.")
  .max(2000, "Keep it under 2000 characters.")

export const reserveSchema = z.object({
  subdomain: subdomainSchema,
  email: emailSchema,
  website: websiteSchema,
  coverLetter: coverLetterSchema,
})

export type ReserveRequest = z.infer<typeof reserveSchema>

export function greet(name: string): string {
  return `Hello, ${name}!`
}
