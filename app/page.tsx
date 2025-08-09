import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Page() {
  return (
    <>
      <Header />
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold">Resume + Mock Interviews</h1>
        <div className="prose prose-sm max-w-none mt-3">
          <p>ATS-ready resume with quantified outcomes, plus timed mocks with a hiring-style scorecard.</p>
        </div>
        <a className="inline-block mt-3 bg-black text-white px-3 py-2 rounded-xl" href="/contact">Get started</a>
      </section>
      <Footer />
    </>
  )
}
