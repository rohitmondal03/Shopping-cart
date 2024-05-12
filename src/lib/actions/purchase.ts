"use server"

import { stripe } from "../stripe"

export const createCheckoutSession = async(name: string, unitAmount: number) =>{
  const product = await stripe.products.create({
    name: name,
    default_price_data: {
      currency: "usd",
      unit_amount: unitAmount,
    }
  })

  const stripeSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "amazon_pay", "mobilepay"],
    mode: "payment",
    shipping_address_collection: {
      allowed_countries: ["IN"]
    },
    success_url: "",
    cancel_url: "",
  })
}