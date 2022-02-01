import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from '../../services/api';
import CastList from '../../components/CastList/CastList';

const Cast = () => {
  let { idMovie } = useParams();
  const [actorsMovie, setActorsMovie] = useState([]);
  useEffect(() => {
    const getDetailsMovie = () => {
      fetchMovieActors(idMovie).then(actors => {
        setActorsMovie(actors.cast);
      });
    };
    getDetailsMovie();
  }, [idMovie]);
  return (
    <>
      <CastList actorsMovie={actorsMovie} />;
    </>
  );
};
export default Cast;
