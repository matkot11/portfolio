import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  align-self: flex-start;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const StyledName = styled.h1`
  color: ${({ theme }) => theme.turquoise};
`;

const StyledRole = styled.h1`
  color: ${({ theme }) => theme.aquamarine};
`;

const MainPage = () => (
  <StyledWrapper>
    <StyledName>Mateusz Kocik</StyledName>
    <StyledRole>Frontend Developer</StyledRole>
  </StyledWrapper>
);

export default MainPage;
