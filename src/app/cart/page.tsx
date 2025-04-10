import Cart from "@/components/products/cart";

//TODO: make interface for searchParams
export default async function CartPage() {
  return (
    <main className="space-y-4 container mt-20 mb-40 mx-auto">
      <Cart />
    </main>
  );
}
