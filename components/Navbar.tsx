export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        <a
          href="/"
          className="text-lg font-black tracking-[0.25em] text-zinc-900"
        >
          SIAVASH
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
          <a href="#projects" className="transition hover:text-black">
            Projects
          </a>

          <a href="#about" className="transition hover:text-black">
            About
          </a>

          <a href="#contact" className="transition hover:text-black">
            Contact
          </a>
        </nav>

        <a
          href="/resume.pdf"
          download
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition hover:bg-black hover:text-white"
        >
          Resume
        </a>

      </div>
    </header>
  );
}