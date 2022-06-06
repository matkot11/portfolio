import React from 'react';
import Title from '../Title/Title';
import { StyledWrapper, StyledInnerWrapper, StyledParagraph } from './About.styles';

const About = () => (
  <StyledWrapper id="about">
    <StyledInnerWrapper>
      <Title>A little bit about me</Title>
      <StyledParagraph>
        Third year Computer Science student at De Montfort University and self-thought Frontend
        Developer specialized in React. In the free time I love trying out new technologies.
        Currently I am creating app in React Native. Besides of coding I am huge fan of soulslike
        game genre and cooking dished from all over the world cuisines.
      </StyledParagraph>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default About;
