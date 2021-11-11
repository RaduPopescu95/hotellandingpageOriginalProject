import React, { Component } from 'react'
import './final.css'

import Navbar from '../../navbar/navbar'


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
   <div>
            <Navbar/>
    
             <div  id = "modal"></div>
    
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

          {/* body content   */}
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

        {/* <div className = "book">
            <form className = "book-form">
                <div className = "form-item">
                    <label for = "checkin-date">Check In Date: </label>
                    <input type = "date" id = "chekin-date">
                </div>
                <div className = "form-item">
                    <label for = "checkout-date">Check Out Date: </label>
                    <input type = "date" id = "chekout-date">
                </div>
                <div className = "form-item">
                    <label for = "adult">Adults: </label>
                    <input type = "number" min = "1" value = "1" id = "adult">
                </div>
                <div className = "form-item">
                    <label for = "children">Children: </label>
                    <input type = "number" min = "1" value = "1" id = "children">
                </div>
                <div className = "form-item">
                    <label for = "rooms">Rooms: </label>
                    <input type = "number" min = "1" value = "1" id = "rooms">
                </div>
                <div className = "form-item">
                    <input type = "submit" className = "btn" value = "Book Now">
                </div>
            </form>
        </div> */}

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
        </section>


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
        {/* end of body content */}
        

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


   </div>
  )
 }
}