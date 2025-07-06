
import { Link } from 'react-router-dom'


const InvalidButton = () => {
  
  
  return (
       <div className="invalid-button">
      <Link to="/Profile">Profile</Link>
      <button>Logout</button>
    </div>
  )
}

export default InvalidButton