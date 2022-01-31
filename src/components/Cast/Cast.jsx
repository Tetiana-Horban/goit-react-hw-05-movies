import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from '../../services/api';
import noPhoto from '../../images/no-photo.png';

const Cast = () => {
  let { idMovie } = useParams();
  const id = idMovie.replace(/[^0-9]/g, '');
  const [actorsMovie, setActorsMovie] = useState([]);
  useEffect(() => {
    const getDetailsMovie = () => {
      fetchMovieActors(id).then(actors => {
        setActorsMovie(actors.cast);
      });
    };
    getDetailsMovie();
  }, [id]);
  return (
    <ul>
      {actorsMovie.map(actor => (
        <li key={nanoid()}>
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
          ) : (
            <img src={noPhoto} alt="No profile" />
          )}
          <h2>{actor.name}</h2>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
