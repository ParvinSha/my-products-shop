'use client'

import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from '../ui/hamburger'
import { usePathname } from 'next/navigation'
// import { signOut, useSession } from 'next-auth/react'
// import LoginButton from '../Login-button/LoginButton'

const NavBar = () => {
  const pathname = usePathname()
  // const { data: session } = useSession()

  return (
    <nav
      className="bg-red-900 p-2 border-b-2 border-b-red-500 dark:bg-red-700 dark:border-b-red-800"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-end">
        {/* mobile */}
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
        <Link href="/" aria-label="Home page">
          <Image
            src="/shopping-logo2.svg"
            alt="logo"
            width={0}
            height={0}
            className="w-20 min-[768px]:w-30"
          />
        </Link>
        {/* menu for desktop */}
        <ul className="hidden md:flex space-x-4 gap-0">
          <li>
            <Link
              href="/"
              aria-label="Go to home page"
              className={`text-2xl px-4 pb-2.5 pt-4 hover:bg-red-500 dark:hover:bg-red-800 rounded-t-lg ${
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
              className={`text-2xl px-4 pb-2.5 pt-4 hover:bg-red-500 dark:hover:bg-red-800 rounded-t-lg ${
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
          {/* <LoginButton /> */}
        </span>
      </div>
    </nav>
  )
}

export default NavBar
