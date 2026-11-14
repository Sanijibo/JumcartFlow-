import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
};

export function FeatureCard({ icon: Icon, title, description, number }: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-[#e9ede6] bg-[#fbfcf9] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#cbd9c1] hover:bg-white hover:shadow-[0_18px_40px_-30px_rgba(27,61,46,0.3)] sm:p-6">
      <div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-xl bg-[#edf4e8] text-[#527343] transition group-hover:bg-leaf"><Icon size={19} strokeWidth={1.8} aria-hidden="true" /></span><span className="font-display text-xs font-semibold text-[#a2aea0]">{number}</span></div>
      <h3 className="mt-6 text-sm font-bold text-ink">{title}</h3>
      <p className="mt-2 text-xs leading-6 text-muted">{description}</p>
    </article>
  );
}
