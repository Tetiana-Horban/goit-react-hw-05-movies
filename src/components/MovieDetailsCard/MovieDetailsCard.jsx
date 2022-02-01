import noPoster from '../../images/cinema-image-film.png';
import { nanoid } from 'nanoid';
import {
  Text,
  Card,
  Title,
  BoldText,
  List,
  Item,
  DetailsText,
} from './MovieDetaiksCard.styled';

const MovieDetailsCard = ({ detailsMovie }) => {
  const { poster_path, title, release_date, popularity, overview, genres } =
    detailsMovie;
  return (
    <Card>
      <div>
        {poster_path ? (
          <img
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
export default MovieDetailsCard;
