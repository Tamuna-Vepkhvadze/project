import { useEffect, useState } from "react"

export const useReciveRequest = ({url, metodRequest}) => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        if(!url || !metodRequest){
            setError("url ან მეთოდი არ არის მითითებული")
            return
        }
        setError(null)
        setLoader(true)
        fetch(url, {
            method: metodRequest,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((rovData) =>{
            if(!rovData.ok) throw new Error("operation is feiled")
            return rovData.json()
        })
        .then((resultat) => setData(resultat))
        .catch((error) => setError(error))
        .finally(() => setLoader(false))
    }, [url, metodRequest])
    return{data, loader, error}
}