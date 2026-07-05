import { CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import VideoPlayer from './VideoPlayer.jsx';

export default function ActivityCard({
  activity,
  completed,
  onToggleComplete
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex flex-col rounded-2xl border border-space/10 bg-white transition hover:border-tan">
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coffee">
              {activity.category}
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-tight text-space">
              {activity.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onToggleComplete}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition focus:outline-none focus:ring-2 focus:ring-caput/25 ${
              completed
                ? 'border-caput bg-caput text-white'
                : 'border-space/10 bg-transparent text-space hover:bg-linen'
            }`}
            aria-label={completed ? 'Mark activity incomplete' : 'Mark activity complete'}
            aria-pressed={completed}
          >
            <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        {activity.hasVideo && <VideoPlayer videoUrl={activity.videoUrl} />}

        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="mt-3 flex items-center justify-between rounded-xl bg-transparent px-1 py-2 text-left text-sm font-semibold text-space transition hover:text-caput focus:outline-none focus:ring-2 focus:ring-caput/25"
          aria-expanded={expanded}
        >
          Activity details
          <ChevronDown
            aria-hidden="true"
            className={`h-4 w-4 transition ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        {expanded && (
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate">
            <p>{activity.description}</p>
            <div className="rounded-xl border border-caput/10 bg-caput/5 p-4 text-caput">
              <span className="font-semibold">Safety note: </span>
              {activity.safetyNote}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
