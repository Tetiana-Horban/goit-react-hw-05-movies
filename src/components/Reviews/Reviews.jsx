import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/api';
import { nanoid } from 'nanoid';

const Reviews = () => {
  let { idMovie } = useParams();
  const id = idMovie.replace(/[^0-9]/g, '');
  const [reviewMovie, setReviewMovie] = useState([]);
  useEffect(() => {
    const getReviewMovie = () => {
      fetchMovieReviews(id).then(review => {
        setReviewMovie(review.results);
      });
    };
    getReviewMovie();
  }, [id]);
  console.log(reviewMovie);
  return (
    <div>
      {reviewMovie.length !== 0 ? (
        <ul>
          {reviewMovie.map(review => (
            <li key={nanoid()}>
              Authors: {review.author}
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, but we don't have any reviews for this movie.</p>
      )}
    </div>
  );
};
export default Reviews;
