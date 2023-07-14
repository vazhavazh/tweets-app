import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5cd3a8;
  padding: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  gap: 44px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
 
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;

  &.active {
    font-weight: 600;
  }
`;