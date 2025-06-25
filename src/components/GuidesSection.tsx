const guides = [
  { slug: "wake-windows-by-age", title: "Wake Windows by Age" },
  { slug: "2-month-nap-schedule", title: "2-Month-Old Nap Schedule" },
  { slug: "overtired-baby-signs", title: "Overtired Baby Signs" },
  { slug: "nap-transition-calculator", title: "Nap Transition Calculator" },
  { slug: "how-to-use-wake-window-calculator", title: "How to Use the Calculator" },
]

export default function GuidesSection() {
  return (
    <section className="w-full py-12 bg-muted/20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8">Sleep Guides&nbsp;&amp;&nbsp;Tools</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {guides.map(g => (
            <a 
              key={g.slug} 
              href={`/${g.slug}`}
              className="flex items-center justify-between rounded-xl border p-4 hover:shadow-lg transition"
            >
              <span>{g.title}</span>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 