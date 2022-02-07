import {
  MoviesList,
  NavLink,
  MoviesListItem,
} from '../MoviesHomeList/MovieHomeList.styled';

const MoviesPageList = ({ movies, locationFrom }) => {
  return (
    <MoviesList>
      {movies.map(
        ({ id, title }) =>
          title && (
            <MoviesListItem key={id}>
              <NavLink to={`${id}`} state={{ from: { ...locationFrom } }}>
                {title}
              </NavLink>
            </MoviesListItem>
          )
      )}
    </MoviesList>
  );
};
export default MoviesPageList;
