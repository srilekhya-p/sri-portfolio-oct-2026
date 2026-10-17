import Section from './Section.jsx'
import { projects, profile } from '../data/profile.js'
import { ExternalIcon, GitHubIcon } from './Icons.jsx'

export default function Projects() {
  return (
    <Section id="projects" label="02 · Projects" title="Things I've built">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/60"
          >
            {p.image && (
              <img src={p.image} alt={`${p.name} screenshot`} className="aspect-[16/9] w-full border-b border-slate-200 object-cover" />
            )}
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">{p.tag}</p>
              <h3 className="mt-1.5 text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed">{p.description}</p>
              <p className="mt-4 rounded-lg bg-accent-soft px-3 py-2 text-sm font-medium text-accent-dark">{p.result}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              {(p.github || p.demo) && (
                <div className="mt-auto flex gap-4 pt-5 text-sm font-medium">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-700 hover:text-accent">
                      <GitHubIcon width={16} height={16} /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-700 hover:text-accent">
                      Live demo <ExternalIcon />
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-slate-500">
        More on{' '}
        <a href={profile.github} target="_blank" rel="noreferrer" className="font-medium text-accent underline-offset-4 hover:underline">
          GitHub
        </a>
        .
      </p>
    </Section>
  )
}
