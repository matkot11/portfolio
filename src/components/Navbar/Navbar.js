import React from 'react';
import { StyledWrapper, StyledList, StyledItem, StyledImage } from './Navbar.styles';
import LinkedinLogo from '../../assets/images/logos/linkedin.svg';
import GithubLogo from '../../assets/images/logos/github.svg';

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
      <StyledItem>
        <a
          href="https://www.linkedin.com/in/mateusz-kocik-a27439193/"
          target="_blank"
          rel="noreferrer">
          <StyledImage src={LinkedinLogo} alt="Linkedin" />
        </a>
      </StyledItem>
      <StyledItem>
        <a href="https://github.com/matkot11" target="_blank" rel="noreferrer">
          <StyledImage src={GithubLogo} alt="Github" />
        </a>
      </StyledItem>
    </StyledList>
  </StyledWrapper>
);

export default Navbar;
