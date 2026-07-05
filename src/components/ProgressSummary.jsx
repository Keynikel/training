import { Award, Flame, ListChecks, Target } from 'lucide-react';

export default function ProgressSummary({
  totalPercentage,
  totalCompleted,
  totalActivities,
  mostConsistentHabit,
  currentStreak,
  weeklyStats
}) {
  const metrics = [
    {
      label: 'Total progress',
      value: `${totalPercentage}%`,
      helper: `${totalCompleted} of ${totalActivities} activities`,
      icon: Target
    },
    {
      label: 'Completed activities',
      value: totalCompleted,
      helper: 'Across weeks 13-27',
      icon: ListChecks
    },
    {
      label: 'Most consistent habit',
      value: mostConsistentHabit,
      helper: 'Based on the habit grid',
      icon: Award
    },
    {
      label: 'Current streak',
      value: `${currentStreak} day${currentStreak === 1 ? '' : 's'}`,
      helper: 'Consecutive active days',
      icon: Flame
    }
  ];

  return (
    <section className="space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee">
          Progress map
        </p>
        <h2 className="mt-1 text-xl font-semibold text-space">Plan summary</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="rounded-2xl border border-space/10 bg-white p-5">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-tan/20 text-coffee">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-slate">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold text-space">{metric.value}</p>
              <p className="mt-1 text-sm text-slate">{metric.helper}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {weeklyStats.map((week) => (
          <article
            key={week.week}
            className="rounded-xl border border-space/10 bg-white p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-space">Week {week.week}</h3>
              <span className="text-sm font-semibold text-caput">{week.percentage}%</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-tan/25">
              <div
                className="h-full rounded-full bg-caput transition-all duration-500"
                style={{ width: `${week.percentage}%` }}
                aria-hidden="true"
              />
            </div>
            <p className="mt-3 text-sm text-slate">
              {week.completed} of {week.total} complete
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
