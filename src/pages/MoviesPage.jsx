import { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
import MoviesPageList from '../components/MoviesPageList/MoviesPageList';
import SearchBar from '../components/SearchBar/SearchBar';

const MoviesPage = () => {
  const [searchMovie, setSearchMovies] = useState('');

  const handleFormSubmit = searchMovie => {
    setSearchMovies(searchMovie);
  };
  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      <MoviesPageList searchMovie={searchMovie} />
      {/* <Outlet /> */}
      {/* <Routes>
        <Route path="/:movieId" element={<MovieDetailsPage />} />
      </Routes> */}
    </div>
  );
};
export default MoviesPage;
