import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: {} },
  reducers: {
    // mapping of action: reducer function
    addItem: (state, action) => {
      const item = state.items[action.payload.id];
      const count =
        item && item.hasOwnProperty('count')
          ? state.items[action.payload.id]?.count + 1
          : 1;
      state.items[action.payload.id] = { ...action.payload, count };
    },
    removeItem: (state, action) => {
      const item = state.items[action.payload];
      if (!item) return;
      if (item.count > 1) {
        item.count -= 1;
      } else {
        delete state.items[action.payload];
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
