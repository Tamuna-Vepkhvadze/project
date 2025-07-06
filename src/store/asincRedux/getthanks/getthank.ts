import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ResponseUserData } from "../../../interface/Interface";
import { AxiosService } from "../../../conponents/axsios/AxiosService";

export const getthank = createAsyncThunk(
    "get/users", 
    async( _, apithank) => {

        try {

            const responce = await AxiosService.users()
            const data:ResponseUserData[] = responce.data
            return data
            
        } catch (error) {
            apithank.rejectWithValue("data not found") 
            
        }

    } 
)






export const refreshUsers = createAsyncThunk(
   " get/refresh",
   async (_, apithank ) => {

    try {

        const responce = await AxiosService.refresh()
        const data:ResponseUserData = responce.data.user
        return data
        
    } catch (error) {
        apithank.rejectWithValue("data not found")
    }

   }
)