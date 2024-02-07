import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state here or directly modifying the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState=['pizza']
    clearCart: (state) => {
      //RTK: Either mutate the existing state or return a new state
      console.log(state); //['pizza']
      console.log(current(state));
      // state = []; //local copy its not change the original state
      console.log(state);
      // state.items.length = 0;
      return { items: [] }; //this new [] will be replaced inside originalState=[]
    },
  },
});

//cartslice is kind of big object which contains actions and reducer
//export action and reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
