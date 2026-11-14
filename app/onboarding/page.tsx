"use client";

import { useActionState } from "react";
import Link from "next/link";
import { completeOnboarding } from "@/app/actions/auth";

const initialState = { success: false, message: "" };

export default function OnboardingPage() {
  const [state, formAction, pending] = useActionState(completeOnboarding, initialState);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f6fa] px-4 py-10">
      <div className="w-full max-w-2xl rounded-3xl border border-[#e6ebf2] bg-white p-7 shadow-[0_24px_80px_-48px_rgba(18,35,55,0.45)]">
        <div className="mb-6">
          <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#2d7a5d]">Merchant onboarding</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#14243d]">Complete your business profile</h1>
          <p className="mt-2 text-sm text-slate-500">Set up the core details used by your trust infrastructure workspace.</p>
        </div>

        {state?.message ? (
          <div className="mb-4 rounded-xl border border-[#f2d2b3] bg-[#fff8ed] px-3 py-2 text-xs font-medium text-[#9a6a17]">{state.message}</div>
        ) : null}

        <form action={formAction} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-xs font-semibold text-slate-600">
              Business name
              <input name="businessName" type="text" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]" placeholder="Amina Market" />
            </label>
            <label className="block text-xs font-semibold text-slate-600">
              Business email
              <input name="businessEmail" type="email" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]" placeholder="finance@company.com" />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <label className="block text-xs font-semibold text-slate-600">
              Country
              <select name="country" defaultValue="Nigeria" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]">
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
                <option value="South Africa">South Africa</option>
              </select>
            </label>

            <label className="block text-xs font-semibold text-slate-600">
              Business category
              <select name="businessCategory" defaultValue="Retail" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]">
                <option value="Retail">Retail</option>
                <option value="Marketplace">Marketplace</option>
                <option value="Food and beverage">Food and beverage</option>
                <option value="Fashion">Fashion</option>
                <option value="Logistics">Logistics</option>
              </select>
            </label>

            <label className="block text-xs font-semibold text-slate-600">
              Currency
              <select name="currency" defaultValue="NGN" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]">
                <option value="NGN">NGN</option>
                <option value="GHS">GHS</option>
                <option value="KES">KES</option>
                <option value="ZAR">ZAR</option>
                <option value="USD">USD</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-xs font-semibold text-slate-600">
              Contact name
              <input name="contactName" type="text" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]" placeholder="Amina Bello" />
            </label>
            <label className="block text-xs font-semibold text-slate-600">
              Contact phone
              <input name="contactPhone" type="tel" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]" placeholder="+234 800 000 0000" />
            </label>
          </div>

          <button type="submit" disabled={pending} className="flex h-11 w-full items-center justify-center rounded-xl bg-[#122848] text-sm font-bold text-white transition hover:bg-[#1d3b67] disabled:cursor-not-allowed disabled:opacity-70">
            {pending ? "Saving profile..." : "Continue to dashboard"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-slate-500">
          Need to sign out? <Link href="/logout" className="font-semibold text-[#1f7b58] hover:underline">Log out</Link>
        </p>
      </div>
    </main>
  );
}
