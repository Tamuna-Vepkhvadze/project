import type { ChangeEvent, FormEvent } from "react"
import type { UserValid } from "../../interface/Interface"

interface LoginProps {
  login: UserValid,
  onChange: (e:ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e:FormEvent<HTMLFormElement>) => void
}
const ValidatorForm = ({login, onChange,  onSubmit}: LoginProps) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="email" placeholder="email" value={login.email} onChange={onChange}/>
      <input type="password" name="password" placeholder="password" value={login.password} onChange={onChange}/>
      <button type='submit'>Login</button>
    </form>
  )
}

export default ValidatorForm