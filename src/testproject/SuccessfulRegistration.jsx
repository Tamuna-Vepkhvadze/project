import { Link } from "react-router-dom"
import css from "./style.module.css"


export const SuccessfulRegistration = () => {
    return(
        <div className={css.SuccessfulVrapper}>

            <h1 className={css.title}>You have successfully registered</h1>
            <Link to={"/"} className={css.SuccessfulButton} >Home Page</Link>
            <Link to={"/validPage"} className={css.SuccessfulButton} >Visit profile</Link>
            
        </div>
    )
}