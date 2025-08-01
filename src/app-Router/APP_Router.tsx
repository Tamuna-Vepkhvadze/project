import { Route, Routes } from "react-router-dom"
import Page_Leyout from "../pages/Page_Leyout"
import Home from "../pages/Home"
import Mens_Cothing from "../pages/Mens_Cothing/Mens_Cothing"
import Women_Cothing from "../pages/Women_Cothing/Women_Cothing"
import Jewelery from "../pages/Jewelery/Jewelery"
import Elecktronics from "../pages/Elecktronics/Elecktronics"
import TecnikPage from "../pages/El-Tecnik/TecnikPage"



const APP_Router = () => {
  return (
    
    <Routes>

        <Route path="/" element={<Page_Leyout/>} >
            <Route index element={<Home/>} />
            <Route path="Mens_Cothing" element={<Mens_Cothing/>} />
            <Route path="Women_Cothing" element={<Women_Cothing/>} />
            <Route path="Jewelery" element={<Jewelery/>} />
            <Route path="Elecktronics" element={<Elecktronics/>} />
            <Route path="TecnikPage" element={<TecnikPage/>} />
        </Route>
        

    </Routes>
  )
}

export default APP_Router