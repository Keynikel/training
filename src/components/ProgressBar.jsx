export default function ProgressBar({ percentage, completed, total, week }) {
  return (
    <section className="rounded-2xl border border-space/10 bg-white p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee">
            Week {week} progress
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-space">{percentage}% complete</h2>
          <p className="mt-1 text-sm text-slate">
            {completed} of {total} activities completed this week
          </p>
        </div>

        <a
          href="#progress"
          className="inline-flex h-10 items-center justify-center rounded-xl border border-space/10 px-4 text-sm font-semibold text-space transition hover:bg-linen focus:outline-none focus:ring-2 focus:ring-caput/25"
        >
          Progress map
        </a>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-tan/25">
        <div
          className="h-full rounded-full bg-caput transition-all duration-500"
          style={{ width: `${percentage}%` }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
