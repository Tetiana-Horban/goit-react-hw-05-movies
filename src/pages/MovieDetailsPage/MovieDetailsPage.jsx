import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../services/api';
import { Outlet, useParams } from 'react-router-dom';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import { NavLink, List, Item } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  let { idMovie } = useParams();
  const [detailsMovie, setDetailsMovie] = useState([]);
  useEffect(() => {
    const getDetailsMovie = () => {
      fetchMovieDetails(idMovie).then(movie => {
        setDetailsMovie(movie);
      });
    };
    getDetailsMovie();
  }, [idMovie]);

  return (
    <div>
      <MovieDetailsCard detailsMovie={detailsMovie} />
      <div>
        <List>
          Additional information
          <Item>
            <NavLink to="cast">Cast</NavLink>
          </Item>
          <Item>
            <NavLink to="reviews">Reviews</NavLink>
          </Item>
        </List>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetailsPage;
