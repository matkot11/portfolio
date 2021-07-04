import styled from 'styled-components';

export const StyledWrapper = styled.div`
  align-self: flex-start;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledName = styled.h1`
  color: ${({ theme }) => theme.turquoise};
font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const StyledRole = styled.h1`
  color: ${({ theme }) => theme.aquamarine};
  font-size: 4.2rem;
`;
