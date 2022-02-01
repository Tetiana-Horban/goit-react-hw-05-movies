import { useState } from 'react';
import MoviesPageList from '../../components/MoviesPageList/MoviesPageList';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesPageWrapper from './MoviesPage.styled';

const MoviesPage = () => {
  const [searchMovie, setSearchMovies] = useState('');

  const handleFormSubmit = searchMovie => {
    setSearchMovies(searchMovie);
  };
  return (
    <MoviesPageWrapper>
      <SearchBar onSubmit={handleFormSubmit} />
      <MoviesPageList searchMovie={searchMovie} />
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
