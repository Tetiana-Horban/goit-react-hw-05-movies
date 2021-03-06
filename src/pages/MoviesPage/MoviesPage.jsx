import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../services/api';
import ButtonMore from '../../components/ButtonMore/ButtonMore';
import MoviesPageList from '../../components/MoviesPageList/MoviesPageList';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesPageWrapper from './MoviesPage.styled';
import { Container } from '../../App.styled';

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
  const location = useLocation();
  const query = search.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus(Status.PENDING);
    const getMovies = () => {
      fetchSearchMovies(query, page)
        .then(movies => {
          setMovies(prevMovies => [...prevMovies, ...movies.results]);
          setStatus(Status.RESOLVED);
          scrollToButton();
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    };
    getMovies();
  }, [page, query]);
  const handleFormSubmit = searchMovie => {
    setSearch(`?query=${searchMovie}`);
  };
  const changePage = () => {
    setPage(prevPage => prevPage + 1);
  };
  const scrollToButton = () => {
    window.scrollBy({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <MoviesPageWrapper>
        <SearchBar onSubmit={handleFormSubmit} />
        {status === 'rejected' && <h1>{error.message}</h1>}
        {status === 'resolved' && (
          <MoviesPageList movies={movies} locationFrom={location} />
        )}
        {movies.length > 0 && (
          <ButtonMore label={`More Movies`} onClick={changePage} />
        )}
      </MoviesPageWrapper>
    </Container>
  );
};
export default MoviesPage;
