import { NavLink } from "react-router-dom"


const SitBar = () => {
  return (
    
    <div className="sidebar">
      <NavLink to="/Jewelery" className="link" >Jewelery</NavLink>
      <NavLink to="/Women_Cothing" className="link" >Women Clothing</NavLink>
      <NavLink to="/Mens_Cothing" className="link">Men Clothing</NavLink>
      <NavLink to="/Elecktronics" className="link" >Electronics</NavLink>
      <NavLink to="/TecnikPage" className="link" >all Product</NavLink>
    </div>

  )
}

export default SitBar