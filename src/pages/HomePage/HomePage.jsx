import { fetchTrendingMovies } from '../../services/api';
import { useEffect, useState } from 'react';
import MoviesHomeList from '../../components/MoviesHomeList/MoviesHomeList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(movies => {
      setMovies(movies.results);
    });
  }, []);

  return <MoviesHomeList movies={movies} />;
};
export default HomePage;
