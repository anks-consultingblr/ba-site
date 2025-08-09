import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} ANKS Consulting</div>
        <div className="flex gap-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
