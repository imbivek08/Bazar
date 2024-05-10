import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartState {
    cart:any
}
const initialState:CartState = {
    cart:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart.cart

export default cartSlice.reducer;