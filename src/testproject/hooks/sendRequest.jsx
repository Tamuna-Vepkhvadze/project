import { useState } from "react"


export const useSendRequest = ({url, metodRequest}) => {
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    const sendRequest = async (body) => {
        if(!url || !metodRequest){
            setError("url ან მეთოდი არ არის მითითებული")
            return
        }
        setError(null)
        try {
            setLoader(true)
            const sendData = await fetch(url, {
                method: metodRequest,
                headers: {
                    "Content-Type": "application/json"
                },
                body: body ? JSON.stringify(body) : undefined
            })
            if(!sendData.ok) throw new Error("operation is feiled")
            const resultat = await sendData.json()
            return resultat
        } catch (error) {
            setError(error)
        } finally{
            setLoader(false)
        }
    }
    return{sendRequest, loader, error}
}
