import { profile } from '../data/profile.js'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <>
      <section id="contact" className="border-t border-slate-200 py-16 sm:py-24">
        <div className="rounded-2xl bg-ink px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-teal-300">05 · Contact</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Hiring for a Java full stack role?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-slate-300">
            I can start right away and I'm open to remote, hybrid or onsite work. The fastest way to reach me is email.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="btn mt-8 break-all bg-white text-ink hover:bg-slate-100"
          >
            <MailIcon /> {profile.email}
          </a>
          <div className="mt-6 flex justify-center gap-5 text-slate-400">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white" aria-label="LinkedIn"><LinkedInIcon width={22} height={22} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white" aria-label="GitHub"><GitHubIcon width={22} height={22} /></a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="hover:text-white" aria-label="Resume"><DownloadIcon width={22} height={22} /></a>
          </div>
        </div>
      </section>
      <footer className="pb-10 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}
