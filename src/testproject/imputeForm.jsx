import css from "./style.module.css"

export const InputForm = ({onSubmit, onChange, value}) =>{
    return(
        <form onSubmit={onSubmit} className={css.formIntut}>
            <input name="firstName" placeholder="First Name" value={value.firstName} onChange={onChange}/>
            <input name="lastName" placeholder="Last Name" value={value.lastName} onChange={onChange}/>
            <input name="img" placeholder="Image URL"value={value.img} onChange={onChange} />
            <input name="age" placeholder="Age" value={value.age} onChange={onChange}/>
            <input name="country" placeholder="Country" value={value.country} onChange={onChange}/>
            <input name="city" placeholder="City" value={value.city} onChange={onChange}/>
            <input name="address" placeholder="Address" value={value.address} onChange={onChange}/>
            <input type="Email" name="email" placeholder="Email"  value={value.email} onChange={onChange}/>
            <input name="phone" placeholder="Phone"  value={value.phone} onChange={onChange}/>
            <input type="password" name="password" placeholder="password"value={value.password} onChange={onChange} />
            <input type="password" name="confirmPassword" placeholder="confirmPassword"value={value.confirmPassword} onChange={onChange} />
            <button type="submit" className={css.unputbuttonStyle}>რეგისტრაცია</button>
        </form>
    )
}