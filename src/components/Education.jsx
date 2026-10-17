import Section from './Section.jsx'
import { education, certifications } from '../data/profile.js'
import { ExternalIcon } from './Icons.jsx'

export default function Education() {
  return (
    <Section id="education" label="04 · Education" title="Education & certifications">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          {education.map((e) => (
            <div key={e.degree}>
              <h3 className="font-semibold text-ink">{e.degree}</h3>
              <p className="text-sm text-slate-600">{e.school}</p>
              <p className="mt-1 text-sm text-slate-500">{e.detail}</p>
              <p className="mt-1 font-mono text-xs text-slate-400">{e.dates}</p>
            </div>
          ))}
        </div>

        <ul className="space-y-3">
          {certifications.map((c) => {
            const Tag = c.url ? 'a' : 'div'
            return (
              <li key={c.name}>
                <Tag
                  {...(c.url ? { href: c.url, target: '_blank', rel: 'noreferrer' } : {})}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-slate-300"
                >
                  <span className="grid h-10 min-w-[4rem] shrink-0 place-items-center whitespace-nowrap rounded-lg bg-accent-soft px-2 font-mono text-[11px] font-semibold text-accent-dark">
                    {c.name.match(/\(([^)]+)\)/)?.[1] ?? 'CERT'}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-ink">{c.name}</span>
                    <span className="mt-0.5 block text-sm text-slate-500">{c.issuer} · {c.date}</span>
                  </span>
                  {c.url && <ExternalIcon className="mt-1 text-slate-400" />}
                </Tag>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
