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
  /* width: calc(100vw - 16rem); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 .5rem;
`;

export const StyledTitle = styled.h2`
  margin: 1rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.aquamarine};
  text-align: center;
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.white};
  /* max-width: 70rem; */
  background-color: #0b132b;
`;
