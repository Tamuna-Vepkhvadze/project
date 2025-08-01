
import { Outlet } from 'react-router-dom'
import SitBar from '../components/SitBar'

const Page_Leyout = () => {
  return (
    <main className="layout">
      <SitBar />
      <div className="content">
        <Outlet />
      </div>
    </main>
    
  )
}

export default Page_Leyout