import React from 'react';
import styled from 'styled-components';
import AboutPage from './about';
import MainPage from './main';
import SkillsPage from './skills';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IndexPage = () => (
  <StyledWrapper>
    <MainPage />
    <AboutPage />
    <SkillsPage />
  </StyledWrapper>
);

export default IndexPage;
