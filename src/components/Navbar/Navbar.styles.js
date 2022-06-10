import styled from 'styled-components';

export const StyledWrapper = styled.nav`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  text-align: center;
  position: fixed;
  justify-content: center;
  z-index: 9999;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    padding: 2rem 2rem 0 0;
    justify-content: flex-end;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  background-color: #0b132b;
  border-radius: 5px;
`;

export const StyledItem = styled.li`
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
  margin: 0.5rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    color: ${({ theme }) => theme.aquamarine};
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    font-size: 2.2rem;
  }
`;

export const StyledSvg = styled.svg`
  height: 100%;
  width: ${({ theme }) => theme.fontSize.s};
  fill: ${({ theme }) => theme.red};

  :hover {
    fill: ${({ theme }) => theme.aquamarine};
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 2.2rem;
  }
`;
