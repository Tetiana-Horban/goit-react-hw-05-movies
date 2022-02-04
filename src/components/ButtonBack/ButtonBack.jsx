import { Button, Icon } from './ButtonBack.styled';
import PropTypes from 'prop-types';

const ButtonBack = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <Icon size={35} />
      Go back
    </Button>
  );
};

ButtonBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ButtonBack;
