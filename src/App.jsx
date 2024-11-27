import './App.css'
import { Home } from './assets/components/Home/Home'
import { NavBar } from './assets/components/NavBar/NavBar'
import Gallery from './assets/components/Gallery/Gallery'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './assets/components/Footer/Footer'
import LayOut from './assets/components/LayOut/LayOut'
import NotFound from './assets/components/NotFound/NotFound'
import Ux from './assets/components/Ux/Ux'
import Mobile from './assets/components/Mobile/Mobile'
import Web from './assets/components/Web/Web'

function App() {
  let x=createBrowserRouter([
    {path:"",element:<LayOut/>,children:[
    {index:true,element:<Home/>},
    {path:"footer",element:<Footer/>},
    {path:"navbar",element:<NavBar/>},
    {path:"gallery" ,element:<Gallery />,children:[
      {path:"Ux",element:<Ux/>},
      {path:"Mobile",element:<Mobile/>},
      {path:"Web",element:<Web/>},
    ]},
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
