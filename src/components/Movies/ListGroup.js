import React from 'react'
import { ListGroup } from 'react-bootstrap';
// import { getGenres } from '../../services/fakeGenreService';

const listGroup = ({onGenreSelect, myGenres, textProperty, valueProperty, selectedGen}) => {

 // const getMyGenres = genres;
 // const genres = getGenres();

 return(
 <React.Fragment>
   <ul className="list-group">
    {myGenres.map(gen => (
     <button type="button" key={gen[valueProperty]} className={gen === selectedGen ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action" } onClick={() => onGenreSelect(gen)}>{gen[textProperty]}</button>
     ))}      
   </ul>
 </React.Fragment>
  
 );

};

listGroup.defaultProps = {
   textProperty: "name",
   valueProperty: "_id"
};

export default listGroup;