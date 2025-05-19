import css from "./style.module.css"
import lool from "../assets/lool.png"
export const AboutPage =() => {
    
    return(
        <div className={css.aboutseqtion}>
            <div className={css.aboutImgSection}> 
            <img src={lool}alt="lool" />
            </div>

            <div className={css.aboutContantSection}>
            <h1>
                მიმდინარეობს სამუშაოები! გვერდი მალე ჩაიტვირთება!...
            </h1>
            </div>

        </div>
    )

}