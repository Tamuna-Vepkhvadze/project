import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserList from "./pages/UserList"
import Contact from "./pages/Contact"
import AppLeyout from "./pages/AppLeyout"
import Register from "./pages/Register"
import Validator from "./pages/Validator"
import { Profile } from "./pages/profile"
import { ProtectedRoute } from "./pages/protectedRoute"



function App() {


  return (
    <Routes>

      <Route path="/" element={<AppLeyout/>} >
        <Route index element={<Home/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="Profile" element={<Profile/>}/>
      </Route>
      <Route element= {<ProtectedRoute/>}>
         <Route path="/user" element={<UserList/>} />
      </Route>
      

      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Validator/>} />
      
    </Routes>
     
    
  )
}

export default App
