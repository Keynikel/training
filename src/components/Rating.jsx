import { Star } from 'lucide-react';

export default function Rating({ value = 0, onChange, label }) {
  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => {
        const rating = index + 1;
        const active = rating <= value;
        return (
          <button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            className="rounded-full p-1 text-coffee transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-caput/25"
            aria-label={`${rating} star${rating === 1 ? '' : 's'}`}
          >
            <Star
              aria-hidden="true"
              className={`h-4 w-4 ${active ? 'fill-coffee' : 'fill-transparent opacity-45'}`}
            />
          </button>
        );
      })}
    </div>
  );
}
