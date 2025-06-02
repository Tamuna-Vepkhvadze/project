import css from "./style.module.css"
import lool from "../assets/lool.png"
import { useLanguage } from "./Context/LanguageContext"
export const AboutPage =() => {

    const {language} = useLanguage()

    const content = {
        ka:{
            welcome: "მოგესალმებით",
            description: "მიმდინარეობს სამუშაოები გვერდი მალე ჩაიტვირთება!"
        },
        en:{
            welcome: "Welcome",
            description: "Work in progress. Page will load soon!"
        }
    }
    
    return(
        <div className={css.aboutseqtion}>
            <div className={css.aboutImgSection}> 
            <img src={lool}alt="lool" />
            </div>

            <div className={css.aboutContantSection}>
            <h1>
                {content[language].welcome} <br/>
                {content[language].description}
            </h1>
            </div>

        </div>
    )

}