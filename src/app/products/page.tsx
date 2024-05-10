import type { TProducts } from "@/lib/types/root.types"
import { env } from "@/env"
import { ProductCard } from "@/components/product-card";


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

      <div className="grid grid-cols-4 gap-10 px-10">
        {data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
