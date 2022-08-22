import {createSlice} from "@reduxjs/toolkit"

//shopping cart
const initialState = {
    cartItems:[],
    amount:5,
    total:0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{},
})

export default cartSlice.reducer;