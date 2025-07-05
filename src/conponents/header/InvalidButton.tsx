
import { Link } from 'react-router-dom'
import { useAuthUser } from '../../context/AuthContext'

const InvalidButton = () => {
    const {logout} = useAuthUser()
  
  return (
       <div className="invalid-button">
      <Link to="/Profile">Profile</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default InvalidButton