
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import OurWork from './components/OurWork/OurWork'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import NotFound from './components/NotFound/NotFound'

function App() {
let x =createBrowserRouter([
{path:"",element:<LayOut/>,children:[
{index:true,element:<Home/>},
{path:"About",element:<About/>},
{path:"Contact",element:<Contact/>},
{path:"OurWork",element:<OurWork/>},
{path:"Footer",element:<Footer/>},
{path:"NavBar",element:<NavBar/>},
{path:"*",element:<NotFound/>}
]}

])
  return (
    <>
     <RouterProvider router={x}>


</RouterProvider>
    </>
  )
}

export default App
