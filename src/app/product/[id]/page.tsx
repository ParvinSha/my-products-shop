import { fetchProductById } from '@/lib/products/actions'
import { ProductDetailsCard } from "@/components/products/product-details-card";
import { Suspense } from "react";

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ id: number }>
}) {
  const id = (await params).id
  console.log('id', id)
  const product = fetchProductById(id)

  return (
    <div className="mt-8 sm:mt-16 lg:mt-20 mb-8 sm:mb-20 lg:mb-40 px-4 sm:px-6 lg:px-12">
      <Suspense fallback={<div className="text-center text-lg">Loading...</div>}>
        <div className="w-full max-w-7xl mx-auto">
          <ProductDetailsCard product={product} />
        </div>
      </Suspense>
    </div>
  )
}
