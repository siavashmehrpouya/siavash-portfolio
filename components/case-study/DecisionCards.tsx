type Decision = {
  title: string;
  description: string;
};

type Props = {
  items: Decision[];
};

export default function DecisionCards({
  items,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="group rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-xl">
            💡
          </div>

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