import React, { Component } from 'react'
import Slider1 from './gallery/Slider1'
import Pagionation from './pagination/Pagionation'
import Carrousel from './Carrousel/Carrousel'
import Header from './header/header'
import './Galerie.css'

export default class Galerie extends Component {
 render() {
  return (
   <React.Fragment> 
     
   <img class="hero__image" src="images/galeri.jpg" alt="" />     
    
   <div className="galerie">    
    <Slider1/>   
   <Pagionation/>
   </div>
   </React.Fragment>
  )
 }
}
