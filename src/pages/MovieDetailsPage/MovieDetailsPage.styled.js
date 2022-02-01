import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

const NavLink = styled(RouterLink)`
  font-size: 20px;
  text-decoration: none;
  color: white;
  &.active,
  &:hover {
    color: blue;
  }
`;
const List = styled.ul`
  font-size: 25px;
  font-weight: 700;
  padding: 15px;
  color: black;
  border-bottom: 2px double white;
`;
const Item = styled.li`
  list-style: square;
  color: white;
`;
export { NavLink, List, Item };
