import React, { Component } from 'react'
import './final.css'

import Pensiune from './screens/Pensiune'
import Booking from './screens/booking/booking'




export default class final extends Component {

 
    state = {
    isActive : false
    
    }

    handleToggle = () =>{
        const tog = this.setState({ isActive: !this.state.isActive});
        return tog;
    };

    getNavClasses = () => {
        let showNavClass = "sidenav";
        showNavClass += this.state.isActive ? "show" : "";
        return showNavClass;
    }



 render() {
  return (
   <React.Fragment>
    <Pensiune/>
    
             
        

 
   </React.Fragment>
  )
 }
}
