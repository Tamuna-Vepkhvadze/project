import { useAppSelector } from "../store/hook"


export const Profile = () => {
 
   
const auhtUser = useAppSelector(state => state.login.user)
if(!auhtUser) return <h1>Loading ...</h1>
    return(
      

      
        <div className="profile">
      {auhtUser && (
        <div className="profile__card">
          <div className="profile__image">
            <img src={auhtUser.img} alt={auhtUser.name} />
          </div>
          <div className="profile__info">
            <p><strong>Name:</strong> {auhtUser.name}</p>
            <p><strong>Lastname:</strong> {auhtUser.lastName}</p>
            <p><strong>Phone:</strong> {auhtUser.phone}</p>
            <p><strong>Email:</strong> {auhtUser.email}</p>
          </div>
        </div>
      )}
    </div>
    )
}