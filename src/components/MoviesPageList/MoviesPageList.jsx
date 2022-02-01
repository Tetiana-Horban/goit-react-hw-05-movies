import { useState, useEffect } from 'react';
import { fetchSearchMovies } from '../../services/api';
import {
  MoviesList,
  NavLink,
  MoviesListItem,
} from '../MoviesHomeList/MovieHomeList.styled';

const MoviesPageList = ({ searchMovie }) => {
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

  return (
    <MoviesList>
      {movies.map(
        ({ id, title }) =>
          title && (
            <MoviesListItem key={id}>
              <NavLink to={`${id}`}>{title}</NavLink>
            </MoviesListItem>
          )
      )}
    </MoviesList>
  );
};
export default MoviesPageList;
