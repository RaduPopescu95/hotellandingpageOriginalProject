import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
 render() {
  return (
  <footer className = "footer">
            <div className = "footer-container">
                <div>
                    <h2>About Us </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sapiente mollitia doloribus provident? Eos quisquam aliquid vel dolorum, impedit culpa.</p>
                    <ul className = "social-icons">
                        <li className = "flex">
                            <i className = "fab fa-twitter fa-2x"></i>
                        </li>
                        <li className = "flex">
                            <i className = "fab fa-facebook fa-2x"></i>
                        </li>
                        <li className = "flex">
                            <i className = "fab fa-instagram fa-2x"></i>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>Useful Links</h2>
                    <a href = "#">Blog</a>
                    <a href = "#">Rooms</a>
                    <a href = "#">Subscription</a>
                    <a href = "#">Gift Card</a>
                </div>

                <div>
                    <h2>Privacy</h2>
                    <a href = "#">Career</a>
                    <a href = "#">About Us</a>
                    <a href = "#">Contact Us</a>
                    <a href = "#">Services</a>
                </div>

                <div>
                    <h2>Have A Question</h2>
                    <div className = "contact-item">
                        <span>
                            <i className = "fas fa-map-marker-alt"></i>
                        </span>
                        <span>
                            203 Fake St.Mountain View, San Francisco, California, USA
                        </span>
                    </div>
                    <div className = "contact-item">
                        <span>
                            <i className = "fas fa-phone-alt"></i>
                        </span>
                        <span>
                            +84545 37534 48
                        </span>
                    </div>
                    <div className = "contact-item">
                        <span>
                            <i className = "fas fa-envelope"></i>
                        </span>
                        <span>
                            info@domain.com
                        </span>
                    </div>
                </div>
            </div>
        </footer>


  )
 }
}
