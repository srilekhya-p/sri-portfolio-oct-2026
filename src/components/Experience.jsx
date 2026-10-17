import Section from './Section.jsx'
import { experience } from '../data/profile.js'

export default function Experience() {
  return (
    <Section id="experience" label="01 · Experience" title="Where I've worked">
      <ol className="space-y-12">
        {experience.map((job) => (
          <li key={job.role + job.company} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <p className="pt-1 font-mono text-xs text-slate-500">{job.dates}</p>
            <div>
              <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
              <p className="text-sm text-slate-500">
                <span className="font-medium text-slate-700">{job.company}</span> · {job.location}
              </p>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((pt) => (
                  <li key={pt} className="relative pl-5 leading-relaxed">
                    <span className="absolute left-0 top-[0.6rem] h-1.5 w-1.5 rounded-full bg-accent/70" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
