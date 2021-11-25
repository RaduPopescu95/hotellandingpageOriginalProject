import React, { Component } from 'react'
import './Servicii.css'

export default class Servicii extends Component {
 render() {
  return (
    <section className = "services sec-width" id = "services">
            <div className = "title">
                <h2>services</h2>
            </div>
            <div className = "services-container">
                 {/* single service */}
                <article className = "service">
                    <div className = "service-icon">
                        <span>
                            <i className = "fas fa-utensils"></i>
                        </span>
                    </div>
                    <div className = "service-content">
                        <h2>Food Service/ Food Runner</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                        <button type = "button" className = "btn">Know More</button>
                    </div>
                </article>
                {/* end of single service
                single service  */}
                <article className = "service">
                    <div className = "service-icon">
                        <span>
                            <i className = "fas fa-swimming-pool"></i>
                        </span>
                    </div>
                    <div className = "service-content">
                        <h2>Refreshment</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                        <button type = "button" className = "btn">Know More</button>
                    </div>
                </article>
                {/* end of single service
                single service */}
                <article className = "service">
                    <div className = "service-icon">
                        <span>
                            <i className = "fas fa-broom"></i>
                        </span>
                    </div>
                    <div className = "service-content">
                        <h2>Housekeeping</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                        <button type = "button" className = "btn">Know More</button>
                    </div>
                </article>
                {/* end of single service 
                single service */}
                <article className = "service">
                    <div className = "service-icon">
                        <span>
                            <i className = "fas fa-door-closed"></i>
                        </span>
                    </div>
                    <div className = "service-content">
                        <h2>Room Security</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                        <button type = "button" className = "btn">Know More</button>
                    </div>
                </article>
                {/* end of single service */}
            </div>
        </section>

  )
 }
}
