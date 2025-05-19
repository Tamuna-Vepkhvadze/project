import { Link, useLocation } from "react-router-dom"
import user_image from "../assets/user.png"
import css from "./style.module.css"



export const UserProfile = () => {
    const {state} = useLocation()
    if (!state) {
        return <p>მომხმარებელი ვერ მოიძებნა.</p>;
    }

    return(
        <div key={state.id} className={css.userCard}>
            <div className= {css.cardSection}>
                <div className={css.imgSection}>
                    <img src= { state.img || user_image }  alt= {state.firstName} />
                </div>
                <div className={css.contactSection}>
                    <h3><span>firstName: </span>{state.firstName} </h3>
                    <h3><span>lastName: </span>{state.lastName} </h3>
                    <h3><span>age: </span>{state.age} </h3>
                    <h3><span>country: </span>{state.country} </h3>
                    <h3><span>city: </span>{state.city} </h3>
                    <h3><span>address: </span>{state.address} </h3>
                </div>
            </div>
            <div className={css.usContactSection}>
                <h3><span>email: </span>  {state.email} </h3>
                <h3><span>phone: </span>  {state.phone} </h3>
            </div>
            <Link className={css.profileButton} to={"/"}>X</Link>
        </div>
    )
}