import React from 'react';
import Css from '../../assets/images/skills/css.svg';
import Nextjs from '../../assets/images/skills/nextjs.svg';
import Html from '../../assets/images/skills/html.svg';
import Javascript from '../../assets/images/skills/javascript.svg';
import ReactSVG from '../../assets/images/skills/react.svg';
import Redux from '../../assets/images/skills/redux.svg';
import Sass from '../../assets/images/skills/sass.svg';
import StyledComponents from '../../assets/images/skills/styled-components.svg';
import Tweenmax from '../../assets/images/skills/tweenmax.svg';
import Title from '../Title/Title';
import {
  StyledWrapper,
  StyledRowWrapper,
  StyledInnerWrapper,
  StyledSVGWrapper
} from './Skills.styles';

const Skills = () => (
  <StyledWrapper id="skills">
    <Title>What I know</Title>
    <StyledRowWrapper>
      <StyledInnerWrapper>
        <StyledSVGWrapper>
          <img src={Html} alt="html" />
          <span>HTML</span>
        </StyledSVGWrapper>
      </StyledInnerWrapper>
      <StyledInnerWrapper>
        <StyledSVGWrapper>
          <img src={Css} alt="css" />
          <span>CSS</span>
        </StyledSVGWrapper>
        <StyledSVGWrapper>
          <img src={Sass} alt="sass" />
          <span>SASS</span>
        </StyledSVGWrapper>
        <StyledSVGWrapper>
          <img src={StyledComponents} alt="styled components" />
          <span>Styled Components</span>
        </StyledSVGWrapper>
        <StyledSVGWrapper>
          <img src={Tweenmax} alt="gsap" />
          <span>GSAP</span>
        </StyledSVGWrapper>
      </StyledInnerWrapper>
      <StyledInnerWrapper>
        <StyledSVGWrapper>
          <img src={Javascript} alt="javascript" />
          <span>Javascript</span>
        </StyledSVGWrapper>
        <StyledSVGWrapper>
          <img src={ReactSVG} alt="react" />
          <span>React</span>
        </StyledSVGWrapper>
        <StyledSVGWrapper>
          <img src={Redux} alt="redux" />
          <span>Redux</span>
        </StyledSVGWrapper>
        <StyledSVGWrapper>
          <img src={Nextjs} alt="nextjs" />
          <span>Next.js</span>
        </StyledSVGWrapper>
      </StyledInnerWrapper>
    </StyledRowWrapper>
  </StyledWrapper>
);

export default Skills;
