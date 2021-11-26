import React, { Component } from 'react'
import Navbar from './navbar/navbar'
import Header from './header/header'
import Servicii from './servicii/Servicii'
import Footer from './footer/Footer'
import Slider1 from './gallery/Slider1'


export default class Pensiune extends Component {
 render() {
  return (
   <div>
    <Header/>
    <Servicii/>
    <Slider1/>
   </div>
  )
 }
}
