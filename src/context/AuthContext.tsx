import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { ConextType, ResponseUserData } from "../interface/Interface";
import { useNavigate } from "react-router-dom";
import { AxiosService } from "../conponents/axsios/AxiosService";

const createCotext = createContext<ConextType>({} as ConextType)


export const AuthContext = ({children}: {children: ReactNode}) => {

    const [auhtUser, setAuthUser] = useState<ResponseUserData | null>(null)
    const [loader, setLoader] = useState<boolean>(true)
    const navigate = useNavigate()

    useEffect(() => {

        const featchUser = async () => {
            try {
                const response = await AxiosService.refresh()
               if(response){
                  setAuthUser(response.data.user)
                }

            } catch (error) {
                console.log(error)
                
            } finally {
                setLoader(false)
            }

        }

        featchUser()

    }, [])


    const logout = useCallback(() => {
        
            AxiosService.logout()
            .then(() => setAuthUser(null))
            .then(() => localStorage.removeItem("lokalKey"))
            .then(() => navigate("/login"))
            .catch((err) => console.log(err))

    }, [])

    return (
        <createCotext.Provider value={{auhtUser, setAuthUser, logout, loader}}>
            {children}
        </createCotext.Provider>
    )

}


export const useAuthUser = () => useContext(createCotext)