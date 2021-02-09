import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container/Container';

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.aquamarine};
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.white};
  max-width: 700px;
`;

const AboutPage = () => (
  <Container>
    <StyledTitle>A little bit about me</StyledTitle>
    <StyledParagraph>
      I code for as long as I can remember. My journey with coding started with
      Arduino and when I realised I love coding I have started looking what best
      fits me and as a result I ended up with Frontend. I am learning that for
      almost two years and still love it. That&apos;s why I went to England to
      study computer science in order to further my knowledge in coding. I am
      currently in my first year and besides my studies I would like to get
      experience in work.
    </StyledParagraph>
  </Container>
);

export default AboutPage;
