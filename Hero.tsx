import Link from 'next/link'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-10 pb-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Become a Job-Ready Business Analyst</h1>
          <p className="mt-3 text-gray-600">Hands-on BA fundamentals, real case studies, and interview prep. Learn with Abhishek Kulkarni (PMP, CSPO).</p>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="bg-black text-white px-4 py-2 rounded-xl">Book a free consult</Link>
            <a href="#" className="px-4 py-2 rounded-xl border">Download syllabus</a>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="text-sm text-gray-500">What you’ll learn</div>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <li className="bg-gray-100 p-2 rounded-lg">Requirements elicitation</li>
            <li className="bg-gray-100 p-2 rounded-lg">BRD/FRD writing</li>
            <li className="bg-gray-100 p-2 rounded-lg">User stories & JIRA</li>
            <li className="bg-gray-100 p-2 rounded-lg">Basic SQL & data</li>
            <li className="bg-gray-100 p-2 rounded-lg">Stakeholder interviews</li>
            <li className="bg-gray-100 p-2 rounded-lg">Interview prep</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
