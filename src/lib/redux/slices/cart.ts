import { type PayloadAction, createSlice } from "@reduxjs/toolkit"

import type { TProducts } from "@/lib/types/root.types"

const INTIAL_STATE: TProducts[] = []


export const cartSlice = createSlice({
  name: "cart",
  initialState: INTIAL_STATE,
  reducers: {
    addToCart: (state, action: PayloadAction<TProducts>) => {
      state.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<TProducts>) => {
      const temp = state.filter(item => item !== action.payload)
      state = temp;
    }
  }
})


export const {addToCart, removeFromCart}= cartSlice.actions;
export default cartSlice.reducer;