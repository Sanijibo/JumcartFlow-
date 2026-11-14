"use client";

import { useActionState } from "react";
import Link from "next/link";
import { registerMerchant } from "@/app/actions/auth";

const initialState = { success: false, message: "" };

export default function RegisterPage() {
  const [state, formAction, pending] = useActionState(registerMerchant, initialState);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f6fa] px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-[#e6ebf2] bg-white p-7 shadow-[0_24px_80px_-48px_rgba(18,35,55,0.45)]">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-[#122848] text-[#8de0b0]"><span className="text-lg font-black">J</span></span>
          <div>
            <p className="text-lg font-bold tracking-tight text-[#14243d]">Create merchant account</p>
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-slate-400">Commerce. Verified.</p>
          </div>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-[#14243d]">Merchant registration</h1>
        <p className="mt-2 text-sm text-slate-500">Start your trust infrastructure workspace with Jumcart Verify.</p>

        {state?.message ? (
          <div className="mt-4 rounded-xl border border-[#d9e9df] bg-[#edf9f2] px-3 py-2 text-xs font-medium text-[#1b6d4b]">{state.message}</div>
        ) : null}

        <form action={formAction} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-xs font-semibold text-slate-600">
              Full name
              <input name="fullName" type="text" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]" placeholder="Amina Bello" />
            </label>
            <label className="block text-xs font-semibold text-slate-600">
              Business name
              <input name="businessName" type="text" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]" placeholder="Amina Market" />
            </label>
          </div>

          <label className="block text-xs font-semibold text-slate-600">
            Email address
            <input name="email" type="email" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]" placeholder="merchant@company.com" />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-xs font-semibold text-slate-600">
              Password
              <input name="password" type="password" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]" placeholder="Minimum 8 characters" />
            </label>
            <label className="block text-xs font-semibold text-slate-600">
              Confirm password
              <input name="confirmPassword" type="password" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]" placeholder="Repeat password" />
            </label>
          </div>

          <div className="rounded-xl bg-[#f7f9fb] p-3 text-[11px] text-slate-500">
            Your account will be created in a secure Supabase authentication flow. Email verification can be enabled from the Supabase project settings if required.
          </div>

          <button type="submit" disabled={pending} className="flex h-11 w-full items-center justify-center rounded-xl bg-[#122848] text-sm font-bold text-white transition hover:bg-[#1d3b67] disabled:cursor-not-allowed disabled:opacity-70">
            {pending ? "Creating account..." : "Create merchant account"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-slate-500">
          Already registered? <Link href="/login" className="font-semibold text-[#1f7b58] hover:underline">Sign in</Link>
        </p>
      </div>
    </main>
  );
}
