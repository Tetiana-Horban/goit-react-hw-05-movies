import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from './images/background.jpg';
import { NavLink as RouterLink } from 'react-router-dom';

const NavLink = styled(RouterLink)`
  text-decoration: none;
  font-size: 40px;
  font-weight: 700;
  color: black;
  &:first-child {
    margin-right: 100px;
  }

  &.active,
  &:hover {
    color: blue;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 15px;
  margin: 0 auto;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { GlobalStyle, AppWrapper, NavLink };
