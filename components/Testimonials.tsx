export default function Testimonials() {
  const items = [
    { name: 'Priya S', role: 'BA @ Fintech', text: 'Clear structure, real projects, and straight feedback. I cracked two rounds in 3 weeks.'},
    { name: 'Rohit M', role: 'BA @ Bank', text: 'Mocks were game-changing. I knew exactly what to fix and how.'},
    { name: 'Devika R', role: 'Associate BA', text: 'I finally understood how to turn business talk into requirements that devs use.'},
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold">Success stories</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-3">
        {items.map(t => (
          <div key={t.name} className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="text-sm text-gray-700">{t.text}</div>
            <div className="text-xs text-gray-500 mt-3">{t.name} • {t.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
