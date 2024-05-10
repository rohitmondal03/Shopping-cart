import type { TLinks } from "../types/root.types";
import { routes } from "./routes";


export const NAVBAR_LINK: TLinks[] = [
  {
    label: 'Features',
    href: routes.featuresRoute(),
  },
  {
    label: 'Products',
    href: routes.productsRoute(),
  },
]