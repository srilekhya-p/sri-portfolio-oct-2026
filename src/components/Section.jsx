export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="border-t border-slate-200 py-16 sm:py-20">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">{label}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}
