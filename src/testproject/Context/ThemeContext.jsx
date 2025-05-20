import { createContext, useContext, useEffect, useMemo, useState } from "react"
import css from "../style.module.css"


const ThemeContext = createContext(null)

export const ThemeVrapper = ({children, localKey = "darckMode", fallback = false}) => {

    const [theme, setTheme] = useState(() => {
        const status = localStorage.getItem(localKey)
        return status ? (JSON.parse(status)) : (fallback)
    })

    const stateValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    useEffect(() => {
        localStorage.setItem(localKey, JSON.stringify(theme))
        if(theme){
            document.body.classList.add(css.darckBody)
        }else{
            document.body.classList.remove(css.darckBody)
        }
    }, [localKey, theme])


    return(
        <ThemeContext.Provider value={stateValue} >
            {children}
        </ThemeContext.Provider>
    )


}

export const useThema = () => useContext(ThemeContext)