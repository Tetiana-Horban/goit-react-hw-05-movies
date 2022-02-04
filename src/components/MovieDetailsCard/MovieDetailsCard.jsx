import noPoster from '../../images/cinema-image-film.png';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Text,
  Card,
  Title,
  BoldText,
  List,
  Item,
  DetailsText,
  BorderstyleImg,
} from './MovieDetaiksCard.styled';

const MovieDetailsCard = ({ detailsMovie }) => {
  const { poster_path, title, release_date, popularity, overview, genres } =
    detailsMovie;
  return (
    <Card>
      <div>
        {poster_path ? (
          <BorderstyleImg
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width={300}
            height={450}
          />
        ) : (
          <img src={noPoster} alt="No poster" width={300} height={450} />
        )}
      </div>
      <DetailsText>
        <Title>
          {title} {release_date ? <>({release_date.slice(0, 4)})</> : ''}
        </Title>

        <Text>
          <BoldText>User score:</BoldText> {popularity}%
        </Text>
        <BoldText>Overview</BoldText>
        <Text>{overview}</Text>
        {genres ? (
          <List>
            Genres:
            {genres.map(genre => (
              <Item key={nanoid()}>{genre.name}</Item>
            ))}
          </List>
        ) : (
          ''
        )}
      </DetailsText>
    </Card>
  );
};
MovieDetailsCard.propTypes = {
  detailsMovie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    popularity: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
};
export default MovieDetailsCard;
