import React from 'react';
// import styled from 'styled-components';
import About from '../components/About/About-component';
import Contact from '../components/Contact/Contact-component';
import Main from '../components/Main/Main-component';
import Projects from '../components/Projects/Projects-component';
import Skills from '../components/Skills/Skills-components';

// const StyledWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

const IndexPage = () => (
  <>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>
);

export default IndexPage;
