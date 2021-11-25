import React from 'react'
import  _ from 'lodash'
import PropTypes from 'prop-types'
import { Pagination } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';


const pagination = props => {
 const {onPageChange, itemsCount, pageSize, currentPage} = props;
 const pageTotal = Math.ceil(itemsCount/pageSize);
//  if (pageTotal === 1) return null;
 const pages=_.range(1, pageTotal + 1);

 return (
  <nav aria-label="Page navigation example">
     <ul class="pagination">   
        { pages.map(p => (
           <li key={p} className={p === currentPage ? "page-item active" : "page-item"}  ><a onClick={() => onPageChange(p)} class="page-link" href = "#">{p}</a></li>  
        ))}
     </ul>
</nav> )
}

pagination.propTypes = {
   onPageChange:PropTypes.func.isRequired, 
   itemsCount:PropTypes.number.isRequired, 
   pageSize:PropTypes.number.isRequired, 
   currentPage:PropTypes.number.isRequired
};
//propTypes explained:https://reactjs.org/docs/typechecking-with-proptypes.html 

export default pagination
