export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div>
          <p className="text-lg font-semibold tracking-tight text-zinc-900">
            Siavash Mehrpouya
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Technical Project Manager • Software Delivery • Vancouver, Canada
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:siavash.mehrpouya@gmail.com"
            className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/siavash-mehrpouya-pmp-m-sc-384b14a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            download
            className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="border-t border-zinc-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs text-zinc-400">
          <p>© 2026 Siavash Mehrpouya. All rights reserved.</p>

          <p>Designed & Built with Next.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}