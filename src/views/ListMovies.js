import logo from './../logo.svg';
import './../App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
import Pagination from './Pagination';
import { useEffect, useState } from 'react';

function ListMovies() {

	const [actualPage, setActualPage] = useState(1);
	const [movies, setMovies] = useState([]);
	const TOTAL_BY_PAGE = 4;

	useEffect(() => {
		getMoviesJson();
	},[]);

	/* Get Jeson and replace setmovies por this json */
	const getMoviesJson = async() =>{
		
		let url = 'http://localhost:3004/movies';

		let response = await fetch(url, {
			"method" : "GET",
			"headers" : {
				"Accept" : 'application/json',
				"Content-Type" : 'application/json'
			}
		});

		let json = await response.json();
		setMovies(json);
		
	}

	/*Get number total of pages got for json*/
	const getTotalPages = () =>{
		let totalMovies  = movies.length;
		return Math.ceil(totalMovies / TOTAL_BY_PAGE);
	}

	/* Show many movies for page */
	let moviesForPage = movies.slice(
		(actualPage -1 ) * TOTAL_BY_PAGE, actualPage * TOTAL_BY_PAGE);


  return (
	  <PageWrapper>
		  
		  {moviesForPage.map(movie =>{
			return  <Movie title = {movie.title} score = {movie.score} director = {movie.director} 
					stars={movie.stars} release = {movie.release}
					runtime = {movie.runtime} rating = {movie.rating} img ={movie.img}>
					{movie.description}
					</Movie>	  	
		  })}

		  <Pagination  page = {actualPage} total = {getTotalPages()} onChange={(page) =>{
			setActualPage(page);
		  }}/>

		</PageWrapper>
   
  );
}

export default ListMovies;