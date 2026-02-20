"use client";

import { motion } from "framer-motion";
import { Users, PhoneOff, TrendingUp } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const cards = [
  {
    icon: Users,
    title: "Labor Constraints",
    description: "Reduce dependency on seasonal staffing fluctuations.",
  },
  {
    icon: PhoneOff,
    title: "Missed Connections",
    description: "Capture every booking opportunity, day or night.",
  },
  {
    icon: TrendingUp,
    title: "Static Pricing",
    description: "Dynamic yield management that adapts to demand.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function EfficiencyGap() {
  return (
    <SectionWrapper className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-medium tracking-widest text-accent uppercase"
          >
            The Efficiency Gap
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-serif text-4xl tracking-tight text-cream sm:text-5xl"
          >
            Where Revenue Goes to Rest
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 60px rgba(194, 163, 112, 0.08)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-3xl border border-glass-border bg-glass p-8 backdrop-blur-xl transition-colors duration-500 hover:border-accent/20"
              >
                {/* Icon glow ring */}
                <div className="relative mb-6 inline-flex">
                  <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl transition-all duration-500 group-hover:bg-accent/20 group-hover:blur-2xl" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-accent/5">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="mb-3 font-serif text-xl text-cream">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-cream-dim">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
