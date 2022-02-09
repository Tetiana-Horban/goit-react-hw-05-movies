import { fetchTrendingMovies } from '../../services/api';
import { useEffect, useState } from 'react';
import ButtonMore from '../../components/ButtonMore/ButtonMore';
import Loader from '../../components/Loader/Loader';
import PageHeading from '../../components/PageHeading/PageHeading';
import MoviesHomeList from '../../components/MoviesHomeList/MoviesHomeList';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const HomePage = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setStatus(Status.PENDING);
    const getTrendingFilms = () => {
      fetchTrendingMovies(page)
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
    getTrendingFilms();
  }, [page]);

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
    <>
      <PageHeading title={'Tranding today'} />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h1>{error.message}</h1>}
      {status === 'resolved' && <MoviesHomeList movies={movies} />}
      {movies.length > 0 && (
        <ButtonMore label={`More Trending Movies`} onClick={changePage} />
      )}
    </>
  );
};
export default HomePage;
