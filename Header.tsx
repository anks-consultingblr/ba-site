"use client";
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/cohort', label: 'Cohort' },
  { href: '/coaching', label: '1:1 Coaching' },
  { href: '/resume-mocks', label: 'Resume + Mocks' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Book' }
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={160} height={40} />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map(i => (
            <Link key={i.href} href={i.href} className={`hover:text-black ${pathname===i.href? 'text-black font-medium':'text-gray-600'}`}>{i.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="bg-black text-white text-sm px-3 py-2 rounded-xl">Book free consult</Link>
        </div>
      </div>
    </header>
  )
}
