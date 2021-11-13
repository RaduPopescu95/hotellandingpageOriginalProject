import React, { Component } from 'react'
import { Container, Button, Badge, ListGroup } from 'react-bootstrap'
import './renders.css'
import './bootstrap.min.css'


export default class renders extends Component {

 state = {
  count: 2,
  tags : ['tag1', 'tag2', 'tag3']
  
 };

 render() {

  return (
   <div>
     { this.state.tags.length === 0 && 'Please create a new tag' }
     {this.renderTags()}
   </div>

  )
 }



 handleIncrement = (e) => {
  console.log(e);
  this.setState({ count: this.state.count + 1 })
 }

 renderTags(){
  if(this.state.tags.length === 0) return <p>There are no tags</p>;

  return (
   
<ListGroup as="ul" variant="flush">
 {this.state.tags.map(tag => <ListGroup.Item key={tag} as="li">{tag}</ListGroup.Item>)}
  <ListGroup.Item as="li" >
    <Button onClick={() => {
         this.handleIncrement({id:1});
         }
        } 
       variant="primary">
      {this.formatCount()}
     <span className="visually-hidden">unread messages</span>
    </Button>
  </ListGroup.Item>
</ListGroup>
  );

 }

 getBg() {
  let bg = "";
  bg += (this.state.count === 0) ? "danger" : "primary";
  return bg;
 }
 

  formatCount(){
   const {count} = this.state;
   return count === 0 ? <span>Zero</span> : <Badge className="p-2" style={{fontSize:20}} bg={this.getBg()}>Add {count}</Badge>;
  }
}
