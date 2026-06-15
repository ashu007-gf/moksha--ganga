"use client";

import { Send } from "lucide-react";

export function ContactForm({ dict }: { dict: any }) {
  return (
    <form
      className="grid gap-4 rounded-lg border border-saffron-100 bg-white p-5 shadow-sm"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="grid gap-2 text-sm font-semibold text-river-900">
        {dict.form.name}
        <input
          className="min-h-12 rounded-lg border border-gray-200 px-4 outline-none transition focus:border-saffron-500"
          name="name"
          autoComplete="name"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-river-900">
        {dict.form.phone}
        <input
          className="min-h-12 rounded-lg border border-gray-200 px-4 outline-none transition focus:border-saffron-500"
          name="phone"
          autoComplete="tel"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-river-900">
        {dict.form.message}
        <textarea
          className="min-h-32 rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-saffron-500"
          name="message"
          placeholder={dict.form.placeholder}
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-saffron-600 px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-saffron-700"
      >
        <Send className="h-4 w-4" />
        {dict.form.submit}
      </button>
    </form>
  );
}
