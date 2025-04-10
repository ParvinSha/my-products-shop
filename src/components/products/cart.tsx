"use client";
import { Trash } from "lucide-react";
import { useCart } from "@/../providers/cart-provider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button"; // assuming you have a Button component

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
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-2">
                    <img
                      src={item.product.thumbnail}
                      alt={item.product.title}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span>{item.product.title}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {formatPrice(item.product.price * item.quantity)} (
                  {formatPrice(item.product.price)} × {item.quantity})
                </TableCell>
                <TableCell className="text-right">
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
              <TableCell>${cartTotal}</TableCell>
              <TableCell className="flex justify-end pr-12">{cartCount}</TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      )}
    </div>
  );
}
