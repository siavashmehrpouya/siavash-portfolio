type Props = {
  items: string[];
};

export default function TechStack({
  items,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition-all duration-300 hover:scale-105 hover:bg-indigo-100"
        >
          {item}
        </span>
      ))}
    </div>
  );
}