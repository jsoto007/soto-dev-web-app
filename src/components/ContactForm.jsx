// components/ContactForm.jsx
"use client"

import { useId, useState } from "react"
import { Button } from "@/components/Button"
import { FadeIn } from "@/components/FadeIn"

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

export default function ContactForm() {
  const [status, setStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === "loading") return

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    console.log("Submitting data:", data)

    setStatus("loading")

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      e.target.reset()
      setErrorMessage("")
      setStatus("success")
    } else {
      const errorData = await res.json().catch(() => ({}))
      console.error("Failed to send email:", errorData)
      setErrorMessage(errorData.error || "Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Tell us about your project
        </h2>
        <p className="mt-4 text-sm text-neutral-600">
          Once we review your details, a strategist from Soto Dev, LLC will
          follow up with next steps and an initial delivery roadmap.
        </p>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput label="Email" type="email" name="email" autoComplete="email" />
          <TextInput label="Company" name="company" autoComplete="organization" />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Estimated budget (USD)
              </legend>
              <p className="mt-2 text-sm text-neutral-400">
                Select the range that best matches your investment comfort level. Not sure yet? Choose the last option and we’ll help you scope it.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="$5K – $15K" name="budget" value="5-15" />
                <RadioInput label="$15K – $35K" name="budget" value="15-35" />
                <RadioInput label="$35K – $75K" name="budget" value="35-75" />
                <RadioInput label="Let’s discuss the right range" name="budget" value="tbd" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Request a strategy call"}
        </Button>
        <p className="mt-4 text-xs text-neutral-400">
          We never share your information. You’ll receive a confirmation email with next steps from Soto Dev, LLC.
        </p>
        {status === "success" && (
          <p className="mt-4 text-sm font-semibold text-emerald-600">
            Thanks for reaching out! Your message is on its way — expect a reply within one business day.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm font-semibold text-rose-600">
            {errorMessage}
          </p>
        )}
      </form>
    </FadeIn>
  )
}
