import { ShoppingCart } from 'lucide-react'

export default function Home() {
  return (
    <main
      className="relative flex flex-col items-center pt-4 sm:pt-8 p-4 sm:p-6 md:p-8 bg-cover bg-center md:min-h-screen"
      style={{ backgroundImage: "url('/images/shopping-background.jpg')" }}
    >
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="flex flex-col items-center w-full max-w-3xl p-6 sm:p-12 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-white">
            Welcome to Products Shop App
          </h1>
          <a
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-3xl border border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base md:text-lg transition-colors"
            href="/products"
          >
            <ShoppingCart size={18} />
            Go to Products Shop
          </a>
        </div>
      </div>
    </main>
  )
}
