import { ShoppingCart } from 'lucide-react'

export default function Home() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center pt-4 sm:pt-8 p-4 sm:p-6 md:p-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/shopping-background.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-12">
          Welcome to Products Shop App
        </h1>
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-lg sm:text-xl h-12 px-6"
          href="/products"
        >
          <ShoppingCart size={24} />
          Go to Products Shop
        </a>
      </div>
    </main>
  )
}
