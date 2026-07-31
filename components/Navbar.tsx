"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/music", label: "Music" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <motion.nav
        animate={{
          maxWidth: scrolled ? "78rem" : "80rem",
          y: scrolled ? -2 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className={`mx-auto flex h-16 items-center justify-between rounded-2xl border px-6 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-zinc-200/80 bg-white/75 shadow-lg shadow-black/5"
            : "border-transparent bg-white/60"
        }`}
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 transition-opacity hover:opacity-80"
        >
          Siavash Mehrpouya
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {link.label}

                {active && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-zinc-900"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <a
          href="/resume.pdf"
          download
          className="rounded-full border border-zinc-300 bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:shadow-md"
        >
          Resume
        </a>
      </motion.nav>
    </header>
  );
}