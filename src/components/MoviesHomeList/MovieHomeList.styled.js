import { NavLink as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const MoviesList = styled.ul`
  list-style-type: square;
  min-width: 500px;
`;
const NavLink = styled(RouterLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 30px;
  color: white;
  &:hover {
    color: blue;
  }
`;
const MoviesListItem = styled.li`
  margin-bottom: 15px;
  color: white;
  font-style: italic;
`;
export { MoviesList, NavLink, MoviesListItem };
