export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="text-sm font-black uppercase tracking-[0.22em] text-saffron-700">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-black tracking-normal text-river-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-gray-700">{text}</p>}
    </div>
  );
}
