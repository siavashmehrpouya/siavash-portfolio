type Props = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
        {title}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-zinc-900">
        {value}
      </h3>
    </div>
  );
}