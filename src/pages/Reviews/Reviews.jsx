import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/api';
import ReviewsList from '../../components/ReviewsList/ReviewsList';

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
  return <ReviewsList reviewMovie={reviewMovie} />;
};
export default Reviews;
