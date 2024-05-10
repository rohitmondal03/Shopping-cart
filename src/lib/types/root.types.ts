import type { ReactNode } from "react";

import { store } from "../redux/store";


export type TLayoutProps= Readonly<{
  children: ReactNode;
}>;

export type TProducts = {
  id: string;
  title: string;
  price: number,
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number,
    count: number,
  }
}

export type TLinks= {
  label: string;
  href: string;
}

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;