import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosService } from "../../../conponents/axsios/AxiosService";
import type { UserValid } from "../../../interface/Interface";



export const posttank = createAsyncThunk(

    "post/login",

    async(authdata:UserValid, appThank) =>{
        try {
            const responce = await AxiosService.login(authdata)
            const token = await responce.data.accessToken
             console.log("Login API response data:", responce.data);
            localStorage.setItem("lokalKey",token)

            return responce.data.user
            
        } catch (error) {
        
           return  appThank.rejectWithValue("user not found")
        }

    }

)