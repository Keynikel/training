export const weekNumbers = Array.from({ length: 15 }, (_, index) => index + 13);

export const days = [
  { label: 'Monday', short: 'Mon' },
  { label: 'Tuesday', short: 'Tue' },
  { label: 'Wednesday', short: 'Wed' },
  { label: 'Thursday', short: 'Thu' },
  { label: 'Friday', short: 'Fri' },
  { label: 'Saturday', short: 'Sat' },
  { label: 'Sunday', short: 'Sun' }
];

export const habits = [
  { id: 'warmup', label: 'Morning warm-up completed' },
  { id: 'workout', label: 'Main workout completed' },
  { id: 'walk', label: '8k steps or gentle walk completed' },
  { id: 'posture', label: 'Back / posture work completed' },
  { id: 'breathing', label: 'Pelvic floor or breathing practice completed' }
];

const phases = [
  {
    range: [13, 15],
    focus: 'Adaptation and gentle strength',
    tone: 'Light, steady movement with extra room for recovery.',
    strength: ['Supported squat pattern', 'Light band row', 'Glute bridge flow'],
    mobility: ['Neck, rib, and hip circles', 'Cat-cow and side reach', 'Ankle and hip opener'],
    posture: ['Wall angels and band pull-aparts', 'Upper back reset', 'Shoulder blade control'],
    cardio: ['Conversational park walk', 'Gentle incline stroll', 'Easy neighborhood loop'],
    breathing: ['360 breathing primer', 'Pelvic floor awareness', 'Side-lying breath practice'],
    intensity: 'Low'
  },
  {
    range: [16, 19],
    focus: 'Stable routine for glutes, back, and posture',
    tone: 'Controlled strength days with balanced posture work.',
    strength: ['Tempo lower-body strength', 'Full-body strength circuit', 'Glutes and upper-back session'],
    mobility: ['Hip flexor and thoracic mobility', 'Standing mobility ladder', 'Side-body opener'],
    posture: ['Band row and wall slide routine', 'Back-body activation', 'Desk posture reset'],
    cardio: ['Steady gentle cardio walk', 'Moderate outdoor walk', 'Low-impact step circuit'],
    breathing: ['Exhale strength breathing', 'Pelvic floor coordination', 'Breath-led cool down'],
    intensity: 'Moderate'
  },
  {
    range: [20, 23],
    focus: 'Moderate maintenance with mobility support',
    tone: 'Consistent movement, lower fatigue, and more joint comfort.',
    strength: ['Maintenance strength circuit', 'Supported hinge and row', 'Core-safe strength flow'],
    mobility: ['Hip, calf, and spine mobility', 'Longer warm mobility series', 'Comfort mobility reset'],
    posture: ['Upper-back endurance set', 'Posture and rib mobility', 'Band-supported back routine'],
    cardio: ['Gentle cardio walk', 'Split walk with rest pause', 'Conversation-paced cardio'],
    breathing: ['Box breathing variation', 'Pelvic floor release and lift', 'Downshift breathing practice'],
    intensity: 'Moderate'
  },
  {
    range: [24, 27],
    focus: 'Comfort-focused strength, posture, and breathing',
    tone: 'Soft strength, roomy rest, and calm conditioning.',
    strength: ['Comfort strength circuit', 'Supported glute and back routine', 'Chair-assisted strength flow'],
    mobility: ['Pelvis and rib comfort mobility', 'Slow side-body mobility', 'Gentle whole-body reset'],
    posture: ['Back and posture comfort set', 'Shoulder and rib reset', 'Standing posture routine'],
    cardio: ['Gentle walk with breaks', 'Easy indoor walking intervals', 'Relaxed steady walk'],
    breathing: ['Breathing and pelvic floor release', 'Long exhale practice', 'Restorative breath series'],
    intensity: 'Low'
  }
];

const dayThemes = {
  Monday: 'fresh start',
  Tuesday: 'posture support',
  Wednesday: 'steady middle',
  Thursday: 'glute and back focus',
  Friday: 'lighter finish',
  Saturday: 'longer walk',
  Sunday: 'restore and reset'
};

const safetyNotes = {
  mobility: 'Keep ranges comfortable and skip any shape that creates pulling, pain, or dizziness.',
  strength: 'Use a conversational effort and choose support or lighter resistance whenever form changes.',
  cardio: 'Stay cool, hydrate, and keep the pace easy enough to speak in full sentences.',
  posture: 'Move slowly and avoid forcing shoulder or rib positions.',
  breathing: 'Practice gently and stop if breath holding, pressure, or discomfort appears.'
};

