import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  title: string;
  description: string;
};

export default function NextProject({
  href,
  title,
  description,
}: Props) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl border border-zinc-200 bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
        Next Project
      </p>

      <div className="mt-6 flex items-center justify-between gap-10">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900">
            {title}
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-zinc-600">
            {description}
          </p>
        </div>

        <ArrowRight className="h-8 w-8 text-zinc-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-indigo-600" />
      </div>
    </Link>
  );
}