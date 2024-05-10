"use client"

import { Provider } from "react-redux"

import type { TLayoutProps } from "@/lib/types/root.types"
import { store } from "@/lib/redux/store"


export function ReduxProvider({ children }: TLayoutProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
