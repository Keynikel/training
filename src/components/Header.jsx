import { CalendarDays, RotateCcw } from 'lucide-react';

const navItems = [
  { label: 'Today', icon: CalendarDays, target: 'today' }
];

export default function Header({ onNavigate, onReset }) {
  return (
    <header className="border-b border-space/10 bg-ivory/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-coffee">
            Weeks 13-27
          </p>
          <h1 className="mt-2 font-serif text-2xl text-space sm:text-3xl">
            Second Trimester Training
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate">
            Daily movement tracker for pregnancy weeks 13-27
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <nav className="flex rounded-2xl border border-space/10 bg-white">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => onNavigate(item.target)}
                  className="inline-flex h-10 items-center gap-2 px-3 text-sm font-semibold text-space transition first:rounded-l-2xl last:rounded-r-2xl hover:bg-linen focus:outline-none focus:ring-2 focus:ring-caput/30 sm:px-4"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={onReset}
            className="inline-flex h-10 items-center gap-2 rounded-2xl border border-caput/15 bg-transparent px-4 text-sm font-semibold text-caput transition hover:bg-caput/5 focus:outline-none focus:ring-2 focus:ring-caput/25"
          >
            <RotateCcw aria-hidden="true" className="h-4 w-4" />
            Reset
          </button>
        </div>
      </div>
    </header>
  );
}
