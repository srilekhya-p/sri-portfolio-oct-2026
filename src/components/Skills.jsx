import Section from './Section.jsx'
import { skills } from '../data/profile.js'

export default function Skills() {
  return (
    <Section id="skills" label="03 · Skills" title="Tools I work with">
      <dl className="divide-y divide-slate-200 border-y border-slate-200">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <dt className="text-sm font-semibold text-ink">{s.group}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {s.items.map((i) => (
                <span key={i} className="rounded-md border border-slate-200 px-2.5 py-1 text-sm text-slate-700">
                  {i}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
