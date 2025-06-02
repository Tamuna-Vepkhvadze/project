import { useNavigate } from "react-router-dom"
import { useSendRequest } from "./hooks/sendRequest"
import { useState } from "react"
import { InputForm } from "./imputeForm"

export const RegistrationPage = () => {
        const navigate =useNavigate()
        const [userData, setUserData] = useState({
            img: "",
            firstName: "",
            lastName: "",
            age: "",
            country: "",
            city: "",
            address: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        })
        const onChange = (e) => {
            const {name, value} = e.target
            setUserData((prev) => ({
                ...prev, [name]:value
            }))
        }
        const {sendRequest, error, loader} = useSendRequest({url:"http://localhost:3001/users" , metodRequest: "POST"})
        const [validError, setValidError] = useState(null)
        const onSubmit = (e) => {
            e.preventDefault()
            const requiredFields = ["firstName", "lastName", "email", "password", "confirmPassword"];
            for(const res of requiredFields){
                if(!userData[res]){
                    setValidError(`გთხოვ შეავსე: ${res}`)
                    return 
                }
            }
            if(userData.password.length < 5){
                setValidError("პაროლი უნდა იყოს მინიმუმ 5 სიმბოლო")
                return
            }
            if(userData.password !== userData.confirmPassword){
                setValidError("პაროლები არ ემთხვევა")
                return
            }
            setValidError(null)
            sendRequest(userData)
            .then(() => navigate("/successful-registration"))
        }
        if(loader && userData) return <p>Loading...</p>
        if(error) return <p>შეცდომა</p>
        if(validError) <p>{validError.mesege}</p>
    return(
        <>
            {validError && <p style={{ color: "red", marginBottom: "10px" }}>{validError}</p>}
            <InputForm value={userData} onChange={onChange} onSubmit={onSubmit} />
        </>
    )
}
