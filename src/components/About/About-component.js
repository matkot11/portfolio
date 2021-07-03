import React from 'react';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledTitle,
  StyledParagraph,
} from './About-styles';

const About = () => (
  <StyledWrapper id="about">
    <StyledInnerWrapper>
      <StyledTitle>A little bit about me</StyledTitle>
      <StyledParagraph>
        I code for as long as I can remember. My journey with coding started
        with Arduino and when I realised I love coding I have started looking
        what best fits me and as a result I ended up with Frontend. I am
        learning that for almost two years and still love it. That&apos;s why I
        went to England to study Computer Science in order to further my
        knowledge in coding. I am currently in my first year and besides my
        studies I would like to get experience in work.
      </StyledParagraph>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default About;
