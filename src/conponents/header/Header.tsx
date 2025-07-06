
import { useAuthUser } from '../../context/AuthContext'
import InvalidButton from './InvalidButton'
import Navigation from './navigation'
import ValidButton from './ValideButton'
import "../../pages/style.css"
import { myAppThema } from '../../store/sincRedux/appThema'
import { useAppDispatch, useAppSelector } from '../../store/hook'


const Header = () => {

  const {auhtUser, loader} = useAuthUser()

  const thema = useAppSelector(state => state.appThema.thema)

  const dispach =useAppDispatch()
  
  if(loader) return <h1>Loading......</h1> 
  
  return (
    <header className="header">
      <div className="header__title">
        <h1>UserBase</h1>
      </div>

      <Navigation />

      <div className="header__buttons">
        {auhtUser?.email ? <InvalidButton /> : <ValidButton />}
      </div>
        <button onClick={() => (dispach(myAppThema()))}>{thema === "dark" ? "🌙" : "☀️" }</button>
    </header>
  )
}

export default Header