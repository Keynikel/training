export default function DifficultyDots({ value }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Difficulty ${value} of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`h-2.5 w-2.5 rounded-full ${
            index < value ? 'bg-coffee' : 'bg-tan/45'
          }`}
        />
      ))}
    </div>
  );
}
