import { useState, type ChangeEvent, type FormEvent } from "react"
import ValidatorForm from "../conponents/form/ValidatorForm"
import type { UserValid } from "../interface/Interface"
import { useNavigate } from "react-router-dom"
import { useAppDispatch} from "../store/hook"
import { posttank } from "../store/asincRedux/postthank/posttank"


const Validator = () => {

  const dispach = useAppDispatch()


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
       await dispach(posttank(login )).unwrap()
      
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