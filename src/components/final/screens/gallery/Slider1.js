import React, { Component } from 'react'
import {Container,Row, Col, Image, Card} from 'react-bootstrap'
import './Slider.css'
import {ImageData} from './ImageData'
// import {Link} from 'react-router-dom'

export default class Slider1 extends Component {
 render() {
  return (
  <div>
   <Container className="">
    <Row className="mb-4 container-row">
   
      {/* <Link to={`/product/`}> */}
      {ImageData.map((img, key) => {
       return(
        <Col key={img._id} className="col-container" sm={12} md={6} lg={4} xl={4}>
         <Card.Img className="images hvtxt my-3" src={img.img}/>
           <div className="text t1">Hello World</div>
         <Card.Img/>
        </Col>
       );
      })}
      {/* </Link> */}
    
     
    </Row>
   </Container>
  </div>
  )
 }
}
