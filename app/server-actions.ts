"use server"

import { z } from "zod"

const schema = z.object({
  name: z.string().min(2, "Please provide your full name."),
  email: z.string().email("Please provide a valid email address."),
  message: z.string().min(10, "Please provide at least 10 characters."),
})

export async function sendContact(_prevState: any, formData: FormData) {
  const raw = {
    name: (formData.get("name") as string) || "",
    email: (formData.get("email") as string) || "",
    message: (formData.get("message") as string) || "",
  }

  const parsed = schema.safeParse(raw)
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors
    return { ok: false, errors: { name: errors.name?.[0], email: errors.email?.[0], message: errors.message?.[0] } }
  }

  // Simulate processing (e.g., send email, log, or store)
  await new Promise((r) => setTimeout(r, 800))

  console.log("New contact message:", parsed.data)

  return { ok: true, message: "Thanks! We received your message and will get back to you shortly." }
}

// Quote schema
const quoteSchema = z.object({
  category: z.string().min(1, "Please select a category."),
  email: z.string().email("Enter a valid email address."),
  phone: z
    .string()
    .min(7, "Enter a valid phone number.")
    .max(20, "Phone number is too long."),
  amount: z
    .string()
    .transform((v) => Number(v))
    .refine((n) => !Number.isNaN(n), { message: "Enter a valid amount in Naira." })
    .refine((n) => n >= 0, { message: "Amount cannot be negative." }),
})

export async function submitQuote(_prev: any, formData: FormData) {
  const raw = {
    category: (formData.get("category") as string) || "",
    email: (formData.get("email") as string) || "",
    phone: (formData.get("phone") as string) || "",
    amount: (formData.get("amount") as string) || "",
  }

  const parsed = quoteSchema.safeParse(raw)
  if (!parsed.success) {
    const e = parsed.error.flatten().fieldErrors
    return {
      ok: false,
      message: "Please fix the errors below.",
      errors: {
        category: e.category?.[0],
        email: e.email?.[0],
        phone: e.phone?.[0],
        amount: e.amount?.[0],
      },
    }
  }

  await new Promise((r) => setTimeout(r, 800))
  console.log("New quote request:", parsed.data)

  return {
    ok: true,
    message: "Your request has been submitted.",
  }
}
