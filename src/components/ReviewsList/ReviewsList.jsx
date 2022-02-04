import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  TextInfo,
  ListReviews,
  ItemReviews,
  Text,
  Span,
} from './ReviewsList.styled';

const ReviewsList = ({ reviewMovie }) => {
  return (
    <>
      {reviewMovie.length !== 0 ? (
        <ListReviews>
          {reviewMovie.map(({ author, content }) => (
            <ItemReviews key={nanoid()}>
              Authors: <Span>{author}</Span>
              <Text>{content}</Text>
            </ItemReviews>
          ))}
        </ListReviews>
      ) : (
        <TextInfo>
          Sorry, but we don't have any reviews for this movie.
        </TextInfo>
      )}
    </>
  );
};
ReviewsList.propTypes = {
  reviewMovie: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};
export default ReviewsList;
