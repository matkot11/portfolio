import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../assets/images/backgroundCoffee.jpg';

const StyledWrapper = styled.div`
  min-height: 100vh;
  min-width: calc(100vw - 160px);
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${({ theme }) => theme.size.xl}) {
    width: calc(100vw - 2rem);
  }

  @media only screen and (max-width: 40rem) {
    background-image: none;
  }
`;

const StyledInnerWrapper = styled.div`
  width: calc(100vw - 16rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
    width: 100vw;
  }
`;

const StyledTitle = styled.h2`
  margin: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.aquamarine};
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.white};
  max-width: 70rem;
  background-color: #0b132b;

  @media only screen and (max-width: ${({ theme }) => theme.size.m}) {
    max-width: 50rem;
  }
`;

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
