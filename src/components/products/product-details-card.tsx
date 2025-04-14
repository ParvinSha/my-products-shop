import { Product } from '@/lib/products/interfaces';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,    
  CardTitle,
} from "../ui/card";
import StarRating from "../ui/rating";
import Image from "next/image";
import AddToCartButton from "./addtocart-button";

export async function ProductDetailsCard({
  product,
}: {
  product: Promise<Product>;
}) {
  const productDetails = await product;
  return (
    <Card className="max-w-full sm:max-w-3xl mx-auto px-4 sm:px-8">
      <CardHeader className="text-center">
        <CardTitle>
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">{productDetails.title}</h1>
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">Category: {productDetails.category}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-8">
        <div className="flex justify-center sm:justify-start">
          <Image
            className="w-full max-w-[260px] sm:max-w-[350px] md:max-w-[450px] px-4 object-contain"
            src={productDetails.thumbnail}
            height={300}
            width={300}
            alt={productDetails.title}
          />
        </div>
        <div className="sm:pl-8 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <span>Rating:</span> <StarRating rating={productDetails.rating} size={24} />
          </div>
          <p className="text-sm sm:text-base text-pretty">{productDetails.description}</p>
          <p className="text-end text-3xl sm:text-4xl font-semibold">
            ${productDetails.price}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center sm:justify-end">
        <AddToCartButton product={productDetails} />
      </CardFooter>
    </Card>
  );
}
