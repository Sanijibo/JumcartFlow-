"use client";

import { useActionState } from "react";
import Link from "next/link";
import { loginMerchant } from "@/app/actions/auth";

const initialState = { success: false, message: "" };

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginMerchant, initialState);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f6fa] px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-[#e6ebf2] bg-white p-7 shadow-[0_24px_80px_-48px_rgba(18,35,55,0.45)]">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-[#122848] text-[#8de0b0]"><span className="text-lg font-black">J</span></span>
          <div>
            <p className="text-lg font-bold tracking-tight text-[#14243d]">Jumcart Verify</p>
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-slate-400">Commerce. Verified.</p>
          </div>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-[#14243d]">Merchant login</h1>
        <p className="mt-2 text-sm text-slate-500">Secure access to your merchant workspace.</p>

        {state?.message ? (
          <div className="mt-4 rounded-xl border border-[#f2d2b3] bg-[#fff8ed] px-3 py-2 text-xs font-medium text-[#9a6a17]">{state.message}</div>
        ) : null}

        <form action={formAction} className="mt-6 space-y-4">
          <label className="block text-xs font-semibold text-slate-600">
            Email address
            <input
              name="email"
              type="email"
              required
              className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]"
              placeholder="merchant@company.com"
            />
          </label>

          <label className="block text-xs font-semibold text-slate-600">
            Password
            <input
              name="password"
              type="password"
              required
              className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]"
              placeholder="********"
            />
          </label>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <Link href="/forgot-password" className="font-semibold text-[#1f7b58] hover:underline">Forgot password?</Link>
            <Link href="/register" className="font-semibold text-[#1f7b58] hover:underline">Create account</Link>
          </div>

          <button type="submit" disabled={pending} className="mt-1 flex h-11 w-full items-center justify-center rounded-xl bg-[#122848] text-sm font-bold text-white transition hover:bg-[#1d3b67] disabled:cursor-not-allowed disabled:opacity-70">
            {pending ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
