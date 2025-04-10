"use client";

import { useCart } from "@/../providers/cart-provider";
import { Button } from "../ui/button";
import { Product } from "@/lib/products/interfaces";
import { toast } from "sonner";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, product: Product) => {
    e.stopPropagation(); // Prevent click event from bubbling up
    addToCart(product);
    toast.success(`${product.title} added to cart`);
  };
  return (
    <Button
      className="hover:cursor-pointer"
      onClick={(e) => handleClick(e, product)}
    >
      Add to cart
    </Button>
  );
}
