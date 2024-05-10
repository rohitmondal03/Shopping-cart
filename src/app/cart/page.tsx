import { CartItemsContainer } from "./_components/cart-items";

export default function CartPage() {
  return (
    <section className="py-16 space-y-16">
      <h1 className="text-4xl text-center font-bold text-slate-600">
        Your Cart Items
      </h1>

      <div className='flex flex-col'>
        <CartItemsContainer />
      </div>
    </section>
  )
}
