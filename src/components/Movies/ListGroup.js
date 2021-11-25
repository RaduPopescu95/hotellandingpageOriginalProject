import React from 'react'
import { ListGroup } from 'react-bootstrap';
// import { getGenres } from '../../services/fakeGenreService';

const listGroup = props => {
 const {onGenreChange, onGenreSelect, myGenres, textProperty, valueProperty} = props;
 // const getMyGenres = genres;
 // const genres = getGenres();

 return(
 <React.Fragment>
   <ul className="list-group">
    {myGenres.map(g => (
     <button type="button" key={g[valueProperty]} className="list-group-item list-group-item-action" onClick={() => onGenreChange(g)}>{g[textProperty]}</button>
     ))}      
   </ul>
 </React.Fragment>
  
 );

};

ListGroup.defaultProps = {
   textProperty: "name",
   valueProperty: "_id"
};

export default listGroup;