const videoUrlsByTitle = {
  '10 Minute Energy Boosting Prenatal Workout': 'https://www.youtube.com/watch?v=goTB6_uVL58',
  '10 Minute Prenatal Pelvic Floor Workout': 'https://www.youtube.com/watch?v=_NuvqZG2bDI',
  '10 Minute Prenatal Stretch for Neck, Back, and Shoulders':
    'https://www.youtube.com/watch?v=GDs6Au4uonM',
  '10 Minute Second Trimester Deep Core Workout':
    'https://www.youtube.com/watch?v=nw5J6uA9QxQ',
  '10 Minute Second Trimester Pilates Workout':
    'https://www.youtube.com/watch?v=VUdAVMRmnsY',
  '10 Minute Second Trimester Toning Workout':
    'https://www.youtube.com/watch?v=S0ieTQsBTyQ',
  '10-Minute Hip Mobility for Pregnancy': 'https://www.youtube.com/watch?v=sNNhIKEou0o',
  '12 Minute Prenatal Back and Core Workout': 'https://www.youtube.com/watch?v=L48RhBotiwI',
  '15 Minute Prenatal Back and Arms Workout': 'https://www.youtube.com/watch?v=aZttzMCn7XI',
  '15 Minute Second Trimester Prenatal Upper Body Strength':
    'https://www.youtube.com/watch?v=tHd6D3p8kSU',
  '20 Minute 2nd Trimester Prenatal Cardio Workout':
    'https://www.youtube.com/watch?v=0BDbn9cFxt0',
  '20 Minute Pregnancy Strength Workout With Dumbbells':
    'https://www.youtube.com/watch?v=qkBc37aBD38',
  '20 Minute Prenatal Lower Body Strength Workout With Dumbbells':
    'https://www.youtube.com/watch?v=5lXHNrWy920',
  '20 Minute Second Trimester Pregnancy Yoga':
    'https://www.youtube.com/watch?v=sT9XchHtQMM',
  '20 Minute Second Trimester Prenatal HIIT | No Jumping':
    'https://www.youtube.com/watch?v=dUoPxu6mnM0',
  '20-Min Pregnancy Cardio Workout | Indoor Walking':
    'https://www.youtube.com/watch?v=CKNC2MQlbNc',
  '20-Min Pregnancy Yoga Flow For All Trimesters':
    'https://www.youtube.com/watch?v=feHp2b29G5U',
  '20-Min Prenatal Pilates For a FIT Pregnancy':
    'https://www.youtube.com/watch?v=xFqAtHFAces',
  '20-minute prenatal yoga for the hips / lower back':
    'https://www.youtube.com/watch?v=UYDsl9gXguE',
  '25 Minute 2nd Trimester Full Body Dumbbell Strength':
    'https://www.youtube.com/watch?v=5nck_40G7LY',
  '25-Minute Prenatal Arm Workout: Back and Biceps':
    'https://www.youtube.com/watch?v=3_7rS-_gD6k',
  '25-Minute Prenatal Barre Workout': 'https://www.youtube.com/watch?v=updTPcpg498',
  '30-Minute Full Body Pregnancy Workout | Safe for Sciatica and SPD':
    'https://www.youtube.com/watch?v=vcoxXlTCXLo',
  'Best Pregnancy Stretches | 10-Min Full-Body Daily Stretch':
    'https://www.youtube.com/watch?v=BpkYg2EclBA',
  'PREGNANCY PILATES WORKOUT for 2ND Trimester | 25 Min':
    'https://www.youtube.com/watch?v=N4OwU0O7uDI',
  'Pregnancy Exercises Second Trimester With Dumbbells | 15 Min':
    'https://www.youtube.com/watch?v=ppbZS8WSqLI',
  'Relieve Pregnancy Back Pain Fast | 15-Min Routine':
    'https://www.youtube.com/watch?v=iOH9Av7YYnY',
  'Standing Pilates for Pregnancy | 10 Minute':
    'https://www.youtube.com/watch?v=6OvT4Xa5q-M',
  'Week 13 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=SA-7_08C5aY',
  'Week 14 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=yBukRFYyJu8',
  'Week 15 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=PgZ3aTW2oYU',
  'Week 16 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=pS5BgxCYYFQ',
  'Week 17 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=i9ziSfjSLLM',
  'Week 18 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=kY4AUtauFJ0',
  'Week 19 of Pregnancy | 30-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=8l-2H29R_O4',
  'Week 20 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=Z_lIloyjSy8',
  'Week 21 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=qHoV9Am4spI',
  'Week 22 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=8fZTYOj_N5k',
  'Week 23 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=es8bQvhqm70',
  'Week 24 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=J9rZPnsfmwc',
  'Week 25 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=rdtqKP-qRlw',
  'Week 26 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=HiLa-wihFeU',
  'Week 27 of Pregnancy | 20-min Full Body Prenatal Workout':
    'https://www.youtube.com/watch?v=f4RdsgqENu0'
};

