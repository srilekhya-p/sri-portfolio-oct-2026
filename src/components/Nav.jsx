import { profile } from '../data/profile.js'

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-semibold tracking-tight text-ink">
          Sri Lekhya<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-accent">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost py-1.5">
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
