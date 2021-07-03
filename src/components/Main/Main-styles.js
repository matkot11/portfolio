import styled from 'styled-components';

export const StyledWrapper = styled.div`
  align-self: flex-start;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StyledName = styled.h1`
  color: ${({ theme }) => theme.turquoise};
`;

export const StyledRole = styled.h1`
  color: ${({ theme }) => theme.aquamarine};
`;
