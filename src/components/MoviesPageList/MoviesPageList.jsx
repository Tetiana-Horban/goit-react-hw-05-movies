import { useLocation } from 'react-router-dom';
import {
  MoviesList,
  NavLink,
  MoviesListItem,
} from '../MoviesHomeList/MovieHomeList.styled';

const MoviesPageList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <MoviesList>
      {movies.map(
        ({ id, title }) =>
          title && (
            <MoviesListItem key={id}>
              <NavLink
                to={{
                  pathname: `${id}`,
                }}
                state={{
                  from: {
                    ...location,
                    pathname: location.pathname + location.search,
                  },
                }}
              >
                {title}
              </NavLink>
            </MoviesListItem>
          )
      )}
    </MoviesList>
  );
};
export default MoviesPageList;
