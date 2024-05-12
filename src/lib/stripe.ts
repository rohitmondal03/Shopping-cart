import Stripe from "stripe"

export const stripe = new Stripe(process.env.hehe || "", {
  apiVersion: "2024-04-10",
  typescript: true,
})