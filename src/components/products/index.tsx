import { Product } from '@/lib/products/interfaces'
import ProductListCard from './product-list-card'

const Products = async ({
    products,    
  }: {
    products: Promise<Product[]>
  }) => {
    const allProducts = await products
  
    if (!allProducts || allProducts.length === 0) {
      return (
        <div className="flex justify-center items-center mt-10">
          <h1 className="text-2xl font-bold">No products found</h1>
        </div>
      )
    }
    return (
      <div className="grid gap-10 justify-center mt-10 mb-10 mx-3 sm:mx-10 xl:mx-20">
        <ul className="grid justify-center md:grid-cols-2 lg:grid-cols-5 gap-8">
          {allProducts.map((product) => (
            <li key={product.id}>
                <ProductListCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default Products