const recurringMorningVideos = {
  Monday: '10 Minute Energy Boosting Prenatal Workout',
  Tuesday: '10 Minute Prenatal Pelvic Floor Workout',
  Wednesday: '10-Minute Hip Mobility for Pregnancy',
  Friday: '10 Minute Prenatal Stretch for Neck, Back, and Shoulders',
  Sunday: 'Best Pregnancy Stretches | 10-Min Full-Body Daily Stretch'
};

function getMorningVideoTitle(week, day) {
  if (day === 'Thursday') {
    return [15, 17, 19, 21, 23, 25].includes(week)
      ? '10 Minute Second Trimester Toning Workout'
      : 'Standing Pilates for Pregnancy | 10 Minute';
  }

  if (day === 'Saturday') {
    return [14, 16, 18, 20, 22, 24, 26].includes(week)
      ? '10 Minute Second Trimester Pilates Workout'
      : '10 Minute Second Trimester Deep Core Workout';
  }

  return recurringMorningVideos[day];
}

function getMainVideoTitle(week, day) {
  if (day === 'Monday') {
    const duration = week === 19 ? '30-min' : '20-min';
    return `Week ${week} of Pregnancy | ${duration} Full Body Prenatal Workout`;
  }

  if (day === 'Tuesday') {
    return week % 2 === 0
      ? '12 Minute Prenatal Back and Core Workout'
      : 'Relieve Pregnancy Back Pain Fast | 15-Min Routine';
  }

  if (day === 'Wednesday') {
    if (week === 13) {
      return 'Pregnancy Exercises Second Trimester With Dumbbells | 15 Min';
    }
    if ([14, 17, 21, 24].includes(week)) {
      return '20 Minute Prenatal Lower Body Strength Workout With Dumbbells';
    }
    if ([15, 19, 27].includes(week)) {
      return '20 Minute Pregnancy Strength Workout With Dumbbells';
    }
    if ([20, 23, 26].includes(week)) {
      return '30-Minute Full Body Pregnancy Workout | Safe for Sciatica and SPD';
    }
    return '25 Minute 2nd Trimester Full Body Dumbbell Strength';
  }

  if (day === 'Thursday') {
    if ([15, 18, 21, 24].includes(week)) {
      return '20 Minute Second Trimester Prenatal HIIT | No Jumping';
    }
    if ([14, 17, 20, 23, 26].includes(week)) {
      return '20 Minute 2nd Trimester Prenatal Cardio Workout';
    }
    return '20-Min Pregnancy Cardio Workout | Indoor Walking';
  }

  if (day === 'Friday') {
    if ([17, 19, 21, 23, 25, 27].includes(week)) {
      return '25-Minute Prenatal Arm Workout: Back and Biceps';
    }
    if ([14, 16, 18, 20, 22, 24, 26].includes(week)) {
      return '15 Minute Second Trimester Prenatal Upper Body Strength';
    }
    return '15 Minute Prenatal Back and Arms Workout';
  }

  if (day === 'Saturday') {
    if ([14, 16, 18, 20, 22, 24, 26].includes(week)) {
      return '25-Minute Prenatal Barre Workout';
    }
    if ([15, 19, 23].includes(week)) {
      return 'PREGNANCY PILATES WORKOUT for 2ND Trimester | 25 Min';
    }
    return '20-Min Prenatal Pilates For a FIT Pregnancy';
  }

  if (day === 'Sunday') {
    if ([14, 17, 20, 22, 25, 27].includes(week)) {
      return '20-minute prenatal yoga for the hips / lower back';
    }
    if ([15, 19, 23].includes(week)) {
      return '20-Min Pregnancy Yoga Flow For All Trimesters';
    }
    return '20 Minute Second Trimester Pregnancy Yoga';
  }

  return '';
}

function getDurationFromTitle(title, fallback) {
  const match = title.match(/(\d+)[-\s]?(?:Minute|min)/i);
  return match ? `${match[1]} min` : fallback;
}

function getScheduledVideo(week, day, slot, fallbackDuration) {
  const title =
    slot === 'morning' ? getMorningVideoTitle(week, day) : getMainVideoTitle(week, day);

  return {
    title,
    duration: getDurationFromTitle(title, fallbackDuration),
    videoUrl: videoUrlsByTitle[title] ?? ''
  };
}

