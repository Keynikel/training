export default function WeekSelector({ weeks, selectedWeek, onSelectWeek }) {
  return (
    <section aria-label="Select pregnancy week" className="space-y-2">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-coffee">
            Choose a week
          </h2>
        </div>
        <p className="hidden text-sm text-slate sm:block">Second trimester weeks 13-27</p>
      </div>

      <div className="scrollbar-soft -mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
        {weeks.map((week) => {
          const active = week.week === selectedWeek;
          return (
            <button
              key={week.week}
              type="button"
              onClick={() => onSelectWeek(week.week)}
              className={`min-w-[88px] rounded-xl border px-3 py-2 text-left transition focus:outline-none focus:ring-2 focus:ring-caput/30 ${
                active
                  ? 'border-caput bg-space text-white'
                  : 'border-space/10 bg-white text-space hover:border-tan hover:bg-ivory'
              }`}
              aria-pressed={active}
            >
              <span className="block text-sm font-bold">Week {week.week}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
