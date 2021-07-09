import styled from 'styled-components';
import BackgroundImage from '../../assets/images/backgroundCoffee.jpg';

export const StyledWrapper = styled.div`
  min-height: 100vh;
  /* min-width: calc(100vw - 160px); */
  /* background-image: url(${BackgroundImage}); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
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

export const StyledTitle = styled.h2`
  margin-bottom: 3rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.aquamarine};
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StyledParagraph = styled.p`
  width: 90vw;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.white};
  background-color: #0b132b;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 60vw;
    font-size: 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.xl}) {
    width: 50vw;
  }
`;
