import Likes from './Likes';
import React, { Component } from 'react'
import Table from './Table'


export default class moviesTable extends Component {
 
 columns = [
  { path: 'title', label: 'Title' },
  { path: 'genre.name', label: 'Genre' },
  { path: 'numberInStock', label: 'Stock' },
  { path: 'dailyRentalRate', label: 'Rate' },
  { 
    key: 'like', 
    content: movie =>( 
      <Likes onToggleLike={() => this.props.onLike(movie)} liked={movie.liked}/> 
    )
  },
  { 
    key: 'delete', 
    content: movie =>
     ( <button 
        className="button btn btn-danger" 
        onClick={() =>this.props.onDelete(movie)}
      >
        Delete
      </button>) 
  },
 ];


 render() {
  const {tableMovies, onLike, onDelete, myMovieList, onSortColumn, onSort} = this.props;
  return (
    <Table 
      columns={this.columns} 
      tableMovies={tableMovies} 
      onSortColumn={onSortColumn} 
      onSort={onSort}
     />
  )
 }
}


