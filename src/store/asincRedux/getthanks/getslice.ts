import { createSlice} from "@reduxjs/toolkit";
import type { ResponseUserData } from "../../../interface/Interface";
import { getthank, refreshUsers } from "./getthank";

interface getType {
    usersGrup:ResponseUserData[]
    user:ResponseUserData | null 
    loader:boolean,
    error: string | null   
}

const state:getType ={
    usersGrup:[],
    user: null,
    loader: false,
    error:null
}
const getslice = createSlice({

    name: "get",
    initialState: state,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(getthank.pending, (state) => {
            state.error= null,
            state.loader = true
        })
        .addCase(getthank.fulfilled, (state, action) => {
            state.loader = false,
            state.error = null,
            state.usersGrup = action.payload as ResponseUserData[]
            
        })
        .addCase(getthank.rejected, (state, action) => {
            state.loader = false,
            state.error = action.error as string

        })


        .addCase(refreshUsers.pending, (state) => {
            state.error=null,
            state.loader =true
        })
        .addCase(refreshUsers.fulfilled, (state, action) => {
            state.error=null,
            state.loader = false,
            state.user = action.payload as ResponseUserData
        })

        .addCase(refreshUsers.rejected, (state, action) =>{

            state.error = action.error as string,
            state.loader = false}
        )

    }

})

export default getslice.reducer