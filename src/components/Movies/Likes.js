import React, { Component } from 'react'

//input: liked: boolean
//output: onClick

export default function Likes(props){
 
 return (
   <React.Fragment>
    <i onClick={props.onToggleClick} style={{cursor:'pointer'}} className={props.liked ? "fas fa-heart fa-lg" : "far fa-heart fa-lg"}></i>
   </React.Fragment>
  )


}

