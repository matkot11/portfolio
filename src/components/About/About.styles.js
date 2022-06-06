import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 5rem 0 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 10rem;
  width: 90vw;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.white};
  text-align: center;
  background-color: #0b132b;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 60vw;
    font-size: 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.xl}) {
    width: 50vw;
  }
`;
