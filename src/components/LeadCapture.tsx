"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Shield } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function LeadCapture() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  }

  return (
    <SectionWrapper id="request" className="px-6 py-32">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative mx-auto max-w-xl">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2"
          >
            <Shield className="h-4 w-4 text-accent" strokeWidth={1.5} />
            <span className="text-sm text-accent">Limited Availability</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-serif text-4xl tracking-tight text-cream sm:text-5xl"
          >
            Request Your Invitation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 text-cream-dim"
          >
            We partner with a select number of properties each quarter.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="rounded-3xl border border-glass-border bg-glass p-8 backdrop-blur-xl sm:p-10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                <svg
                  className="h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-cream">
                Application Received
              </h3>
              <p className="mt-3 text-cream-dim">
                Our team will review your property and reach out within 48
                hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-cream-dim"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Everett"
                  className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-cream placeholder:text-cream-dim/40 backdrop-blur-sm outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="resort"
                  className="mb-2 block text-sm font-medium text-cream-dim"
                >
                  Resort / LLC Name
                </label>
                <input
                  id="resort"
                  name="resort"
                  type="text"
                  required
                  placeholder="Pinecrest Glamping Co."
                  className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-cream placeholder:text-cream-dim/40 backdrop-blur-sm outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-cream-dim"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(555) 234-5678"
                  className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-cream placeholder:text-cream-dim/40 backdrop-blur-sm outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                />
              </div>

              {/* Compliance checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  id="consent"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded border border-glass-border bg-white/5 checked:border-accent checked:bg-accent transition-colors"
                  required
                />
                <label
                  htmlFor="consent"
                  className="text-xs leading-relaxed text-cream-dim/70 cursor-pointer"
                >
                  By checking this box, I agree to receive automated messages
                  from NorthGrid Limited for booking alerts and support. Message and
                  data rates may apply. Reply STOP to opt-out.
                </label>
              </div>

              <button
                type="submit"
                disabled={!agreed}
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 text-base font-medium text-base-light transition-all duration-300 hover:bg-accent-dark hover:shadow-[0_0_40px_rgba(194,163,112,0.25)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                Begin Assessment
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
