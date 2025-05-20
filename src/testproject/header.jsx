import { Link, Outlet } from "react-router-dom"
import logo from "../assets/logo.png"
import userimg from "../assets/user.png"
import css from "./style.module.css"
import { useState } from "react"
import { useVerification } from "./Context/Uzercontext"
import { useThema } from "./Context/ThemeContext"
import { useLanguage } from "./Context/LanguageContext"






export const Header =() => {

    const {theme, setTheme} = useThema()

    const {language, LanguageToggle} = useLanguage()



    const [hiden, sethiden] =useState(false)

    const hidenfuction = () => {
        sethiden((prev) => (!prev))
        
    } 
    const {user, setuser} = useVerification()
    const Logout =() =>{
        setuser(null)
    }

    return(
        <div className={css.headersection}>
            <div className={css.header}>
                <div>
                    <img className= {css.logo}src={logo} alt="logo" />
                </div>


                 <div className={css.navSection}>
                    <Link className ={css.navlink} to= {"/"}>home</Link>
                    <Link className ={css.navlink1} to= {"UserList"}>students list</Link>
                    <Link className ={css.navlink} to= {"AboutPage"}>about us</Link>
                </div>



                 <div className={css.headersectionthree}>

                        <div className={css.MoudeButton}>
                            <button onClick={LanguageToggle} className={ language === "en" ? (css.enFlage) : (css.kaFlage)}> </button>
                        </div>

                        <div className={css.MoudeButton}>
                            <button onClick={() => setTheme((prev) => (!prev))} className={ theme ? (css.lightMode) : (css.darkMode)}> </button>
                        </div>

                
                    {user 
                        ? (<>
                             <p className={css.userName} onClick={hidenfuction}>{user.firstName}</p>
                            {hiden && <div className={css.buttonSection}>
                                <Link className ={`${css.buttonStyle} ${css.blu}`}>profile</Link>
                                <Link className ={`${css.buttonStyle} ${css.blu}`} >Redact</Link>
                                <Link className ={`${css.buttonStyle} ${css.red}`} onClick={Logout}>Logout</Link>
                            </div>}
                            </>
                        )


                        : (
                           
                                 <>
                            <img onClick={hidenfuction} className={css.imgstyle} src={userimg} alt="userimg" />
                          { hiden &&  <div className={css.buttonSection}>
                                <Link className={`${css.buttonStyle} ${css.yellow}`} to={"/validPage"}>Sing In</Link>
                                <Link className ={`${css.buttonStyle} ${css.green}`} to= {"RegistrationPage"}>Sing Up</Link>
                            </div>}
                         </>

                        )}

                    

                     
                      
                       
                     

                </div>

                
            </div>
                   
          
        </div>
        
    )

}