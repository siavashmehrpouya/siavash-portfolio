type Role = {
  title: string;
  description: string;
};

type Props = {
  items: Role[];
};

export default function RoleCards({ items }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
        >
          <h3 className="text-xl font-bold text-zinc-900">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-zinc-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}