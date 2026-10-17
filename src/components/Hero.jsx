import { profile, highlights } from '../data/profile.js'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-14 sm:pb-20 sm:pt-24">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-medium text-accent-dark">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for full-time roles
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">{profile.name}</h1>
          <p className="mt-3 text-lg font-medium text-accent sm:text-xl">{profile.title}</p>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{profile.summary}</p>

          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
            <PinIcon className="text-slate-400" /> {profile.location}
            <span className="hidden text-slate-300 sm:inline">·</span>
            <span>{profile.availability}</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-primary">
              <DownloadIcon /> Download resume
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              <MailIcon /> Email me
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost" aria-label="GitHub">
              <GitHubIcon />
            </a>
          </div>
        </div>

        {profile.photo && (
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-28 w-28 shrink-0 rounded-2xl object-cover ring-1 ring-slate-200 sm:h-36 sm:w-36"
          />
        )}
      </div>

      <dl className="mt-14 grid grid-cols-3 divide-x divide-slate-200 rounded-xl border border-slate-200">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col-reverse px-3 py-4 sm:px-6 sm:py-5">
            <dt className="mt-1 text-xs leading-snug text-slate-500 sm:text-sm">{h.label}</dt>
            <dd className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">{h.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
