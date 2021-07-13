import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin-left: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
`;

export const StyledName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.turquoise};
  margin-bottom: 0.5rem;

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    font-size: 7rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const StyledRole = styled.h1`
  font-size: 4.2rem;
  color: ${({ theme }) => theme.aquamarine};

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    font-size: 6.2rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    font-size: 8.2rem;
  }
`;