function getPhase(week) {
  return phases.find((phase) => week >= phase.range[0] && week <= phase.range[1]);
}

function pick(items, week, dayIndex) {
  return items[(week + dayIndex) % items.length];
}

function buildActivities(week, day, dayIndex) {
  const phase = getPhase(week);
  const difficultyOffset = week >= 24 ? -1 : week >= 20 ? 0 : week >= 16 ? 1 : 0;
  const dayEase = day === 'Sunday' || day === 'Friday' ? -1 : day === 'Thursday' ? 1 : 0;
  const morningVideo = getScheduledVideo(
    week,
    day,
    'morning',
    week >= 24 ? '8-10 min' : '8-12 min'
  );
  const mainVideo = getScheduledVideo(
    week,
    day,
    'main',
    week >= 24 ? '18-22 min' : week >= 20 ? '20-24 min' : '20-25 min'
  );

  return [
    {
      id: 'mobility',
      category: 'Morning mobility',
      title: morningVideo.title,
      duration: morningVideo.duration,
      intensity: 'Low',
      tags: ['Mobility', 'Hips', 'Ribs'],
      difficulty: Math.max(1, Math.min(5, 2 + dayEase)),
      videoUrl: morningVideo.videoUrl,
      hasVideo: true,
      description:
        'A short morning sequence for joints, breath, and gentle circulation. Move with soft control and let the warm-up set the tone for the rest of the day.',
      safetyNote: safetyNotes.mobility
    },
    {
      id: 'strength',
      category: 'Main workout',
      title: mainVideo.title,
      duration: mainVideo.duration,
      intensity: phase.intensity,
      tags: week >= 16 ? ['Glutes', 'Back', 'Strength'] : ['Strength', 'Mobility', 'Control'],
      difficulty: Math.max(1, Math.min(5, 3 + difficultyOffset + dayEase)),
      videoUrl: mainVideo.videoUrl,
      hasVideo: true,
      description:
        'A controlled strength session built around stable positions, smooth tempo, and plenty of space to rest. Choose the version that lets you keep breathing steadily.',
      safetyNote: safetyNotes.strength
    },
    {
      id: 'walk',
      category: 'Walking / cardio',
      title: `${pick(phase.cardio, week, dayIndex)}`,
      duration: day === 'Saturday' ? '25-35 min' : '20-30 min',
      intensity: 'Low',
      tags: ['Cardio', 'Energy', 'Recovery'],
      difficulty: Math.max(1, Math.min(5, 2 + (day === 'Saturday' ? 1 : 0))),
      videoUrl: '',
      hasVideo: false,
      description:
        'A low-impact cardio block designed to support consistency. Break it into smaller walks if that feels better on the day.',
      safetyNote: safetyNotes.cardio
    },
    {
      id: 'posture',
      category: 'Back and posture',
      title: `${pick(phase.posture, week, dayIndex)}`,
      duration: week >= 20 ? '10-15 min' : '8-12 min',
      intensity: 'Low',
      tags: ['Back', 'Posture', 'Shoulders'],
      difficulty: Math.max(1, Math.min(5, 2 + difficultyOffset)),
      videoUrl: '',
      hasVideo: false,
      description:
        'A focused support routine for the upper back, shoulder blades, and rib position. Keep the work tidy, small, and repeatable.',
      safetyNote: safetyNotes.posture
    },
    {
      id: 'breathing',
      category: 'Breathing / pelvic floor',
      title: `${pick(phase.breathing, week, dayIndex)}`,
      duration: '5-8 min',
      intensity: 'Low',
      tags: ['Breathing', 'Pelvic floor', 'Calm'],
      difficulty: 1,
      videoUrl: '',
      hasVideo: false,
      description:
        'A calm closing practice that pairs breath with gentle pelvic floor awareness. Think coordination and ease rather than effort.',
      safetyNote: safetyNotes.breathing
    }
  ];
}

export const weeks = weekNumbers.map((week) => {
  const phase = getPhase(week);

  return {
    week,
    focus: phase.focus,
    note: phase.tone,
    days: days.map((day, dayIndex) => ({
      day: day.label,
      short: day.short,
      theme: dayThemes[day.label],
      activities: buildActivities(week, day.label, dayIndex)
    }))
  };
});

export function activityKey(week, day, activityId) {
  return `week-${week}-${day.toLowerCase()}-${activityId}`;
}

export function habitKey(week, day, habitId) {
  return `habit-week-${week}-${day.toLowerCase()}-${habitId}`;
}
