import { useState, type ChangeEvent, type FormEvent } from "react"
import ValidatorForm from "../conponents/form/ValidatorForm"
import type { UserValid } from "../interface/Interface"
import { AxiosService } from "../conponents/axsios/AxiosService"
import { useAuthUser } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Validator = () => {

  const {setAuthUser} = useAuthUser()
  const navigate = useNavigate()

  const [login, setLogin] = useState<UserValid>({
    email: "",
    password: ""
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setLogin((prev) => ({
      ...prev, [name]: value
    }))
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await AxiosService.login(login)
      localStorage.setItem("lokalKey", response.data.accessToken)
      setAuthUser(response.data.user)
      setLogin({
        email: "",
        password: ""
      })
      navigate("/")

    } catch (error) {
      console.log(error)
      alert("პაროლი ან ელფოსტა არასწორია")
    }
  }

  return (
    <ValidatorForm login={login} onChange={onChange} onSubmit={onSubmit}/>
  )
}

export default Validator