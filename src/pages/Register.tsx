import { useState } from "react"
import RegisterForm from "../conponents/form/RegisterForm"
import type { UserData } from "../interface/Interface"
import { AxiosService } from "../conponents/axsios/AxiosService"

const Register = () => {

    const [value, setValue] = useState<UserData>({
        name: "",
        lastName: "",
        img: "",
        email: "",
        phone: "",
        password: "",
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setValue((prev) => ({...prev, [name]: value}))
    }


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const reponse = await AxiosService.registration(value)

            if(reponse.status === 200 || reponse.status === 201){
                alert("sucsesful")

                setValue({
                    name: "",
                    lastName: "",
                    img: "",
                    email: "",
                    phone: "",
                    password: "",
                })
            }

        } catch (error) {
            if(error instanceof Error) {
                console.log(error.message)
                alert("reject")
            }
        }
    }


  return (
    <RegisterForm value={value} onChange={onChange} onSubmit={onSubmit} />
  )
}

export default Register