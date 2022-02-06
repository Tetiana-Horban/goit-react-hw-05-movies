import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../services/api';
import MoviesPageList from '../../components/MoviesPageList/MoviesPageList';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesPageWrapper from './MoviesPage.styled';

const MoviesPage = () => {
  const [search, setSearch] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!search.get('query')) {
      return;
    }
    const getMovies = () => {
      fetchSearchMovies(search.get('query')).then(movies => {
        setMovies(movies.results);
      });
    };
    getMovies();
  }, [search]);

  const handleFormSubmit = searchMovie => {
    setSearch(`?query=${searchMovie}`);
  };

  return (
    <MoviesPageWrapper>
      <SearchBar onSubmit={handleFormSubmit} />
      <MoviesPageList movies={movies} />
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
