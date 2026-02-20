"use client";

import { motion } from "framer-motion";

const words = [
  "Elevate",
  "the",
  "Guest",
  "Experience",
  "through",
  "Intelligence.",
];

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6 + i * 0.03,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  let globalIndex = 0;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Moody nature background layers */}
      <div className="absolute inset-0 bg-base" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-base/80 via-base/60 to-base" />
      <div className="absolute inset-0 bg-gradient-to-r from-base/50 via-transparent to-base/50" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[160px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[800px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-5 py-2 backdrop-blur-xl"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm tracking-widest text-cream-dim uppercase">
            Now Accepting Select Partners
          </span>
        </motion.div>

        {/* Staggered headline — animate per-character, wrap per-word */}
        <h1
          className="font-serif text-5xl leading-tight tracking-tight text-cream sm:text-6xl md:text-7xl"
          aria-label={words.join(" ")}
        >
          {words.map((word, wi) => {
            const chars = word.split("").map((char) => {
              const idx = globalIndex++;
              return (
                <motion.span
                  key={idx}
                  custom={idx}
                  variants={charVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            });
            globalIndex++;
            return (
              <span key={wi} className="inline-block whitespace-nowrap">
                {chars}
                {wi < words.length - 1 && (
                  <span className="inline-block">&nbsp;</span>
                )}
              </span>
            );
          })}
        </h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream-dim sm:text-xl"
        >
          Seamlessly orchestrate reservations and revenue with the first
          autonomous concierge for outdoor hospitality.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="mt-12"
        >
          <a
            href="#request"
            className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-base-light transition-all duration-300 hover:bg-accent-dark hover:shadow-[0_0_40px_rgba(194,163,112,0.3)]"
          >
            Request Invitation
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — positioned relative to the section, not the text block */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-cream-dim/50 uppercase">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-cream-dim/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
