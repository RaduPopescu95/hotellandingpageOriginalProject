import React, { Component, Fragment } from 'react'
import reactDom from 'react-dom';
// import Like from './Like'
import Likes from './Likes'
import Pagination from './pagination';
import ListGroup from './ListGroup';

import { getGenres, getGenres2 } from '../../services/fakeGenreService';
import { getMovies } from '../../services/fakeMovieService'
import { paginate } from './utils/Paginate';

export default class movies extends Component {

 state={
  movies:getMovies(),
  genres:getGenres2(),
  pageSize: 4,
  currentPage: 1,
  // genreId: genres._id
 };

 //Like function
 handleClick(movie){
   const newMovies = [...this.state.movies];
   const index = newMovies.indexOf(movie);
   newMovies[index] = {...newMovies[index]};
   newMovies[index].liked = !newMovies[index].liked;
   this.setState({movies: newMovies});
  }

 //Delete function
 handleDelete = film => {
  const newList = this.state.movies.filter(m => m._id != film._id);
  this.setState({movies: newList});
 }

 //PageChange
 handlePageChange = page => {
   this.setState({currentPage: page});
 }

 //GenreChange
 handleGenreChange = gen => {
  //  this.setState({currentPage: page});
  const newGenreList = this.state.genres.map(gi => gi._id != gen._id);
  this.setState({genres: newGenreList});
  console.log("genre changed");
 }

 //GenreSelect
 handleGenreSelect = select => {
   console.log("selected")
 }

 render() {
  const {length: count} = this.state.movies;
  const {pageSize, currentPage, movies: allMovies, genres} = this.state

  if (count == 0) return `Baza de date are ${count} filme`;
  const movies = paginate(allMovies, currentPage, pageSize);
     
     
  return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            onGenreChange={this.handleGenreChange} 
            onGenreSelect={this.handleGenreSelect}
            myGenres={genres}            
          />
        </div>
        <div className="col">
          <p>Showing {count} movies in the database</p>
          <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Handle</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
          {movies.map(movie =>(
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              {/* <td><Like liked={movie.liked}/></td> */}
              <td><Likes onToggleClick={() => this.handleClick(movie)} liked={movie.liked}/></td>               
              <td><button className="button btn btn-danger" onClick={() => this.handleDelete(movie)}>Delete</button></td>
            </tr>
            ))}
          </tbody>
        </table>
        <Pagination 
          itemsCount={count} 
          pageSize={pageSize} 
          onPageChange = {this.handlePageChange} 
          currentPage={currentPage}/>
        </div>
     </div>
   
  )
 }
}
