import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';
import Css from '../../assets/images/skills/css.svg';
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

const StyledRowWrapper = styled.div`
  width: calc(100vw - 16rem);
  display: flex;
  justify-content: center;
`;
const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1.5rem 1.5rem;

  @media only screen and (max-width: ${({ theme }) => theme.size.xl}) {
    flex-direction: column;
  }
`;

const StyledSVGWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
  justify-content: space-evenly;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;

    span {
      font-weight: ${({ theme }) => theme.light};
    }
  }

  img {
    width: 4rem;
    height: 4rem;
    margin: 0.5rem;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.white};
    width: min-content;
    text-align: center;
    font-weight: ${({ theme }) => theme.bold};
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
      <StyledRowWrapper>
        <StyledInnerWrapper>
          <StyledSVGWrapper>
            <div>
              <img src={Html} alt="html" />
              <span>HTML</span>
            </div>
            <span>Intermediate</span>
          </StyledSVGWrapper>
        </StyledInnerWrapper>
        <StyledInnerWrapper>
          <StyledSVGWrapper>
            <div>
              <img src={Css} alt="css" />
              <span>CSS</span>
            </div>
            <span>Expert</span>
          </StyledSVGWrapper>
          <StyledSVGWrapper>
            <div>
              <img src={Sass} alt="sass" />
              <span>SASS</span>
            </div>
            <span>Expert</span>
          </StyledSVGWrapper>
          <StyledSVGWrapper>
            <div>
              <img src={StyledComponents} alt="styled components" />
              <span>Styled Components</span>
            </div>
            <span>Intermediate</span>
          </StyledSVGWrapper>
          <StyledSVGWrapper>
            <div>
              <img src={Tweenmax} alt="gsap" />
              <span>GSAP</span>
            </div>
            <span>Begginer</span>
          </StyledSVGWrapper>
        </StyledInnerWrapper>
        <StyledInnerWrapper>
          <StyledSVGWrapper>
            <div>
              <img src={Javascript} alt="javascript" />
              <span>Javascript</span>
            </div>
            <span>Intermediate</span>
          </StyledSVGWrapper>
          <StyledSVGWrapper>
            <div>
              <img src={ReactSVG} alt="react" />
              <span>React</span>
            </div>
            <span>Intermediate</span>
          </StyledSVGWrapper>
          <StyledSVGWrapper>
            <div>
              <img src={Redux} alt="redux" />
              <span>Redux</span>
            </div>
            <span>Beginner</span>
          </StyledSVGWrapper>
          <StyledSVGWrapper>
            <div>
              <img src={Gatsby} alt="gatsby" />
              <span>Gatsby</span>
            </div>
            <span>Beginner</span>
          </StyledSVGWrapper>
          <StyledSVGWrapper>
            <div>
              <img src={Vue} alt="vue" />
              <span>Vue</span>
            </div>
            <span>Begginer</span>
          </StyledSVGWrapper>
        </StyledInnerWrapper>
      </StyledRowWrapper>
    </Container>
  </StyledWrapper>
);

export default Skills;
