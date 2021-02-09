import React from 'react';
import styled from 'styled-components';
import AboutPage from './about';
import MainPage from './main';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IndexPage = () => (
  <StyledWrapper>
    <MainPage />
    <AboutPage />
  </StyledWrapper>
);

export default IndexPage;
