import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export default function LayOut() {
  return (
    <div>
        <NavBar/>
       
       <LayOut></LayOut>
        <Footer/>
    </div>
  )
}
