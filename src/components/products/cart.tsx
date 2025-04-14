"use client";
import Link from 'next/link'
import { Trash } from "lucide-react";
import { useCart } from "@/../providers/cart-provider";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function Cart() {
  const { cart, cartTotal, cartCount, increaseQty, decreaseQty, removeFromCart } = useCart();

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Desktop view */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="w-[100px]">Price/Item</TableHead>
                  <TableHead className="w-[200px] text-right">Quantity</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.product.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <img
                          src={item.product.thumbnail}
                          alt={item.product.title}
                          className="w-10 h-10 object-cover rounded"
                        />
                        <Link href={`/product/${item.product.id}`} className="hover:underline">
                          {item.product.title}
                        </Link>

                      </div>
                    </TableCell>
                    <TableCell>
                      {formatPrice(item.product.price * item.quantity)} (
                      {formatPrice(item.product.price)} × {item.quantity})
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end items-center space-x-2">
                        <Button size="sm" onClick={() => decreaseQty(item.product.id)}>-</Button>
                        <span>{item.quantity}</span>
                        <Button size="sm" onClick={() => increaseQty(item.product.id)}>+</Button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className="font-bold text-right">Total:</TableCell>
                  <TableCell>{formatPrice(cartTotal)}</TableCell>
                  <TableCell className="text-right">{cartCount}</TableCell>
                  <TableCell />
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="border rounded-lg p-4 flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.product.title}</h4>
                    <p className="text-sm">
                      {formatPrice(item.product.price * item.quantity)} (
                      {formatPrice(item.product.price)} × {item.quantity})
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex justify-end items-center space-x-2">
                  <Button size="sm" onClick={() => decreaseQty(item.product.id)}>-</Button>
                  <span>{item.quantity}</span>
                  <Button size="sm" onClick={() => increaseQty(item.product.id)}>+</Button>
                </div>
              </div>
            ))}

            {/* Mobile Total */}
            <div className="text-right mt-4">
              <div className="font-bold">Total: {formatPrice(cartTotal)}</div>
              <div>Items: {cartCount}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
