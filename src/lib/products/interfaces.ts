// Interface of products (array) including data from API
export interface ProductsApiData {
  products: ProductFromApi[]
}
// Interface of product (single product) including data from API
export interface ProductFromApi {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
      createdAt: string; // ISO date string
      updatedAt: string; // ISO date string
      barcode: string;
      qrCode: string;
    };
    images: string[];
    thumbnail: string;
  }
  
  interface Review {
    rating: number;
    comment: string;
    date: string; // ISO date string
    reviewerName: string;
    reviewerEmail: string;
  }
  
// Interface including the properties we want to add
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;  
  images: string[];
  thumbnail: string;

  isFavourite: boolean // I add this property
}
