import { NavLink } from '../../App.styled';
import NavigationWrapper from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavLink to="/" exact="true">
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </NavigationWrapper>
  );
};
export default Navigation;
