
import loader from "../assets/loader.gif"
import css from "./style.module.css"
export const Loaader = () => {
return(
    <div className={css.container}>
        <img className={css.loaderimg} src={loader} alt="loader" />
    </div>
)
}