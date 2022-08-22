import {createSlice} from "@reduxjs/toolkit"
import cartItems from "../../cartItems"


//shopping cart
const initialState = {
    cartItems:cartItems,
    amount:5,
    total:0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{},
})

export default cartSlice.reducer;