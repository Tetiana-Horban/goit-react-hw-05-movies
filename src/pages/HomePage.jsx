import { fetchTrendingMovies } from '../services/api';
import { useEffect, useState } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(movies => {
      setMovies(movies.results);
    });
  }, []);

  return <MoviesList movies={movies} />;
};
export default HomePage;
