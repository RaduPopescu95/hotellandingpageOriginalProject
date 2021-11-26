import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './final.css'

import Pensiune from './screens/Pensiune'
import Booking from './screens/booking/booking'
import Navbar from './screens/navbar/navbar'




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
   <Router>
    <div>
        <Navbar/>
        <Routes>
            <Route exact path='/' component={Pensiune}/>    
            <Route path='/Booking' component={Booking}/>    
        </Routes>
    </div>       
   </Router>
  )
 }
}
