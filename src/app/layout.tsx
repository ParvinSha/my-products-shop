import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/footer'
import CartProvider from "@/../providers/cart-provider";
import { Toaster } from "../components/ui/sonner";
import CartButton from "../components/products/cart-button";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Products Shop App',
  description: 'Products app with tailwindcss and nextjs'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          
        <header className="bg-red-900 py-2">
          <div className="container flex justify-between items-center space-x-1 mx-auto pr-5 md:pr-0">
            <div className="max-w-xl w-full">
              <NavBar />
            </div>
            <CartButton />
          </div>
        </header>

          <div>{children}</div>
          <Toaster />
        </CartProvider>
        <Footer />
      </body>
    </html>
  )
}
