type Lesson = {
  title: string;
  description: string;
};

type Props = {
  items: Lesson[];
};

export default function Lessons({
  items,
}: Props) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-zinc-200 bg-gradient-to-r from-zinc-50 to-white p-8 transition-all duration-300 hover:border-indigo-200 hover:shadow-lg"
        >
          <h3 className="text-xl font-bold text-zinc-900">
            {item.title}
          </h3>

          <p className="mt-4 leading-8 text-zinc-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}