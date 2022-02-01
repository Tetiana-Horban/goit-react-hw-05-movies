import { nanoid } from 'nanoid';
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
          {reviewMovie.map(review => (
            <ItemReviews key={nanoid()}>
              Authors: <Span>{review.author}</Span>
              <Text>{review.content}</Text>
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
export default ReviewsList;
