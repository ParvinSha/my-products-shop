import SortingSelect from "@/components/navigation/sorting-select"
import CategorySelect from "@/components/navigation/category-select"
import { Skeleton } from "@/components/ui/skeleton"
import { LoaderCircle } from "lucide-react"
import { Suspense } from "react"
import Products from '@/components/products'
import { fetchCategories, fetchProductsByCategory } from '@/lib/products/actions'

//different loader icons
//TODO: make them look a bit better, show when selecting category
const LoadingSpinner = () => (
  <LoaderCircle className="animate-spin size-16 mx-auto my-32" />
)
const LoadingSelect = () => (
  <div>
    Category: <Skeleton className="w-[180px] h-9" />
  </div>
)

export default async function ProductsList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const category = Array.isArray(params.category)
    ? params.category[0]
    : params.category;

  const sort = Array.isArray(params.sort)
    ? params.sort[0]
    : params.sort;

  const products = fetchProductsByCategory(category, sort) ?? [];
  const categories = fetchCategories();

  return (
    <main className="space-y-4 container mx-auto mt-10">
      <div className="flex gap-4 mt-4 ml-20">
        <Suspense fallback={<LoadingSelect />}>
          <CategorySelect categories={categories} />
        </Suspense>
        <SortingSelect />
      </div>
      <Suspense
        key={(category ?? "All") + (sort ?? "none")}
        fallback={<LoadingSpinner />}
      >
        <Products products={products} />
      </Suspense>
    </main>
  );
}
