import { NavBar } from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function LayOut() {
  return (
    <div>
        <NavBar/>     
        <Outlet></Outlet>
        <Footer/>
        </div>
  )
}
