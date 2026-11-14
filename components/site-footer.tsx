import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e9ede6] bg-white px-5 py-7 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" aria-label="Jumcart Verify home" className="flex items-center gap-2 text-sm font-bold tracking-tight text-ink"><span className="grid size-7 place-items-center rounded-lg bg-forest text-[#c5ed9b] text-xs">J</span>Jumcart Verify</Link>
        <p className="text-xs text-muted">Commerce. Verified. <span className="mx-1.5 text-[#c4cdc0]">·</span> Built for a more trusted digital Africa.</p>
        <a href="mailto:hello@jumcart.com" className="inline-flex items-center gap-1 text-xs font-semibold text-muted transition hover:text-ink">Get in touch <ArrowUpRight size={13} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
