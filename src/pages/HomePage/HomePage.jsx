import { fetchTrendingMovies } from '../../services/api';
import { useEffect, useState } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import MoviesHomeList from '../../components/MoviesHomeList/MoviesHomeList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(movies => {
        setMovies(movies.results);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <PageHeading title={'Tranding today'} />
      <MoviesHomeList movies={movies} />
    </>
  );
};
export default HomePage;
