type ProjectItemProps = {
  number: string;
  title: string;
  company: string;
  description: string;
  link: string;
};

export default function ProjectItem({
  number,
  title,
  company,
  description,
  link,
}: ProjectItemProps) {
  return (
    <article className="border-t border-zinc-200 py-14">
      <p className="text-sm text-zinc-400">{number}</p>

      <h3 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900">
        {title}
      </h3>

      <p className="mt-2 text-zinc-500">{company}</p>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600">
        {description}
      </p>

      <a
        href={link}
        className="mt-8 inline-block font-medium text-zinc-900 transition hover:translate-x-1"
      >
        Explore →
      </a>
    </article>
  );
}