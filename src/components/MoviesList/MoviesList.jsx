import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(
        ({ id, title }) =>
          title && (
            <li key={id}>
              <Link to={`movies/:${id}`}>{title}</Link>
            </li>
          )
      )}
    </ul>
  );
};
export default MoviesList;
