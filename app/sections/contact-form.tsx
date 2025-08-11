"use client"

import * as React from "react"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { sendContact } from "../server-actions"

type FormState = {
ok: boolean
message?: string
errors?: { name?: string; email?: string; message?: string }
}

const initialState: FormState = { ok: false }

export function ContactForm() {
const [state, formAction] = useActionState<FormState, FormData>(sendContact, initialState)

return (
  <form action={formAction} className="space-y-4">
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <Input id="name" name="name" placeholder="Your full name" aria-invalid={!!state.errors?.name} />
        {state.errors?.name ? <p className="text-xs text-red-600">{state.errors.name}</p> : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" aria-invalid={!!state.errors?.email} />
        {state.errors?.email ? <p className="text-xs text-red-600">{state.errors.email}</p> : null}
      </div>
    </div>
    <div className="space-y-2">
      <label htmlFor="message" className="text-sm font-medium">Message</label>
      <Textarea id="message" name="message" placeholder="Tell us about your project..." rows={5} aria-invalid={!!state.errors?.message} />
      {state.errors?.message ? <p className="text-xs text-red-600">{state.errors.message}</p> : null}
    </div>
    <SubmitRow />
    {state.ok ? (
      <p role="status" className="text-sm text-emerald-700">
        {state.message ?? "Thank you! Your message has been sent."}
      </p>
    ) : null}
  </form>
)
}

function SubmitRow() {
const { pending } = useFormStatus()
return (
  <div className="flex items-center gap-3">
    <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
    <p className="text-xs text-muted-foreground">We respect your privacy. Your information is safe with us.</p>
  </div>
)
}
