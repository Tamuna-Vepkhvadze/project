
import { useAuthUser } from '../../context/AuthContext'
import InvalidButton from './InvalidButton'
import Navigation from './navigation'
import ValidButton from './ValideButton'


const Header = () => {

  const {auhtUser} = useAuthUser()
  
  if(!auhtUser) return <h1>Loading......</h1> 
  return (
    <div>
        <div>
            <h1>UserBase</h1>
        </div>

            <Navigation/>
            
            {
              auhtUser?.email ? (<InvalidButton/>) : (<ValidButton/>)
            }

        
    </div>
  )
}

export default Header