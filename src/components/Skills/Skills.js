import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';
import Css from '../../assets/images/skills/css.svg';
import Firebase from '../../assets/images/skills/firebase.svg';
import Gatsby from '../../assets/images/skills/gatsby.svg';
import Html from '../../assets/images/skills/html.svg';
import Javascript from '../../assets/images/skills/javascript.svg';
import ReactSVG from '../../assets/images/skills/react.svg';
import Redux from '../../assets/images/skills/redux.svg';
import Sass from '../../assets/images/skills/sass.svg';
import StyledComponents from '../../assets/images/skills/styled-components.svg';
import Tweenmax from '../../assets/images/skills/tweenmax.svg';
import Vue from '../../assets/images/skills/vue.svg';

const StyledWrapper = styled.div`
  min-height: 100vh;
`;

const StyledSVGWrapper = styled.div`
  @media only screen and (max-width: ${({ theme }) => theme.size.xl}) {
    display: flex;
  }
`;
const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: max-content;

  & > * {
    width: 8.5rem;
    height: 8.5rem;
    margin: 1.5rem 1.5rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.size.xl}) {
    flex-direction: column;
  }
`;

const StyledTitle = styled.h2`
  margin: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.aquamarine};
`;

const Skills = () => (
  <StyledWrapper id="skills">
    <Container>
      <StyledTitle>What I know</StyledTitle>
      <StyledSVGWrapper>
        <StyledInnerWrapper>
          <img src={Html} alt="html" />
        </StyledInnerWrapper>
        <StyledInnerWrapper>
          <img src={Css} alt="html" />
          <img src={Sass} alt="html" />
          <img src={StyledComponents} alt="html" />
          <img src={Tweenmax} alt="html" />
        </StyledInnerWrapper>
        <StyledInnerWrapper>
          <img src={Javascript} alt="html" />
          <img src={ReactSVG} alt="html" />
          <img src={Redux} alt="html" />
          <img src={Gatsby} alt="html" />
          <img src={Vue} alt="html" />
          <img src={Firebase} alt="html" />
        </StyledInnerWrapper>
      </StyledSVGWrapper>
    </Container>
  </StyledWrapper>
);

export default Skills;
