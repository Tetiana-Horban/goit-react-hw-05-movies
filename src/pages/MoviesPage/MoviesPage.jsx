import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../services/api';
import ButtonMore from '../../components/ButtonMore/ButtonMore';
import MoviesPageList from '../../components/MoviesPageList/MoviesPageList';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesPageWrapper from './MoviesPage.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MoviesPage = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!search.get('query')) {
      return;
    }
    const getMovies = () => {
      fetchSearchMovies(search.get('query'), page)
        .then(movies => {
          setMovies(prevMovies => [...prevMovies, ...movies.results]);
          setStatus(Status.RESOLVED);
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    };
    getMovies();
  }, [page, search]);

  const handleFormSubmit = searchMovie => {
    setSearch(`?query=${searchMovie}`);
  };

  const changePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <MoviesPageWrapper>
      <SearchBar onSubmit={handleFormSubmit} />
      {status === 'rejected' && <h1>{error.message}</h1>}
      {status === 'resolved' && <MoviesPageList movies={movies} />}
      {movies.length > 0 && (
        <ButtonMore label={`More Movies`} onClick={changePage} />
      )}
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
