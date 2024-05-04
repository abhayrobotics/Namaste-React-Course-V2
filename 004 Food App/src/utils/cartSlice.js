import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items :[],
    },
    reducers:{
        addItem: (state,action) => {
            state.items.push(action.payload);
        },
        removeItem:(state,action) =>{
            state.items.pop();
        },
        clearCart: (state,action) =>{

            // Redux toolkit - either Mutute the state or return the  new state 
            state.items.length =0;  // mutatating the state originalState =[] 
            // return { items: []}        // return the new state =originalState =[]

            // state= [] // does not work as this does not mutute te origianl state but a local copy.
        },
    },
}
)

export const {addItem,removeItem,clearCart} =cartSlice.actions;

export default cartSlice.reducer;