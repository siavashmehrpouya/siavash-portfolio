type TimelineItem = {
  title: string;
  description: string;
};

type Props = {
  items: TimelineItem[];
};

export default function Timeline({
  items,
}: Props) {
  return (
    <div className="relative border-l border-zinc-200 pl-8">
      {items.map((item, index) => (
        <div
          key={item.title}
          className={index !== items.length - 1 ? "mb-12" : ""}
        >
          <div className="absolute -left-[9px] h-4 w-4 rounded-full border-4 border-white bg-indigo-600 shadow" />

          <h3 className="text-xl font-semibold text-zinc-900">
            {item.title}
          </h3>

          <p className="mt-3 leading-7 text-zinc-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}