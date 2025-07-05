
import Header from '../conponents/header/Header'
import { Outlet } from 'react-router-dom'

const AppLeyout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default AppLeyout