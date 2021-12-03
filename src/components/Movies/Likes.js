import React, { Component } from 'react'

//input: liked: boolean
//output: onClick

export default function Likes(props){
 const toggleLike = props.onToggleLike;
 return (
   <React.Fragment>
    <i onClick={toggleLike} style={{cursor:'pointer'}} className={props.liked ? "fas fa-heart fa-lg" : "far fa-heart fa-lg"}></i>
   </React.Fragment>
  )


}

