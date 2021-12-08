import React, { Component } from 'react'
import Contact from './contactFormGM/Contact'

export default class ContactBook extends Component {
 render() {
  return (
   <div>
         <img class="img" style={{margin:"0", height:"40rem", opacity:"0.7"}} src="images/galeri.jpg" alt="" /> 
     {/* image css from galerie css */}
    {/* <Booking/>
    <Contact/> */}
    <Contact/>
   </div>
  )
 }
}
