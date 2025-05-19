import { useReciveRequest } from "./hooks/reciveRequest"
import css from "./style.module.css"
import user_image from "../assets/user.png"
import John from "../assets/jon.jpg"
import Aiko from "../assets/aiko.jpg"
import Carlos from  "../assets/carlos.jpg"
import Fatima from "../assets/fatima.jpg"
import Pierre from "../assets/pier.jpg"
import Svetlana from "../assets/svetlana.jpg"
import Raj from "../assets/raj.jpg"
import Maria from "../assets/maria.jpg"
import Chen from "../assets/chen.jpg"
import Nino from "../assets/nino.jpg"

export const UserList =() => {

       const imagesMap = {
        John,
        Aiko,
        Carlos,
        Fatima,
        Pierre,
        Svetlana,
        Raj,
        Maria,
        Chen,
        Nino
      }

const {data, error, loader} = useReciveRequest({url:"http://localhost:3001/users", metodRequest:"GET"})
if(loader && !data) return <p>Loading ...</p>

    return(
      <div>
             <div className={css.projectsSection}>
                    {data 
                    ? (data.map((user)=>(
                         <div key={user.id} className={css.project} >
                            <div className={css.cardImg}>
                                <img src= {imagesMap[user.firstName] || user.img || user_image }  alt= {user.firstName} />

                            </div>
                                <div className={css.sectiOnone}>
                                      <h3><span>firstName: </span>{user.firstName} </h3>
                                        <h3><span>lastName: </span>{user.lastName} </h3>
                                    </div>
                                        <div className={css.secoundSection}>
                                            <h3><span>email: </span>  {user.email} </h3>
                                            <h3><span>phone: </span>  {user.phone} </h3>
                                    </div>
                                
                        </div>
                    )) )
                    :(null)} 
                  </div>
       </div>
      
    )

}