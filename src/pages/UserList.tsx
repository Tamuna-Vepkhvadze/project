
import { usegetUserHuk } from '../hook/getUserHook'

const UserList = () => {

  const users = usegetUserHuk()
  
  if(!users) return <h1> Loading...</h1>
  
  return ( 
   <div className="user-list">
  {users.map((uzer) => (
    <div key={uzer._id} className="user-card">
      <div className="user-card__image">
        <img src={uzer.img} alt={uzer.name} />
      </div>
      <div className="user-card__info">
        <p><strong>Name:</strong> {uzer.name}</p>
        <p><strong>LastName:</strong> {uzer.lastName}</p>
        <p><strong>Phone:</strong> {uzer.phone}</p>
        <p><strong>Email:</strong> {uzer.email}</p>
      </div>
    </div>
  ))}
</div>
  )
}

export default UserList
