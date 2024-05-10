import { createNavigationConfig } from "next-safe-navigation";


export const { routes, useSafeParams, useSafeSearchParams } = createNavigationConfig(
  (defineRoute) => ({
    homeRoute: defineRoute('/'),
    productsRoute: defineRoute("/products"),
    cartRoute: defineRoute("/cart"),
    featuresRoute: defineRoute("/features"),
  }),
);