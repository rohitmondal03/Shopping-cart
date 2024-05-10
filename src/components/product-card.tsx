import Image from "next/image";
import { Eye, ShoppingCart, Star } from "lucide-react";

import type { TProducts } from "@/lib/types/root.types";
import { Button } from "./ui/button";
import { 
  Dialog,
  DialogTrigger,
  DialogContent,
 } from "./ui/dialog";


export default function ProductCard(product: TProducts) {
  return (
    <Dialog>
      <div
        key={product.id}
        className="h-full p-5 text-black space-y-10 rounded-2xl border-2 border-slate-500 cursor-pointer transition ease-out duration-200 hover:scale-[1.02]"
      >
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="size-40 mx-auto"
        />
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">
            {product.title}
          </h2>
          <p className="text-xs text-zinc-100 font-semibold">
            {product.category}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-blue-600 w-fit text-white px-2 py-1 rounded-lg">
              {product.rating.rate}
              <Star fill="white" className="size-4" />
            </div>
            <p className="text-sm">
              &#40;{product.rating.count}&#41;
            </p>
          </div>
          <p className="font-semibold text-xl">
            &#x20B9; {" "} {product.price}
          </p>
        </div>
        <div className="space-y-2">
          <DialogTrigger asChild>
            <Button className="flex items-center gap-3 w-full">
              View
              <Eye />
            </Button>
          </DialogTrigger>
          <Button className="flex items-center gap-3 w-full">
            Add to Cart
            <ShoppingCart />
          </Button>
        </div>
      </div>
      <DialogContent>
        Hello
      </DialogContent>
    </Dialog>
  )
}
