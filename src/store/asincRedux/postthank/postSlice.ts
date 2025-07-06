import { createSlice } from "@reduxjs/toolkit";
import { posttank } from "./posttank";
import type { ResponseUserData } from "../../../interface/Interface";

interface postState {
  user:null | ResponseUserData, 
  loader: boolean,
  error:null | String
}


const state:postState = {
    user: null,
    loader: false,
    error:null,
}

const postSlice = createSlice({
    name:"postSlice",
    initialState: state,
    reducers:{},
    extraReducers: (builder) => {
       builder
       .addCase(posttank.pending, (state)  => {
        state.loader = true,
        state.error = null

       })

       .addCase(posttank.fulfilled, (state, action) => {
        state.loader = false,
        state.error = null,
        state.user = action.payload

       })
       .addCase(posttank.rejected, (state, action) => {
        state.loader = false,
        state.error = action.payload as string


       }) 
       
        
    }
})
export default postSlice.reducer