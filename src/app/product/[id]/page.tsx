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
    <div className="mt-20 mb-40">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetailsCard product={product} />
      </Suspense>
    </div>
  )
}
