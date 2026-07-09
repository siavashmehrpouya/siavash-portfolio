export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900"
        >
          SIAVASH
        </a>

        <a
          href="#"
          className="text-sm font-medium text-zinc-600 transition hover:text-black"
        >
          Resume →
        </a>
      </div>
    </header>
  );
}