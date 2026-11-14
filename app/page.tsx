import { ArrowDown, ArrowRight, BadgeCheck, Fingerprint, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FeatureCard } from "@/components/feature-card";
import { features } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pt-28">
          <div className="pointer-events-none absolute -right-36 top-8 h-[26rem] w-[26rem] rounded-full bg-[#e6f4d8] blur-3xl sm:right-[-8rem] sm:top-16" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dce6d8] bg-white/80 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#44634e]">
                <Sparkles size={14} aria-hidden="true" />
                A new standard for commerce trust
              </div>
              <h1 className="font-display text-[3.55rem] font-medium leading-[0.99] tracking-[-0.065em] text-ink sm:text-6xl lg:text-[5.3rem]">
                Trust should be the <span className="text-[#618c42]">easiest</span> part of buying online.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Meet the trust layer built for how Africa does business. Clearer signals for buyers, more confidence for merchants, and better commerce for everyone.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="mailto:hello@jumcart.com?subject=Jumcart%20Verify%20early%20access" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-6 text-sm font-semibold text-white transition hover:bg-[#245747] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest">
                  Get early access <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a href="#built-for-trust" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-ink transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest">
                  Explore the approach <ArrowDown size={15} aria-hidden="true" />
                </a>
              </div>
              <div className="mt-9 flex items-center gap-3 text-xs font-medium text-muted">
                <span className="flex -space-x-2" aria-hidden="true">
                  <span className="grid size-8 place-items-center rounded-full border-2 border-paper bg-[#f0c7a6] text-[10px] font-bold text-[#5b3924]">J</span>
                  <span className="grid size-8 place-items-center rounded-full border-2 border-paper bg-[#d5e5bb] text-[10px] font-bold text-[#34513b]">V</span>
                  <span className="grid size-8 place-items-center rounded-full border-2 border-paper bg-[#eadbb8] text-[10px] font-bold text-[#654d2c]">+</span>
                </span>
                Built around real commerce journeys across Africa
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[31rem] lg:ml-auto">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-[#edf4e7]" />
              <div className="relative overflow-hidden rounded-[1.8rem] border border-[#e7ece3] bg-white p-5 shadow-[0_30px_90px_-45px_rgba(27,61,46,0.28)] sm:p-7">
                <div className="flex items-center justify-between border-b border-[#edf0eb] pb-5">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-2xl bg-[#eff6e8] text-forest"><ShieldCheck size={21} aria-hidden="true" /></div>
                    <div><p className="text-sm font-bold text-ink">Trust snapshot</p><p className="mt-0.5 text-xs text-muted">A clearer way to shop</p></div>
                  </div>
                  <span className="rounded-full bg-[#f2f7ed] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#527343]">Jumcart Verify</span>
                </div>
                <div className="py-7">
                  <div className="flex items-center justify-between">
                    <div><p className="text-xs font-medium text-muted">Merchant profile</p><p className="mt-1 text-xl font-bold tracking-tight text-ink">A sample storefront</p></div>
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#f4eee0] font-display text-lg font-bold text-[#775d36]">S</div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-[#e8eee4] bg-[#fbfcf9] p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-[#eaf4e1] text-[#527343]"><BadgeCheck size={17} aria-hidden="true" /></div>
                      <div><p className="text-sm font-bold text-ink">Know who you’re buying from</p><p className="mt-1 text-xs leading-5 text-muted">Useful context, presented clearly before checkout.</p></div>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#f7f8f5] p-4"><Fingerprint size={17} className="text-[#65874d]" aria-hidden="true" /><p className="mt-3 text-xs font-bold text-ink">Merchant context</p><p className="mt-1 text-[11px] text-muted">Transparent signals</p></div>
                    <div className="rounded-2xl bg-[#f7f8f5] p-4"><LockKeyhole size={17} className="text-[#65874d]" aria-hidden="true" /><p className="mt-3 text-xs font-bold text-ink">Privacy-minded</p><p className="mt-1 text-[11px] text-muted">Trust, thoughtfully built</p></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-t border-[#edf0eb] pt-4 text-[11px] leading-5 text-muted"><ShieldCheck size={14} className="shrink-0 text-[#65874d]" aria-hidden="true" />Illustrative product concept — not a live verification result.</div>
              </div>
              <div className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-2xl border border-[#e8eee4] bg-white px-4 py-3 text-xs font-semibold text-ink shadow-lg sm:flex"><span className="size-2 rounded-full bg-[#91bd69]" /> Designed for confidence, not complexity</div>
            </div>
          </div>
        </section>

        <section id="built-for-trust" className="scroll-mt-20 border-y border-[#e9ede6] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#66834f]">A better foundation</p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.045em] text-ink sm:text-4xl">Commerce moves at the speed of trust.</h2>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">Online commerce is full of possibility. Jumcart Verify is being built to make the signals that matter easier to understand and act on.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[1.75rem] bg-forest px-7 py-9 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center">
            <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c5e7a5]">Commerce. Verified.</p><h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.045em] sm:text-4xl">Let’s make online commerce feel more human.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/70">We’re shaping a more trusted digital commerce experience. Join the conversation as we build.</p></div>
            <a href="mailto:hello@jumcart.com?subject=Jumcart%20Verify%20early%20access" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-leaf px-6 text-sm font-bold text-ink transition hover:bg-[#c9f793] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-leaf">Talk to our team <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
