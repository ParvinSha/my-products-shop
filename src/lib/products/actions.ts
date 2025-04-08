'use server'

import { Product, ProductsApiData } from './interfaces'

const API_ENDPOINT = 'https://dummyjson.com/products'

// Fetching all products from dummyJSON without pagination
export async function fetchAllProducts() {
  
  const res = await fetch(`${API_ENDPOINT}`)
  const data: ProductsApiData = await res.json()
  return data
}

// Function to fetch all recipes
// with limit and skip params to support pagination. Default limit is 9
export async function fetchProducts(
  ): Promise<Product[]> {
    
  
    const res = await fetch(
      `${API_ENDPOINT}`
    )
  
    if (!res.ok) {
      throw new Error(`Error HTTP status: ${res.status}`)
    }
  
    const data: ProductsApiData = await res.json()
  
    if (!Array.isArray(data.products)) {
      throw new Error('invalid data format received')
    }
  
    // Add boolean isFavourite
    const updatedRecipes: Product[] = data.products.map((product) => ({
      ...product,
  
      isFavourite: Boolean(false)
    }))
  
    return updatedRecipes
  }


