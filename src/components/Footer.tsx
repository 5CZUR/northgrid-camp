"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact", href: "#request" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-glass-border px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="font-serif text-sm font-bold text-accent">
                N
              </span>
            </div>
            <span className="font-serif text-lg text-cream">
              NorthGrid Camp
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-cream-dim transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-glass-border" />

        {/* Privacy compliance text */}
        <div className="space-y-4 text-center">
          <p className="text-xs leading-relaxed text-cream-dim/40">
            No mobile information will be shared with third parties for marketing
            purposes. All other categories exclude text messaging originator
            opt-in data; this information will not be shared with any third
            parties.
          </p>
          <p className="text-xs text-cream-dim/30">
            &copy; {new Date().getFullYear()} NorthGrid Camp. All rights
            reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
