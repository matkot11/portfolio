import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Container from '../Container/Container';
// import FaceImage from '../../assets/images/face.png';
import BackgroundImage from '../../assets/images/backgroundCoffee.png';

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: calc(100vw - 160px);
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledInnerWrapper = styled.div`
  width: calc(100vw - 16rem);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
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

const StyledImage = styled(Image)`
  width: 50rem;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "face" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <StyledWrapper id="about">
      <Container>
        <StyledInnerWrapper>
          <div>
            <StyledTitle>A little bit about me</StyledTitle>
            <StyledParagraph>
              I code for as long as I can remember. My journey with coding
              started with Arduino and when I realised I love coding I have
              started looking what best fits me and as a result I ended up with
              Frontend. I am learning that for almost two years and still love
              it. That&apos;s why I went to England to study computer science in
              order to further my knowledge in coding. I am currently in my
              first year and besides my studies I would like to get experience
              in work.
            </StyledParagraph>
          </div>
          <StyledImage fluid={data.file.childImageSharp.fluid} alt="face" />
        </StyledInnerWrapper>
      </Container>
    </StyledWrapper>
  );
};
export default About;
