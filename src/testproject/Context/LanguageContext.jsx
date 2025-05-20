import { createContext, useCallback, useContext, useMemo, useState } from "react";

const LanguageContext = createContext(null)


export const LanguageVrapper = ({children}) => {

    const [language, setLanguage] = useState("en")



    const LanguageToggle = useCallback(() => {
        setLanguage((prev) => (prev === "en" ? "ka" : "en"))
    }, [])

    const value = useMemo(() => ({
        language,
        setLanguage,
        LanguageToggle
    }), [language, LanguageToggle])

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )

}

export const useLanguage = () => {
    const context = useContext(LanguageContext)

    if(!context) throw new Error("Language context must be used inside LanguageVrapper");

    return context
    
}