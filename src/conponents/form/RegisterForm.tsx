import React, { type FormEvent } from 'react'
import type { UserData } from '../../interface/Interface'

interface RegisterProps {
    value: UserData
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const RegisterForm = ({value, onChange, onSubmit}: RegisterProps) => {
  return(
        <form className="form" onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="name" value={value.name} onChange={onChange} required />
            <input type="text" name="lastName" placeholder="lastName" value={value.lastName} onChange={onChange} required />
            <input type="text" name="img" placeholder="img" value={value.img} onChange={onChange} required />
            <input type="text" name="phone" placeholder="phone" value={value.phone} onChange={onChange} required />
            <input type="text" name="email" placeholder="email" value={value.email} onChange={onChange} required />
            <input type="password" name="password" placeholder="password" value={value.password} onChange={onChange} required />
            <button type="submit">send</button>
        </form>
    )
}

export default RegisterForm