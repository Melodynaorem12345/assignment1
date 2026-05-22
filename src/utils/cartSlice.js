import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {

            //Redux Toolkit
            //WE have to mutate the state here(immer library is working behind the scenes to make sure that the state is not mutated in real)
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0;//[]
            //return {items: []};
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;