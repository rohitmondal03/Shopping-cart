import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    PRODUCTS_ENDPOINT: z.string().min(1),
    STRIPE_SECRET_KEY: z.string().min(1),
  },
  runtimeEnv: {
    PRODUCTS_ENDPOINT: process.env.PRODUCTS_ENDPOINT,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
});