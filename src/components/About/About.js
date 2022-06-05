import React from 'react';
import Title from '../Title/Title';
import { StyledWrapper, StyledInnerWrapper, StyledParagraph } from './About.styles';

const About = () => (
  <StyledWrapper id="about">
    <StyledInnerWrapper>
      <Title>A little bit about me</Title>
      <StyledParagraph>
        Exceptionally creative self-taught Fronted Developer specialized in React. In addition to
        being knowledgeable about a wide variety of computer languages, I am also skilled in the
        principles of website development and maintenance. I am hard working person with strong
        communication and teamwork skills.
      </StyledParagraph>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default About;
