import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../services/api';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import { NavLink, List, Item } from './MovieDetailsPage.styled';
import ButtonBack from '../../components/ButtonBack/ButtonBack';

const MovieDetailsPage = () => {
  const location = useLocation();
  console.log(location);
  const navigation = useNavigate();
  let { idMovie } = useParams();
  const [detailsMovie, setDetailsMovie] = useState({});
  let from = location.state?.from?.pathname ?? '/';

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
      <MovieDetailsCard detailsMovie={detailsMovie} />
      <div>
        <List>
          Additional information
          <Item>
            <NavLink to={{ pathname: 'cast' }} state={{ from: location }}>
              Cast
            </NavLink>
          </Item>
          <Item>
            <NavLink to={{ pathname: 'reviews' }} state={{ from: location }}>
              Reviews
            </NavLink>
          </Item>
        </List>
        <Outlet />
      </div>
      <ButtonBack
        onClick={() => {
          navigation(from);
        }}
      />
    </div>
  );
};
export default MovieDetailsPage;
