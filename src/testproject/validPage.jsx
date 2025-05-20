import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useReciveRequest } from "./hooks/reciveRequest"
import css from "./style.module.css"
import { useVerification } from "./Context/Uzercontext"
import { LoaaderPage } from "./loader"





export const ValidPage = () => {
    const [validation, setValidation] = useState({
        email: "",
        password: "",
    })
    const onChange = (e) => {
        const {name, value} = e.target
        setValidation((prev) => ({
            ...prev, [name]: value
        }))
    }
    const navigate = useNavigate() 
    const {data, error, loader} = useReciveRequest({url: "http://localhost:3001/users", metodRequest: "GET"})
    
    const {setuser}=useVerification()
    
    const onSubmit = (e) => {
        e.preventDefault()
        const user = data.find((val) => (
            val.email === validation.email && val.password === validation.password
        ))
        console.log(user)
        if (!user) {
            alert("არასწორი ელ.ფოსტა ან პაროლი");
            return;
        }
       
             setuser(user)
     
     

        let userId = user.id
        navigate(`/profile/${userId}`, {state: user})
    }
    if (loader && !data) return <LoaaderPage/>
    if (error)  return <p>შეცდომა: {error.message}</p>;
    return(
        <div>
            <form onSubmit={onSubmit} className={css.validFormIntut}>
                <input type="Email" name="email" placeholder="Email" value={validation.email} onChange={onChange}/>
                <input type="password" name="password" placeholder="password" value={validation.password} onChange={onChange}/>
                <button type="submit" className={css.unputbuttonStyle}>შესვლა</button>
            </form>
        </div>
    )
}