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
import { useVerification } from "./Context/Uzercontext"
import { LoaaderPage } from "./loader"

export const UserList =() => {


    const {user} = useVerification()


    if(!user){
        return(
            <div className={css.SuccessfulVrapper}>
                <h1 className={css.title}>Please sign in to continue</h1>
            </div>
        )
    }


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

if(loader && !data) return <LoaaderPage/>

    return(
      <div>
             <div className={css.projectsSection}>
                    {data 
                    ? (data.map((usList)=>(
                         <div key={usList.id} className={css.project} >
                            <div className={css.cardImg}>
                                <img src= {imagesMap[usList.firstName] || usList.img || user_image }  alt= {usList.firstName} />

                            </div>
                                <div className={css.sectiOnone}>
                                      <h3><span>firstName: </span>{usList.firstName} </h3>
                                        <h3><span>lastName: </span>{usList.lastName} </h3>
                                    </div>
                                        <div className={css.secoundSection}>
                                            <h3><span>email: </span>  {usList.email} </h3>
                                            <h3><span>phone: </span>  {usList.phone} </h3>
                                    </div>
                                
                        </div>
                    )) )
                    :(null)} 
                  </div>
       </div>
      
    )

}