"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Activity, AlertTriangle, BarChart3, BadgeCheck, Boxes, ChevronDown, CircleDollarSign, ClipboardList, Menu, PackageCheck, Settings2, ShieldCheck, X } from "lucide-react";

const navigation = [
  { name: "Overview", href: "/app", icon: BarChart3 },
  { name: "Orders", href: "/app/orders", icon: ClipboardList },
  { name: "Payments", href: "/app/payments", icon: CircleDollarSign },
  { name: "Fraud protection", href: "/app/fraud", icon: ShieldCheck },
  { name: "Deliveries", href: "/app/deliveries", icon: PackageCheck },
  { name: "Analytics", href: "/app/analytics", icon: Activity },
  { name: "Integrations", href: "/app/integrations", icon: Boxes },
  { name: "Settings", href: "/app/settings", icon: Settings2 },
];

export function DashboardShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f4f6fa] text-[#14243d]">
      {menuOpen && <button aria-label="Close navigation" onClick={() => setMenuOpen(false)} className="fixed inset-0 z-30 bg-[#101b30]/40 lg:hidden" />}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col border-r border-[#e8ebf1] bg-white transition-transform lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-[76px] items-center justify-between border-b border-[#edf0f4] px-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}><span className="grid size-10 place-items-center rounded-xl bg-[#122848] text-[#8de0b0]"><BadgeCheck size={23} /></span><span><span className="block text-sm font-extrabold tracking-tight">JUMCART <span className="text-[#168653]">VERIFY</span></span><span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[.16em] text-slate-400">Commerce. Verified.</span></span></Link>
          <button onClick={() => setMenuOpen(false)} className="rounded-lg p-2 text-slate-500 lg:hidden" aria-label="Close menu"><X size={19} /></button>
        </div>
        <div className="px-4 pt-6"><p className="px-3 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Merchant workspace</p><nav className="mt-3 space-y-1">{navigation.map(({ name, href, icon: Icon }) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-[13px] font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-[#14243d] [&.active]:bg-[#eaf6ef] [&.active]:text-[#117343]"><Icon size={17} strokeWidth={1.8} /><span>{name}</span>{name === "Fraud protection" && <span className="ml-auto grid size-5 place-items-center rounded-full bg-[#fff3df] text-[10px] font-bold text-[#a66711]">2</span>}</Link>)}</nav></div>
        <div className="mt-auto p-4"><div className="rounded-2xl bg-[#f5f8fb] p-4"><div className="flex items-center gap-2 text-xs font-bold"><span className="size-2 rounded-full bg-[#9aa6b7]" />Demo workspace</div><p className="mt-2 text-[11px] leading-5 text-slate-500">Sample data only. No live payments, providers, or verification services are connected.</p><Link href="/" className="mt-3 inline-flex text-xs font-bold text-[#177548] hover:underline">Visit public site <ChevronDown size={14} className="ml-1 -rotate-90" /></Link></div></div>
      </aside>
      <div className="min-h-screen lg:pl-[260px]">
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-[#e8ebf1] bg-white/95 px-4 backdrop-blur sm:px-7 lg:px-9">
          <div className="flex items-center gap-3"><button aria-label="Open navigation" onClick={() => setMenuOpen(true)} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"><Menu size={20} /></button><div><p className="text-xs font-semibold text-slate-400">Workspace / <span className="text-slate-600">Merchant dashboard</span></p><p className="mt-1 text-[13px] font-bold text-[#14243d]">Good morning, Amina</p></div></div>
          <div className="flex items-center gap-3"><span className="hidden rounded-full border border-[#f0dfc0] bg-[#fff9ed] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#9b6b18] sm:inline-flex">DEMO DATA</span><button aria-label="Notifications (demo)" onClick={() => window.alert("Demo workspace: no live notifications are configured.")} className="relative rounded-xl border border-[#e8ebf1] p-2.5 text-slate-500 hover:bg-slate-50"><AlertTriangle size={17} /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-amber-500" /></button><div className="grid size-9 place-items-center rounded-full bg-[#e8effb] text-xs font-bold text-[#254878]">AM</div></div>
        </header>
        <main className="mx-auto max-w-[1500px] p-4 sm:p-7 lg:p-9">{children}</main>
      </div>
    </div>
  );
}
