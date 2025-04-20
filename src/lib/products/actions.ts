'use server'

import { Product, ProductsApiData } from './interfaces'

const API_ENDPOINT = 'https://dummyjson.com/products'

// Fetching all products from dummyJSON without pagination
export async function fetchAllProducts() {
  
  const res = await fetch(`${API_ENDPOINT}`)
  const data: ProductsApiData = await res.json()
  return data
}

// Function to fetch all products and update with isFavourite property
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
    const updatedProducts: Product[] = data.products.map((product) => ({
      ...product,
  
      isFavourite: Boolean(false)
    }))
  
    return updatedProducts
  }

  // Function to get a single product by id
  export async function fetchProductById(id: number) {
    const url = `${API_ENDPOINT}/${id}`
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Error HTTP status: ${res.status}`)
    }

    const productData: Product = await res.json()

    return productData
  }

  export const fetchProductsByCategory = async (
    category: string | undefined,
    sort?: string
  ) => {
    const sortOrder = sort && sort !== "none" ? sort : null;
  
    let url: string;
  
    if (!category || category === "All") {
      url = sortOrder
        ? `${API_ENDPOINT}?sortBy=title&order=${sortOrder}`
        : `${API_ENDPOINT}`;
    } else {
      url = sortOrder
        ? `${API_ENDPOINT}/category/${category}?sortBy=title&order=${sortOrder}`
        : `${API_ENDPOINT}/category/${category}`;
    }
  
    const res = await fetch(url);
  
    if (!res.ok) {
      throw new Error(`Error HTTP status: ${res.status}`);
    }
  
    const data: ProductsApiData = await res.json();
  
    if (!Array.isArray(data.products)) {
      throw new Error("Invalid product format received");
    }
  
    return data.products.map((product) => ({
      ...product,
      isFavourite: false,
    }));
  } 

  export async function fetchCategories() {
    const res = await fetch(`${API_ENDPOINT}/category-list`);

    if (!res.ok) {
      return {
        error: `${res.status} ${res.statusText}`,
      };
    }
  
    const data: string[] = await res.json();
    return data;
  }
  
