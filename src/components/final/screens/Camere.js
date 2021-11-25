import React, { Component } from 'react'
import './Camere.css'
import Footer from './footer/Footer'

export default class Camere extends Component {
 render() {
  return (
   <section className = "rooms sec-width" id = "rooms">
            <div className = "title">
                <h2>rooms</h2>
            </div>
            <div className = "rooms-container">
                {/* single room */}
                <article className = "room">
                    <div className = "room-image">
                        <img src = "images/img1.jpg" alt = "room image"/>
                    </div>
                    <div className = "room-text">
                        <h3>Luxury Rooms</h3>
                        <ul>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                        <p className = "rate">
                            <span>$99.00 /</span> Per Night
                        </p>
                        <button type = "button" className = "btn">book now</button>
                    </div>
                </article>
                {/* end of single room
                single room */}
                <article className = "room">
                    <div className = "room-image">
                        <img src = "images/img2.jpg" alt = "room image"/>
                    </div>
                    <div className = "room-text">
                        <h3>Luxury Rooms</h3>
                        <ul>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                        <p className = "rate">
                            <span>$99.00 /</span> Per Night
                        </p>
                        <button type = "button" className = "btn">book now</button>
                    </div>
                </article>
                {/* end of single room 
                single room */}
                <article className = "room">
                    <div className = "room-image">
                        <img src = "images/img3.jpg" alt = "room image"/>
                    </div>
                    <div className = "room-text">
                        <h3>Luxury Rooms</h3>
                        <ul>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                        <p className = "rate">
                            <span>$99.00 /</span> Per Night
                        </p>
                        <button type = "button" className = "btn">book now</button>
                    </div>
                </article>
                {/* end of single room  */}
            </div>

            <Footer/>
        </section>


  )
 }
}
