import { nanoid } from 'nanoid';
import noPhoto from '../../images/no-photo.png';
import PropTypes from 'prop-types';

import {
  ListCast,
  ItemCast,
  Img,
  Title,
  Text,
  BoldText,
} from './CastList.styled';

const CastList = ({ actorsMovie }) => {
  return (
    <ListCast>
      {actorsMovie.map(({ profile_path, name, character }) => (
        <ItemCast key={nanoid()}>
          {profile_path ? (
            <Img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
              width={300}
              height={450}
            />
          ) : (
            <Img src={noPhoto} alt="No profile" width={300} height={450} />
          )}
          <Title>{name}</Title>
          <Text>
            <BoldText>Character: </BoldText>
            {character}
          </Text>
        </ItemCast>
      ))}
    </ListCast>
  );
};
CastList.propTypes = {
  actorsMovie: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    }).isRequired
  ).isRequired,
};
export default CastList;
