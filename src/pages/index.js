import React from 'react';
import About from '../components/About/About-component';
import Contact from '../components/Contact/Contact-component';
import Main from '../components/Main/Main-component';
import Projects from '../components/Projects/Projects-component';
import Skills from '../components/Skills/Skills-components';

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
