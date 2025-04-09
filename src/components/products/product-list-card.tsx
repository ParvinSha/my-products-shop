'use client'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { Product } from '@/lib/products/interfaces'
import Image from 'next/image'
import StarRating from '../ui/rating'
import { useRouter } from 'next/navigation'
import FavoriteButton from '../ui/favorite'

const ProductListCard = ({ product }: { product: Product }) => {
  const router = useRouter()

  return (
    <Card
      className="py-0 max-w-96 justify-between h-full cursor-pointer dark:bg-orange-950"
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <FavoriteButton productId={product.id} />
      <Image
        src={product.thumbnail}
        alt={product.title}
        height={200}
        width={200}
        className="rounded-t-xl object-cover"
      />
      <CardTitle className="text-l mx-4 text-wrap">
        <span className="font-semibold text-sm block mb-2">{product.brand}</span>
        {product.title}
      </CardTitle>
      <CardContent className="flex flex-col px-4 gap-2">
        <div className="flex flex-row gap-2 font-bold">
          <span>{product.price}$</span>
        </div>
      </CardContent>      
      <CardFooter className="px-4 mb-4 mt-4 mb-10 flex justify-between items-center">
        <div className="flex gap-2">
          <StarRating rating={product.rating} size={14} />
          <span className="text-xs">{product.rating}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

export default ProductListCard
