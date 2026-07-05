import { ShieldCheck } from 'lucide-react';

const notes = [
  'Stop training if there is pain, bleeding, dizziness, contractions, shortness of breath before exercise, chest pain, calf swelling, or fluid leakage.',
  'Avoid lying flat on the back for long periods if uncomfortable.',
  'Avoid overheating and take extra rest when needed.',
  'Keep intensity conversational.',
  'Consult a healthcare provider before starting or changing training during pregnancy.'
];

export default function SafetyCard() {
  return (
    <section className="rounded-2xl border border-caput/12 bg-white p-5">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-caput/8 text-caput">
          <ShieldCheck aria-hidden="true" className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-caput">
            General safety information
          </p>
          <h2 className="mt-2 text-xl font-semibold text-space">Train with calm guardrails</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate">
            This tracker is for organizing daily activity habits. It is not medical advice.
          </p>
          <ul className="mt-5 grid gap-2 text-sm leading-6 text-space md:grid-cols-2">
            {notes.map((note) => (
              <li key={note} className="rounded-xl border border-space/10 bg-ivory p-3">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
