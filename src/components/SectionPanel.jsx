export default function SectionPanel({ eyebrow, title, description, children }) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-1 text-xl font-semibold text-space">{title}</h2>
        </div>
        {description && <p className="max-w-2xl text-sm leading-6 text-slate">{description}</p>}
      </div>
      {children}
    </section>
  );
}
