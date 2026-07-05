import { useMemo, useRef } from 'react';
import ActivityCard from './components/ActivityCard.jsx';
import HabitTracker from './components/HabitTracker.jsx';
import Header from './components/Header.jsx';
import SectionPanel from './components/SectionPanel.jsx';
import WeekProgressStrip from './components/WeekProgressStrip.jsx';
import { activityKey, habitKey, habits, weeks } from './data/trainingData.js';
import { useLocalStorage } from './hooks/useLocalStorage.js';

const STORAGE_KEYS = {
  completed: 'second-trimester-completed',
  habits: 'second-trimester-habits',
  selectedWeek: 'second-trimester-selected-week',
  selectedDay: 'second-trimester-selected-day'
};

export default function App() {
  const [selectedWeek, setSelectedWeek] = useLocalStorage(STORAGE_KEYS.selectedWeek, 13);
  const [selectedDay, setSelectedDay] = useLocalStorage(STORAGE_KEYS.selectedDay, 'Monday');
  const [completedActivities, setCompletedActivities] = useLocalStorage(
    STORAGE_KEYS.completed,
    {}
  );
  const [habitChecks, setHabitChecks] = useLocalStorage(STORAGE_KEYS.habits, {});

  const todayRef = useRef(null);

  const selectedWeekData = useMemo(
    () => weeks.find((week) => week.week === Number(selectedWeek)) ?? weeks[0],
    [selectedWeek]
  );

  const selectedDayData = useMemo(
    () => selectedWeekData.days.find((day) => day.day === selectedDay) ?? selectedWeekData.days[0],
    [selectedDay, selectedWeekData]
  );

  function navigateTo(target) {
    const map = {
      today: todayRef
    };
    map[target]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function toggleActivity(activityId) {
    const key = activityKey(selectedWeekData.week, selectedDayData.day, activityId);
    setCompletedActivities((current) => ({
      ...current,
      [key]: !current[key]
    }));
  }

  function toggleHabit(day, habitId) {
    const key = habitKey(selectedWeekData.week, day, habitId);
    setHabitChecks((current) => ({
      ...current,
      [key]: !current[key]
    }));
  }

  function resetProgress() {
    const confirmed = window.confirm('Clear all saved progress, selected week, and selected day?');

    if (!confirmed) {
      return;
    }

    Object.values(STORAGE_KEYS).forEach((key) => window.localStorage.removeItem(key));
    setSelectedWeek(13);
    setSelectedDay('Monday');
    setCompletedActivities({});
    setHabitChecks({});
  }

  return (
    <div className="min-h-screen bg-linen text-space">
      <Header onNavigate={navigateTo} onReset={resetProgress} />

      <main className="mx-auto max-w-7xl space-y-7 px-5 py-7 sm:px-8 lg:space-y-9">
        <div ref={todayRef} className="scroll-mt-6" />

        <section className="border-b border-space/10 pb-7">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coffee">
              {selectedWeekData.focus}
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-space sm:text-5xl">
              Week {selectedWeekData.week}, {selectedDayData.day}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate sm:text-base">
              {selectedWeekData.note} Today leans into a {selectedDayData.theme} rhythm with
              strength, walking, posture, and breath all kept gentle and organized.
            </p>
          </div>
        </section>

        <div className="sticky top-0 z-20 -mx-5 bg-linen/95 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8">
          <WeekProgressStrip
            weeks={weeks}
            selectedWeek={Number(selectedWeek)}
            days={selectedWeekData.days}
            selectedDay={selectedDayData.day}
            onSelectWeek={setSelectedWeek}
            onSelectDay={setSelectedDay}
          />
        </div>

        <HabitTracker
          habits={habits.slice(0, 3)}
          days={selectedWeekData.days}
          isChecked={(day, habitId) => Boolean(habitChecks[habitKey(selectedWeekData.week, day, habitId)])}
          onToggle={toggleHabit}
        />

        <SectionPanel
          eyebrow="Daily plan"
          title={`${selectedDayData.day}'s activities`}
          description="Complete what fits your day and open details when you want the longer note."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {selectedDayData.activities.filter((activity) => activity.hasVideo).map((activity) => {
              const key = activityKey(selectedWeekData.week, selectedDayData.day, activity.id);
              return (
                <ActivityCard
                  key={key}
                  activity={activity}
                  completed={Boolean(completedActivities[key])}
                  onToggleComplete={() => toggleActivity(activity.id)}
                />
              );
            })}
          </div>
        </SectionPanel>
      </main>
    </div>
  );
}
