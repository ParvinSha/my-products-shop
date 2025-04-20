'use client'

import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from '../ui/hamburger'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname()

  return (
    <nav
      className="bg-red-900 dark:bg-red-700"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-end">
        {/* mobile */}
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
        <Link href="/" aria-label="Home page">
          <Image
            src="/shopping-logo.svg"
            alt="logo"
            width={0}
            height={0}
            className="w-20 min-[768px]:w-30"
          />
        </Link>
        {/* menu for desktop */}
        <ul className="hidden md:flex space-x-4 gap-0 my-10">
          <li>
            <Link
              href="/"
              aria-label="Go to home page"
              className={`text-2xl px-4 py-3 hover:bg-red-500 dark:hover:bg-red-800 rounded-2xl ${
                pathname === '/' ? 'bg-red-500 dark:bg-red-800' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              aria-label="View all products"
              className={`text-2xl px-4 py-3 hover:bg-red-500 dark:hover:bg-red-800 rounded-2xl ${
                pathname.includes('/products')
                  ? 'bg-red-500 dark:bg-red-800'
                  : ''
              }`}
            >
              Products
            </Link>
          </li>
        </ul>
        <span className="hidden md:block">
        </span>
      </div>
    </nav>
  )
}

export default NavBar
