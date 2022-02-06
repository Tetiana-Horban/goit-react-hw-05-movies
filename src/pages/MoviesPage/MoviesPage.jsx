import { useState, useEffect } from 'react';
import { fetchSearchMovies } from '../../services/api';
import MoviesPageList from '../../components/MoviesPageList/MoviesPageList';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesPageWrapper from './MoviesPage.styled';

const MoviesPage = () => {
  const [searchMovie, setSearchMovies] = useState('');
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

  const handleFormSubmit = searchMovie => {
    setSearchMovies(searchMovie);
  };
  console.log(movies);

  return (
    <MoviesPageWrapper>
      <SearchBar onSubmit={handleFormSubmit} />
      <MoviesPageList movies={movies} />
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
