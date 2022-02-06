import PropTypes from 'prop-types';
import Button from './ButtonMore.styled';

const ButtonMore = ({ onClick, label }) => {
  return (
    <Button type="button" onClick={onClick}>
      {label}
    </Button>
  );
};
ButtonMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonMore;
