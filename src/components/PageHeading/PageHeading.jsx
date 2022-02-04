import styled from 'styled-components';

const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 1px 1px 3px white;
`;

const PageHeading = ({ title }) => {
  return <Title>{title}</Title>;
};
export default PageHeading;
