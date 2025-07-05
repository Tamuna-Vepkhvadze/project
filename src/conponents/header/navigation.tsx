
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    interface NavType {
        path: string,
        element: string
    }
    const nav:NavType[] = [
        {path: "/", element: "Home"},
        {path: "/user", element: "Users"},
        {path: "/contact", element: "Contact"},
    ]
  return (
    <nav>
        {nav.map((nav, index) => 
            <NavLink key={index} to={nav.path}>{nav.element} </NavLink>
        )}
    </nav>
  )
}

export default Navigation