"use client"

import { useAppSelector } from "@/lib/hooks/store.hooks";
import { useEffect } from "react";


export function CartItemsContainer() {
  const cartItems = useAppSelector(state => state.cart);

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  return (
    <section className="flex flex-col">
      {cartItems.map(item => (
        <p>{item.title}</p>
      ))}
    </section>
  )
}
