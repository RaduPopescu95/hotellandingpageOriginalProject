import React, { Component } from 'react'
import './Reviews.css'

export default class Reviews extends Component {
 render() {
  return (
   
        <section className = "customers" id = "customers">
            <div className = "sec-width">
                <div className = "title">
                    <h2>customers</h2>
                </div>
                <div className = "customers-container">
                    {/* single customer */}
                    <div className = "customer">
                        <div className = "rating">
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "far fa-star"></i></span>
                        </div>
                        <h3>We Loved it</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                        <img src = "images/cus1.jpg" alt = "customer image"/>
                        <span>Customer Name, Country</span>
                    </div>
                    {/* end of single customer
                    single customer  */}
                    <div className = "customer">
                        <div className = "rating">
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "far fa-star"></i></span>
                        </div>
                        <h3>Comfortable Living</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                        <img src = "images/cus2.jpg" alt = "customer image"/>
                        <span>Customer Name, Country</span>
                    </div>
                    {/* end of single customer 
                    single customer  */}
                    <div className = "customer">
                        <div className = "rating">
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "far fa-star"></i></span>
                        </div>
                        <h3>Nice Place</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                        <img src = "images/cus3.jpg" alt = "customer image"/>
                        <span>Customer Name, Country</span>
                    </div>
                    {/* end of single customer  */}
                </div>
            </div>
        </section>
  )
 }
}
