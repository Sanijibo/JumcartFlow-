"use client";

import { useActionState } from "react";
import Link from "next/link";
import { updateUserPassword } from "@/app/actions/auth";

const initialState = { success: false, message: "" };

export default function ResetPasswordPage() {
  const [state, formAction, pending] = useActionState(updateUserPassword, initialState);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f6fa] px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-[#e6ebf2] bg-white p-7 shadow-[0_24px_80px_-48px_rgba(18,35,55,0.45)]">
        <h1 className="text-2xl font-bold tracking-tight text-[#14243d]">Create new password</h1>
        <p className="mt-2 text-sm text-slate-500">Set a new password for your merchant account.</p>

        {state?.message ? (
          <div className={`mt-4 rounded-xl px-3 py-2 text-xs font-medium ${state.success ? "border border-[#d9e9df] bg-[#edf9f2] text-[#1b6d4b]" : "border border-[#f2d2b3] bg-[#fff8ed] text-[#9a6a17]"}`}>
            {state.message}
          </div>
        ) : null}

        <form action={formAction} className="mt-6 space-y-4">
          <label className="block text-xs font-semibold text-slate-600">
            New password
            <input name="password" type="password" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]" placeholder="At least 8 characters" />
          </label>

          <label className="block text-xs font-semibold text-slate-600">
            Confirm new password
            <input name="confirmPassword" type="password" required className="mt-1.5 h-11 w-full rounded-xl border border-[#dfe6ee] bg-[#fbfcfe] px-3 text-sm text-slate-700 outline-none transition focus:border-[#2d7a5d]" placeholder="Repeat new password" />
          </label>

          <button type="submit" disabled={pending} className="flex h-11 w-full items-center justify-center rounded-xl bg-[#122848] text-sm font-bold text-white transition hover:bg-[#1d3b67] disabled:cursor-not-allowed disabled:opacity-70">
            {pending ? "Updating password..." : "Update password"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-slate-500">
          <Link href="/login" className="font-semibold text-[#1f7b58] hover:underline">Return to login</Link>
        </p>
      </div>
    </main>
  );
}
