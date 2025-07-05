import { useEffect, useState } from "react"
import type { ResponseUserData } from "../interface/Interface"
import { AxiosService } from "../conponents/axsios/AxiosService"

export const usegetUserHuk = () => {

    const [users, serusers]= useState<ResponseUserData[]>([])

    useEffect(() => {

        const getUser = async() => {
                try {
                const responce = await  AxiosService.users()
                serusers(responce.data)
                    
                } catch (error) {
                    console.log(error)
                    alert("მონაცემები ვერ ჩაიტვირთა")
                    
                }
        }
        getUser()
    },[])


    return users
}