import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  width: calc(100vw - 160px);
  position: fixed;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const StyledItem = styled.li`
  color: ${({ theme }) => theme.red};
  font-size: 35px;
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
`;

const Navbar = () => (
  <StyledWrapper>
    <StyledList>
      <StyledItem>About</StyledItem>
      <StyledItem>Projects</StyledItem>
      <StyledItem>Contact</StyledItem>
    </StyledList>
  </StyledWrapper>
);

export default Navbar;
