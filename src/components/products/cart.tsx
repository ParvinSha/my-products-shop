"use client";

import { useCart } from "@/../providers/cart-provider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function Cart() {
  const { cart, cartTotal, cartCount } = useCart();

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead className="w-[100px]">Price/Item</TableHead>
            <TableHead className="w-[100px] text-right">Quantity</TableHead>
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
              <TableCell>${item.product.price}</TableCell>
              <TableCell className="text-right">{item.quantity}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="font-bold text-right">Total:</TableCell>
            <TableCell>${cartTotal}</TableCell>
            <TableCell className="text-right">{cartCount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      )}
    </div>
  );
}
