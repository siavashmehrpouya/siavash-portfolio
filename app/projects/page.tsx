type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-32">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Case Study
      </p>

      <h1 className="mt-6 text-6xl font-bold tracking-tight">
        {slug}
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
        This page will contain the full case study for this project.
      </p>
    </main>
  );
}