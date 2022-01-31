import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../services/api';
import { Link, Outlet, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import noPoster from '../../images/cinema-image-film.png';

const MovieDetailsPage = () => {
  let { idMovie } = useParams();
  const id = idMovie.replace(/[^0-9]/g, '');
  const [detailsMovie, setDetailsMovie] = useState([]);
  useEffect(() => {
    const getDetailsMovie = () => {
      fetchMovieDetails(id).then(movie => {
        setDetailsMovie(movie);
      });
    };
    getDetailsMovie();
  }, [id]);
  return (
    <div>
      <div>
        {detailsMovie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${detailsMovie.poster_path}`}
            alt={detailsMovie.title}
          />
        ) : (
          <img src={noPoster} alt="No poster" />
        )}
      </div>
      <div>
        <h2>{detailsMovie.title} </h2>
        {detailsMovie.release_date ? (
          <p>({detailsMovie.release_date.slice(0, 4)})</p>
        ) : (
          ''
        )}

        <p>User score {detailsMovie.popularity}%</p>
        <h3>Overview</h3>
        <p>{detailsMovie.overview}</p>
        {detailsMovie.genres ? (
          <ul>
            Genres:
            {detailsMovie.genres.map(genre => (
              <li key={nanoid()}>{genre.name}</li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
      <div>
        <ul>
          Additional information
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetailsPage;
