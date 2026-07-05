import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WeekProgressStrip({
  weeks,
  selectedWeek,
  days,
  selectedDay,
  onSelectWeek,
  onSelectDay
}) {
  const currentIndex = weeks.findIndex((week) => week.week === selectedWeek);
  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < weeks.length - 1;

  function moveWeek(direction) {
    const next = weeks[currentIndex + direction];
    if (next) {
      onSelectWeek(next.week);
    }
  }

  return (
    <section className="reference-strip" aria-label="Week and day selector">
      <div className="reference-selector-top">
        <div>
          <p>Training week</p>
          <h2>Week selector</h2>
        </div>
        <span>Choose a week and day.</span>
      </div>

      <div className="reference-week">
        <div className="reference-week-header">
          <button
            type="button"
            onClick={() => moveWeek(-1)}
            disabled={!canGoBack}
            className="reference-arrow"
            aria-label="Previous week"
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <h3>Week {selectedWeek}</h3>

          <button
            type="button"
            onClick={() => moveWeek(1)}
            disabled={!canGoForward}
            className="reference-arrow"
            aria-label="Next week"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>

        <div className="reference-days" aria-label="Select day">
          {days.map((day, index) => {
            const active = day.day === selectedDay;

            return (
              <button
                key={day.day}
                type="button"
                onClick={() => onSelectDay(day.day)}
                className={`reference-day ${active ? 'is-active' : ''}`}
                aria-label={day.day}
                aria-pressed={active}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
