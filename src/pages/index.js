import React from 'react';
import styled from 'styled-components';
import About from '../components/About/About';
import Main from '../components/Main/Main';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IndexPage = () => (
  <StyledWrapper>
    <Main />
    <About />
    <Skills />
    <Projects />
  </StyledWrapper>
);

export default IndexPage;
