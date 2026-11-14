import { BadgeCheck, Eye, HeartHandshake, Shield } from "lucide-react";

export const features = [
  {
    number: "01",
    icon: BadgeCheck,
    title: "Merchant clarity",
    description: "Make useful business context easier for shoppers to discover and understand.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Signals that make sense",
    description: "Present trust information in a way that feels clear, considered, and human.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Thoughtful by design",
    description: "Build with privacy and responsible handling of information in mind from day one.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Made for local commerce",
    description: "Shape an experience around the real needs of Africa’s merchants and shoppers.",
  },
] as const;
