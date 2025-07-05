
import { useAuthUser } from '../../context/AuthContext'
import InvalidButton from './InvalidButton'
import Navigation from './navigation'
import ValidButton from './ValideButton'
import "../../pages/style.css"


const Header = () => {

  const {auhtUser, loader} = useAuthUser()
  
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
    </header>
  )
}

export default Header