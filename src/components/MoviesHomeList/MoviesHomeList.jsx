import PropTypes from 'prop-types';
import {
  MoviesList,
  NavLink,
  MoviesListItem,
} from '../MoviesHomeList/MovieHomeList.styled';

const MoviesHomeList = ({ movies }) => {
  return (
    <MoviesList>
      {movies.map(
        ({ id, title }) =>
          title && (
            <MoviesListItem key={id}>
              <NavLink to={`movies/${id}`}>{title}</NavLink>
            </MoviesListItem>
          )
      )}
    </MoviesList>
  );
};
MoviesHomeList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};
export default MoviesHomeList;
