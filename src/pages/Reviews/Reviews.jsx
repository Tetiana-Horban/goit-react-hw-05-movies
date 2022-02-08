import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/api';
import ReviewsList from '../../components/ReviewsList/ReviewsList';
import { Container } from '../../App.styled';

const Reviews = () => {
  let { idMovie } = useParams();
  const [reviewMovie, setReviewMovie] = useState([]);
  useEffect(() => {
    const getReviewMovie = () => {
      fetchMovieReviews(idMovie)
        .then(review => {
          setReviewMovie(review.results);
        })
        .catch(error => console.error('Error:', error));
    };
    getReviewMovie();
  }, [idMovie]);
  return (
    <Container>
      <ReviewsList reviewMovie={reviewMovie} />
    </Container>
  );
};
export default Reviews;
