import { createSlice } from "@reduxjs/toolkit"


const appThema = localStorage.getItem("appThema")

const state = {
    thema: appThema ?? "light"
}


const themaslice = createSlice({
    name: "thema",
    initialState: state,
    reducers:{
        myAppThema (state) {
          state.thema = state.thema === "light" ? "dark": "light" 
          localStorage.setItem("appThema", state.thema)
        },

        setThema (state, action) {
            state.thema = action.payload
            localStorage.setItem("appThema",state.thema)

        }
    }
})

export const {myAppThema, setThema} = themaslice.actions

export default themaslice.reducer