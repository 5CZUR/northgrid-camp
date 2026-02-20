"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const features = [
  {
    label: "Voice Intelligence",
    title: "AI Voice Concierge",
    description:
      "A tireless front desk that speaks naturally, handles reservations, answers questions about amenities, and never puts a caller on hold. Available around the clock in any language your guests speak.",
    visual: "voice",
  },
  {
    label: "Revenue Intelligence",
    title: "Predictive Yield Management",
    description:
      "Adaptive pricing that reads seasonal patterns, local events, and real-time demand signals to optimize every site's revenue potential — automatically, every hour of every day.",
    visual: "yield",
  },
  {
    label: "Operations Intelligence",
    title: "Digital Dispatch",
    description:
      "Automated guest communications from pre-arrival to checkout. Digital check-in flows, maintenance alerts, and review capture — all without lifting a radio.",
    visual: "dispatch",
  },
];

function VoiceVisual() {
  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-center">
      <div className="absolute h-40 w-40 rounded-full bg-accent/5 blur-3xl" />
      {/* Chat bubbles */}
      <div className="relative space-y-3 w-full max-w-[260px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="rounded-2xl rounded-bl-sm border border-glass-border bg-glass p-4 backdrop-blur-xl"
        >
          <p className="text-sm text-cream-dim">
            &ldquo;Hi, do you have any lakeside spots open this weekend?&rdquo;
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="ml-auto max-w-[220px] rounded-2xl rounded-br-sm border border-accent/20 bg-accent/10 p-4 backdrop-blur-xl"
        >
          <p className="text-sm text-cream">
            &ldquo;Absolutely! I have two premium waterfront sites available.
            Shall I reserve one?&rdquo;
          </p>
        </motion.div>
        {/* Typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.4 }}
          className="flex gap-1 rounded-full border border-glass-border bg-glass px-4 py-3 w-fit backdrop-blur-xl"
        >
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                delay: dot * 0.2,
              }}
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function YieldVisual() {
  const bars = [35, 55, 45, 70, 85, 65, 90, 78, 95];
  return (
    <div className="relative flex h-full min-h-[280px] items-end justify-center gap-2 px-4 pb-8 pt-12">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-accent/5 to-transparent" />
      {bars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: `${height}%`, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2 + i * 0.08,
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="relative w-6 rounded-t-lg sm:w-8"
          style={{
            background:
              i === bars.length - 1
                ? "linear-gradient(to top, #c2a370, #c2a370dd)"
                : "linear-gradient(to top, rgba(255,255,255,0.05), rgba(255,255,255,0.1))",
            border:
              i === bars.length - 1
                ? "1px solid rgba(194,163,112,0.4)"
                : "1px solid rgba(255,255,255,0.08)",
          }}
        />
      ))}
      {/* Trend line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-[45%] left-8 right-8 h-[1px] origin-left bg-gradient-to-r from-transparent via-accent/40 to-accent"
      />
    </div>
  );
}

function DispatchVisual() {
  const items = [
    { label: "Pre-arrival Guide", status: "Sent", time: "2h ago" },
    { label: "Digital Check-in", status: "Completed", time: "45m ago" },
    { label: "Welcome Message", status: "Queued", time: "In 15m" },
  ];
  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-center">
      <div className="w-full max-w-[280px] space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
            className="flex items-center justify-between rounded-2xl border border-glass-border bg-glass p-4 backdrop-blur-xl"
          >
            <div>
              <p className="text-sm font-medium text-cream">{item.label}</p>
              <p className="text-xs text-cream-dim">{item.time}</p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                item.status === "Completed"
                  ? "bg-primary/30 text-green-300 border border-green-500/20"
                  : item.status === "Sent"
                    ? "bg-accent/10 text-accent border border-accent/20"
                    : "bg-white/5 text-cream-dim border border-glass-border"
              }`}
            >
              {item.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const visuals: Record<string, React.FC> = {
  voice: VoiceVisual,
  yield: YieldVisual,
  dispatch: DispatchVisual,
};

export default function Solution() {
  return (
    <SectionWrapper className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-medium tracking-widest text-accent uppercase"
          >
            The NorthGrid Platform
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-serif text-4xl tracking-tight text-cream sm:text-5xl"
          >
            Intelligence, Orchestrated
          </motion.h2>
        </div>

        <div className="space-y-24">
          {features.map((feature, i) => {
            const Visual = visuals[feature.visual];
            const reversed = i % 2 !== 0;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className={`grid items-center gap-12 md:grid-cols-2 ${
                  reversed ? "md:direction-rtl" : ""
                }`}
                style={{ direction: reversed ? "rtl" : "ltr" }}
              >
                <div style={{ direction: "ltr" }}>
                  <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
                    {feature.label}
                  </p>
                  <h3 className="mb-5 font-serif text-3xl text-cream sm:text-4xl">
                    {feature.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-cream-dim">
                    {feature.description}
                  </p>
                </div>
                <div
                  className="rounded-3xl border border-glass-border bg-glass p-6 backdrop-blur-xl"
                  style={{ direction: "ltr" }}
                >
                  <Visual />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
