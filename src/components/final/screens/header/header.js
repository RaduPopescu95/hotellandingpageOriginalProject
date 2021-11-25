import React, { Component } from 'react'
import './header.css'

export default class header extends Component {
 render() {
  return (
   <div>
    
         <header className = "header" id = "header">
             <div className = "head-top">
                 <div className = "site-name">
                  
                 </div>
                 <div className = "site-nav">
                     
                 </div>
             </div>

             <div className = "head-bottom flex">
                 <h2>NICE AND COMFORTABLE PLACE TO STAY</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est quos veniam impedit numquam itaque voluptatum, dicta asperiores accusamus, eligendi neque ut incidunt, modi harum molestiae atque natus officia minima.</p>
                 <button type = "button" className = "head-btn">GET STARTED</button>
             </div>
         </header>

    
   </div>
  )
 }
}
