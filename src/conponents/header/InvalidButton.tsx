
import { Link } from 'react-router-dom'
import { useAuthUser } from '../../context/AuthContext'

const InvalidButton = () => {
    const {logout} = useAuthUser()
  return (
        <div>
            <Link to={"/profile"} >Profile</Link>
            <button onClick={logout}>Logaut</button>
        </div>
  )
}

export default InvalidButton