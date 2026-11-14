import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

const links = [
  { label: "Our approach", href: "#built-for-trust" },
  { label: "Get in touch", href: "mailto:hello@jumcart.com?subject=Jumcart%20Verify" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#e9ede6]/80 bg-paper/90 px-5 backdrop-blur-md sm:px-8 lg:px-12">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between">
        <Link href="/" aria-label="Jumcart Verify home" className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest">
          <span className="grid size-9 place-items-center rounded-xl bg-forest text-leaf"><BadgeCheck size={21} strokeWidth={2.2} aria-hidden="true" /></span>
          <span className="flex flex-col"><span className="font-display text-[17px] font-bold leading-5 tracking-[-0.04em]">Jumcart <span className="text-[#66834f]">Verify</span></span><span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">by JUMCART</span></span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-4 sm:gap-7">
          <Link href={links[0].href} className="hidden text-xs font-semibold text-muted transition hover:text-ink sm:block">{links[0].label}</Link>
          <a href={links[1].href} className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[#dfe6da] bg-white px-4 text-xs font-bold text-ink transition hover:border-[#afc99a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest">Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  );
}
