
import { Link } from 'react-router-dom'

const ValidButton = () => {

  interface ButtonType {
    url: string,
    name: string
  }

  const buttonOtions: ButtonType[] = [
    {url: "/register", name: "Register"},
    {url: "/login", name: "Login"}
  ]
   
  return (

        <div>
          {buttonOtions.map((button, index) => 
            <Link to={button.url} key={index} >{button.name} </Link>
          )}
        </div> 
  )
}

export default ValidButton