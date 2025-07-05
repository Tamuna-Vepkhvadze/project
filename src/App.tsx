import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserList from "./pages/UserList"
import Contact from "./pages/Contact"
import AppLeyout from "./pages/AppLeyout"
import Register from "./pages/Register"
import Validator from "./pages/Validator"



function App() {


  return (
    <Routes>
      <Route path="/" element={<AppLeyout/>} >
        <Route index element={<Home/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>

      <Route path="/user" element={<UserList/>} />

      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Validator/>} />
      
    </Routes>
     
    
  )
}

export default App
