import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 1px 1px 3px white;
`;

const PageHeading = ({ title }) => {
  return <Title>{title}</Title>;
};
PageHeading.propTypes = {
  title: PropTypes.string,
};
export default PageHeading;
