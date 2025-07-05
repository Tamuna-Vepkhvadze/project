import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { ConextType, ResponseUserData } from "../interface/Interface";
import { my_axios } from "../conponents/axsios/Axios";
import { useNavigate } from "react-router-dom";

const createCotext = createContext<ConextType>({} as ConextType)


export const AuthContext = ({children}: {children: ReactNode}) => {

    const [auhtUser, setAuthUser] = useState<ResponseUserData | null>(null)
    const [loader, setLoader] = useState<boolean>(true)
    const navigate = useNavigate()

    useEffect(() => {

        const featchUser = async () => {
            try {
                const response = await my_axios.get("/refresh")
                setAuthUser(response.data)

            } catch (error) {
                console.log(error)
                alert("operation filed")
            } finally {
                setLoader(false)
            }
        }

        featchUser()

    }, [])


    const logout = useCallback(() => {
        
            my_axios("/logout")
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