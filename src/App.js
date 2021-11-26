import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pensiune from './components/final/screens/Pensiune'
import Camere from './components/final/screens/Camere'
import Movies from './components/Movies/movies';
import Navbar from './components/final/screens/navbar/navbar';





import './App.css';
import header from './components/final/screens/header/header';
import Slider1 from './components/final/screens/gallery/Slider1';
import Footer from './components/final/screens/footer/Footer';
import Galerie from './components/final/screens/Galerie';

export default class App extends Component {

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

  render(){
      return (
      <Router>  
        <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Pensiune/>} exact/>
            <Route path="/camere" element={<Camere/>} exact/>
            <Route path="/galerie" element={<Galerie/>} exact/>
          </Routes>
        </div>
        <Footer/>
      </Router>
      );
    }
}


