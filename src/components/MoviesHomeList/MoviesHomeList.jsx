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
export default MoviesHomeList;
