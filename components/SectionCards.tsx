import Link from 'next/link'

export default function SectionCards() {
  const cards = [
    { title: 'Cohort Program', body: '8–10 weeks · Live online · Capstone case', href: '/cohort', cta: 'See curriculum' },
    { title: '1:1 Coaching', body: 'Targeted sessions on gaps, mock interviews, action plan', href: '/coaching', cta: 'Book a session' },
    { title: 'Resume + Mocks', body: 'ATS-ready resume, targeted stories, timed mocks', href: '/resume-mocks', cta: 'Get started' },
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold">Choose your path</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-3">
        {cards.map(c => (
          <div key={c.title} className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="text-lg font-medium">{c.title}</div>
            <p className="text-sm text-gray-600 mt-1">{c.body}</p>
            <Link href={c.href} className="inline-block mt-4 text-sm bg-black text-white px-3 py-2 rounded-xl">{c.cta}</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
