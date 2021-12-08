import React, { Component } from 'react'
import './PageNotFound.css';
import {Link} from "react-router-dom";

export default class PageNotFound extends Component {
 render() {
  return (

<div className="container py-5 continut-pagina-negasita">
    <div className="row">
        <div className="col-md-12">
            <div className="error-template">
                <h1 className="header-shades" data-text="Oops!">
                    Oops!</h1>
                <h2 className="header-shades" data-text="404 Not Found">
                    404 Not Found</h2>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions">
                    <Link to="/" className="buton"><span className="glyphicon glyphicon-home"></span>
                        Take Me Home </Link>
                     {/* <Link to="/contact" className="buton"><span className="glyphicon glyphicon-envelope"></span> Contact Support </Link> */}
                </div>
            </div>
        </div>
    </div>
</div>
  )
 }
}
