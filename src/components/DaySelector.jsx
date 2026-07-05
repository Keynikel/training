export default function DaySelector({ days, selectedDay, onSelectDay }) {
  return (
    <section aria-label="Select day" className="rounded-2xl border border-space/10 bg-white p-2">
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const active = day.day === selectedDay;
          return (
            <button
              key={day.day}
              type="button"
              onClick={() => onSelectDay(day.day)}
              className={`rounded-xl px-2 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-caput/30 ${
                active
                  ? 'bg-caput text-white'
                  : 'bg-transparent text-space hover:bg-linen'
              }`}
              aria-pressed={active}
            >
              <span className="hidden sm:inline">{day.day}</span>
              <span className="sm:hidden">{day.short}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
