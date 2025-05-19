import { createContext, useContext, useMemo, useState } from 'react';

const userContext = createContext(null)

export const ValidationVrapper =({children})=> {
   const  [user, setuser] = useState(null)
   
const value = useMemo(() => ({
    user, setuser
  }), [user])
   return(
  
    < userContext.Provider value={value}>
         {children}
    </userContext.Provider>
   )
}

export const useVerification = () => {
 

    const parametrValue = useContext(userContext)
    if(!parametrValue) throw new Error(" ხელმისაწვდომია მხოლოდ ვერიფიცირებული პირებისთვის")
        return parametrValue
}
