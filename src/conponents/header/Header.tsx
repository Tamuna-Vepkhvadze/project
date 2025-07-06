

import InvalidButton from './InvalidButton'
import Navigation from './navigation'
import ValidButton from './ValideButton'
import "../../pages/style.css"
import { myAppThema } from '../../store/sincRedux/appThema'
import { useAppDispatch, useAppSelector } from '../../store/hook'



const Header = () => {



  const thema = useAppSelector(state => state.appThema.thema)

  const dispach =useAppDispatch()
  
   const authuser =useAppSelector(state => state.login.user)

  if(!authuser) return <h1> Loading....</h1>

 
  
  return (
    <header className="header">
      <div className="header__title">
        <h1>UserBase</h1>
      </div>

      <Navigation />


      <div className="header__buttons">
       {  authuser?.email ? <InvalidButton/>: <ValidButton />}
      </div>
        <button onClick={() => (dispach(myAppThema()))}>{thema === "dark" ? "🌙" : "☀️" }</button>
    </header>
  )
}

export default Header