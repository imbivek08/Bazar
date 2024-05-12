import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { stat } from "fs";

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
        },
        removeFromCart:(state,action)=>{
            state.cart = state.cart.filter((item:any)=>{
                return item.id !== action.payload
            })
        }
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart.cart
export const getCart = (state: RootState) => state.cart.cart

export default cartSlice.reducer;