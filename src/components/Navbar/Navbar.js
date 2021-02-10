import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  display: flex;
  width: calc(100vw - 160px);
  position: fixed;
  justify-content: flex-end;
  z-index: 9999;

  @media only screen and (max-width: ${({ theme }) => theme.size.xl}) {
    width: calc(100vw - 20px);
    justify-content: center;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  background-color: #0b132b;
  border-radius: 10px;
  width: max-content;
  padding: 10px;
`;

const StyledItem = styled.li`
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
  margin: 0 10px;

  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    color: ${({ theme }) => theme.aquamarine};
  }
`;

const Navbar = () => (
  <StyledWrapper>
    <StyledList>
      <StyledItem>
        <a href="#about">About</a>
      </StyledItem>
      <StyledItem>
        <a href="#skills">Skills</a>
      </StyledItem>
      <StyledItem>
        <a href="#projects">Projects</a>
      </StyledItem>
      <StyledItem>
        <a href="#contact">Contact</a>
      </StyledItem>
    </StyledList>
  </StyledWrapper>
);

export default Navbar;
