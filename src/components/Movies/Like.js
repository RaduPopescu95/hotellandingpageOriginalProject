import React, { Component } from 'react'

//input: liked: boolean
//output: onClick

class Like extends Component {
 

 render() {
  
  return (
   <React.Fragment>
    <i className={this.props.liked ? "fas fa-heart fa-lg" : "far fa-heart fa-lg"}></i>
   </React.Fragment>
  )

 }
}

export default Like;