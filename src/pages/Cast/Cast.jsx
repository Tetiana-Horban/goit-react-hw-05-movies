import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from '../../services/api';
import CastList from '../../components/CastList/CastList';
import { Container } from '../../App.styled';

const Cast = () => {
  let { idMovie } = useParams();
  const [actorsMovie, setActorsMovie] = useState([]);
  useEffect(() => {
    const getDetailsMovie = () => {
      fetchMovieActors(idMovie)
        .then(actors => {
          setActorsMovie(actors.cast);
        })
        .catch(error => console.error('Error:', error));
    };
    getDetailsMovie();
  }, [idMovie]);
  return (
    <Container>
      <CastList actorsMovie={actorsMovie} />;
    </Container>
  );
};
export default Cast;
