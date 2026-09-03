"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon, ArrowIcon, ShieldIcon } from "./Icons";

type Status = "idle" | "error" | "success";

export function CreateAccountForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setStatus("error");
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }
    if (form.password.length < 8) {
      setStatus("error");
      setError("Password must be at least 8 characters.");
      return;
    }
    setStatus("success");
    setError("");
  };

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-orange-400 text-white shadow-glow">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-xl font-extrabold text-ink">Account created</h3>
        <p className="mt-2 max-w-xs text-sm text-ink-soft">
          Welcome, {form.name.split(" ")[0]}. We&rsquo;ve sent a confirmation link
          to {form.email}. Check your inbox to get started.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", password: "" });
          }}
          className="btn-light mt-6"
        >
          Create another
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none backdrop-blur transition focus:border-purple-300/60 focus:bg-white/[0.07] focus:shadow-glow-soft";

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 text-white shadow-lg">
          <ShieldIcon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-xl font-extrabold text-ink">Create an account</h3>
          <p className="text-sm text-ink-soft">Get started with Jurigeek in under a minute.</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="ca-name" className="mb-1.5 block text-xs font-semibold text-ink-soft">
            Full name
          </label>
          <input
            id="ca-name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="ca-email" className="mb-1.5 block text-xs font-semibold text-ink-soft">
            Email address
          </label>
          <input
            id="ca-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="ca-password" className="mb-1.5 block text-xs font-semibold text-ink-soft">
            Password
          </label>
          <input
            id="ca-password"
            type="password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            className={inputBase}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg border border-orange-400/30 bg-orange-400/10 px-3 py-2 text-xs font-semibold text-orange-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="btn-lime group mt-6 w-full !py-3.5"
      >
        Create account
        <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </button>
      <p className="mt-4 text-center text-xs text-ink-soft">
        By creating an account you agree to our terms and privacy policy.
      </p>
    </form>
  );
}
