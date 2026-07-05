import { Check } from 'lucide-react';

export default function HabitTracker({ habits, days, isChecked, onToggle }) {
  return (
    <section className="mx-auto max-w-[820px] rounded-xl border border-space/10 bg-white p-4">
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-coffee">
            Weekly habits
          </p>
          <h2 className="mt-0.5 text-base font-semibold text-space">Habit tracker</h2>
        </div>
        <p className="text-xs text-slate">Tap a square to log.</p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[620px]">
          <div className="grid grid-cols-[190px_120px_repeat(7,36px)] items-center gap-x-2 gap-y-1.5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate">
              Habit
            </div>
            <div aria-hidden="true" />
            {days.map((day) => (
              <div
                key={day.day}
                className="text-center text-[10px] font-semibold uppercase tracking-[0.1em] text-slate"
              >
                {day.short}
              </div>
            ))}

            {habits.map((habit) => (
              <Row
                key={habit.id}
                habit={habit}
                days={days}
                isChecked={isChecked}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ habit, days, isChecked, onToggle }) {
  return (
    <>
      <div className="px-1 py-2 text-xs font-semibold text-space">
        {habit.label}
      </div>
      <div aria-hidden="true" />
      {days.map((day) => {
        const checked = isChecked(day.day, habit.id);
        return (
          <button
            key={`${habit.id}-${day.day}`}
            type="button"
            onClick={() => onToggle(day.day, habit.id)}
            aria-label={`${habit.label} on ${day.day}`}
            aria-pressed={checked}
            className={`mx-auto flex h-7 w-7 items-center justify-center rounded-md border transition focus:outline-none focus:ring-2 focus:ring-caput/25 ${
              checked
                ? 'border-caput bg-caput text-white'
                : 'border-tan/60 bg-transparent text-transparent hover:bg-tan/20'
            }`}
          >
            <Check aria-hidden="true" className="h-3.5 w-3.5" />
          </button>
        );
      })}
    </>
  );
}
