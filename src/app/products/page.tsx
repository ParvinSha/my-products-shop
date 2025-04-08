import Products from '@/components/products'
import { fetchAllProducts, fetchProducts } from '@/lib/products/actions'
export default function ProductsList() {
    const products = fetchProducts()
    return (
       <> 
            <Products  products={products}/>  
      </>
    )
  }
  