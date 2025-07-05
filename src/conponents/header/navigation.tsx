
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
   <nav className="nav">
      {nav.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            isActive ? 'nav__link nav__link--active' : 'nav__link'
          }
        >
          {item.element}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navigation