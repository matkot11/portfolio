import React from 'react';
import { StyledWrapper, StyledList, StyledItem } from './Navbar-styles';

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
