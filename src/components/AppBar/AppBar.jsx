import { Nav, StyledNavLink } from './AppBarStyled';

export const AppBar = () => {
  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>

      <StyledNavLink to="/tweets">Tweets</StyledNavLink>
    </Nav>
  );
};
