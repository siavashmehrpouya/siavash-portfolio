export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <p className="text-sm text-zinc-500">
          © 2026 Siavash Mehrpouya
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="mailto:siavash.mehrpouya@gmail.com"
            className="text-zinc-500 transition hover:text-black"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/siavash-mehrpouya-pmp-m-sc-384b14a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}