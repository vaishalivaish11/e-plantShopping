import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // ✅ REQUIRED: addItem()
    addItem: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    // ✅ REQUIRED: removeItem()
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // ✅ REQUIRED: updateQuantity()
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        if (type === "increase") {
          item.quantity += 1;
        } else if (type === "decrease" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
