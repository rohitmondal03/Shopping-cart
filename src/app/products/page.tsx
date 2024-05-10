import Image from "next/image";
import Link from "next/link";
import { Eye, Star, ShoppingCart } from "lucide-react";

import type { TProducts } from "@/lib/types/root.types"
import { env } from "@/env"
import ProductCard from "@/components/product-card";


export default async function ProductsPage() {
  const data = await fetch(env.PRODUCTS_ENDPOINT, {
    cache: "force-cache",
  })
    .then(res => res.json())
    .then((data: TProducts[]) => data);


  return (
    <section className="py-16 space-y-16">
      <h1 className="text-4xl text-center font-bold text-slate-600">
        Products
      </h1>

      <div className="grid grid-cols-3 gap-10 px-10">
        {data.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </section>
  )
}
