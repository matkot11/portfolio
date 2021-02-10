import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container/Container';
import ReactSVG from '../../assets/images/skills/react.svg';
import Sass from '../../assets/images/skills/sass.svg';
import Gsap from '../../assets/images/skills/tweenmax.svg';

const StyledWrapper = styled.div`
  display: flex;
  /* width: 1300px; */
  align-items: center;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.img`
  border-radius: 5px;
  max-width: 700px;
  margin-right: 20px;
`;

const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.aquamarine};
`;

const StyledParagraph = styled.p`
  max-width: 400px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.white};
`;

const StyledSVG = styled.img`
  max-width: 70px;
  max-height: 70px;
  margin: 10px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.aquamarine};

  :hover {
    color: ${({ theme }) => theme.red};
  }
`;

const Project = ({
  image, title, paragraph, pageLink, githubLink,
}) => (
  <Container>
    <StyledWrapper>
      <StyledImage src={image} alt="foodey" />
      <StyledInnerWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledParagraph>{paragraph}</StyledParagraph>
        <div>
          <StyledSVG src={ReactSVG} alt="react" />
          <StyledSVG src={Sass} alt="sass" />
          <StyledSVG src={Gsap} alt="gsap" />
        </div>
        <>
          <StyledLink href={pageLink}>Link to page</StyledLink>
          <StyledLink href={githubLink}>Link to Github</StyledLink>
        </>
      </StyledInnerWrapper>
    </StyledWrapper>
  </Container>
);

// Project.propTypes = {

// };

export default Project;
