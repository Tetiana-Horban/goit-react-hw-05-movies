import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../services/api';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import { NavLink, List, Item } from './MovieDetailsPage.styled';
import ButtonBack from '../../components/ButtonBack/ButtonBack';

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigation = useNavigate();
  let { idMovie } = useParams();
  const [detailsMovie, setDetailsMovie] = useState({});
  let fromLink = location?.state?.from ?? '/';

  useEffect(() => {
    const getDetailsMovie = () => {
      fetchMovieDetails(idMovie)
        .then(movie => {
          setDetailsMovie(movie);
        })
        .catch(error => console.error('Error:', error));
    };
    getDetailsMovie();
  }, [idMovie]);

  return (
    <div>
      <ButtonBack
        onClick={() => {
          navigation(fromLink);
        }}
      />

      <MovieDetailsCard detailsMovie={detailsMovie} />
      <div>
        <List>
          Additional information
          <Item>
            <NavLink to="cast" state={{ from: location?.state?.from ?? '/' }}>
              Cast
            </NavLink>
          </Item>
          <Item>
            <NavLink
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </NavLink>
          </Item>
        </List>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetailsPage;
