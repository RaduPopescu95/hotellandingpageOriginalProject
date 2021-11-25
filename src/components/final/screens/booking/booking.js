import React, { Component } from 'react'
import './booking.css'

export default class booking extends Component {
 render() {
  return (
   
        <div className = "book">
            <form className = "book-form">
                <div className = "form-item">
                    <label for = "checkin-date">Check In Date: </label>
                    <input type = "date" id = "chekin-date"/>
                </div>
                <div className = "form-item">
                    <label for = "checkout-date">Check Out Date: </label>
                    <input type = "date" id = "chekout-date"/>
                </div>
                <div className = "form-item">
                    <label for = "adult">Adults: </label>
                    <input type = "number" min = "1" value = "1" id = "adult"/>
                </div>
                <div className = "form-item">
                    <label for = "children">Children: </label>
                    <input type = "number" min = "1" value = "1" id = "children"/>
                </div>
                <div className = "form-item">
                    <label for = "rooms">Rooms: </label>
                    <input type = "number" min = "1" value = "1" id = "rooms"/>
                </div>
                <div className = "form-item">
                    <input type = "submit" className = "btn" value = "Book Now"/>
                </div>
            </form>
        </div>

  )
 }
}
