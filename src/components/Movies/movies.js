import React, { Component, Fragment } from 'react'
import reactDom from 'react-dom';
// import Like from './Like'
import Likes from './Likes'
import Pagination from './pagination';
import ListGroup from './ListGroup';
import MoviesTable from './moviesTable';
import _ from 'lodash';

import { getGenres, getGenres2 } from '../../services/fakeGenreService';
import { getMovies } from '../../services/fakeMovieService'
import { paginate } from './utils/Paginate';

export default class movies extends Component {

 state={
  movies:getMovies(),
  genres:getGenres(),
  selectedGenre: getGenres(),
  pageSize: 4,
  currentPage: 1,
  sortColumn: {path:'title', order: 'asc'}
  // genreId: genres._id
 };

 componentDidMount(){
   const allGenres = [{_id:``,name:`All Genres`},...getGenres()];
   this.setState({movies: getMovies(), genres: allGenres});
 }
 
 

 //Like function
 handleLike = movie => {
   const newMoviesList = [...this.state.movies];
   const index = newMoviesList.indexOf(movie);
   newMoviesList[index] = {...newMoviesList[index]};
   newMoviesList[index].liked = !newMoviesList[index].liked;
   this.setState({movies: newMoviesList});
  }

 //Delete function
 handleDelete = film => {
  const newList = this.state.movies.filter(m => m._id != film._id);   
  // newList.length <=8 && newList.length > 4 ? this.setState({movies: newList,currentPage:2})
   this.setState({movies:newList});

 
 }

 //PageChange
 handlePageChange = page => {
   this.setState({currentPage: page});
 }



 //GenreSelect
 handleGenreSelect = selected => {
   this.setState({selectedGenre: selected, currentPage: 1})

 }

 //SortFunction
 handleSort = stColumn => {
    this.setState({sortColumn: stColumn}); 
 };

  getPageData = () =>{
  const {
    pageSize, 
    currentPage, 
    selectedGenre, 
    movies: allMovies, 
    genres, 
    sortColumn
  } = this.state
  const filteredMovies = selectedGenre && selectedGenre._id
    ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
    : allMovies;
  const sorted = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order])
  const moviesPaginated = paginate(sorted, currentPage, pageSize);
  return {totalCount : filteredMovies.length, data: moviesPaginated};
 };

 render() {
  const {length: count} = this.state.movies;
  const {
    pageSize, 
    currentPage, 
    genres, 
    sortColumn
  } = this.state

  if (count === 0) return `Baza de date are ${count} filme`;

  const {totalCount, data} = this.getPageData();
     
     
  return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            onGenreChange={this.handleGenreChange} 
            onGenreSelect={this.handleGenreSelect}
            myGenres={genres}    
            selectedGen={this.state.selectedGenre}        
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies in the database</p>
        
          <MoviesTable 
            tableMovies={data} 
            myMovieList={this.state.movies}
            onLike={this.handleLike}
            onSortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          
          <Pagination 
            itemsCount={totalCount} 
            pageSize={pageSize} 
            onPageChange = {this.handlePageChange} 
            currentPage={currentPage}/>
        </div>
      </div>
   
  )
 }
}
