import { useState, useEffect } from 'react';
import { fetchSearchMovies } from '../../services/api';
import MoviesList from '../MoviesList/MoviesList';

const MoviesPageList = ({ searchMovie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchMovie) {
      return;
    }
    const getMovies = () => {
      fetchSearchMovies(searchMovie).then(movies => {
        setMovies(movies.results);
      });
    };
    getMovies();
  }, [searchMovie]);

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};
export default MoviesPageList;
