import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import './Pagination.css'

function Pagionation() {
 return (
  <Pagination  className="pag mb-5 justify-content-center">
  {/* <Pagination.First /> */}
  {/* <Pagination.Prev /> */}
 
  {/* <Pagination.Ellipsis /> */}
  <Pagination.Item className="page mx-3">{1}</Pagination.Item>
  <Pagination.Item className="page mx-3">{2}</Pagination.Item>
  <Pagination.Item className="page mx-3">{3}</Pagination.Item>
  <Pagination.Item className="page mx-3">{4}</Pagination.Item>
  <Pagination.Item className="page mx-3">{5}</Pagination.Item>
  

  {/* <Pagination.Ellipsis /> */}
 
  {/* <Pagination.Next /> */}
  {/* <Pagination.Last /> */}
</Pagination>
 )
}

export default Pagionation
