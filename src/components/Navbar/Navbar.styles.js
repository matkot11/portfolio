import styled from 'styled-components';

export const StyledWrapper = styled.nav`
  display: flex;
  padding-top: 2rem;
  width: 100%;
  text-align: center;
  position: fixed;
  justify-content: center;
  z-index: 9999;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  background-color: #0b132b;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    justify-content: flex-end;
    padding-right: 2rem;
  }
`;

export const StyledItem = styled.li`
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
  margin: 0 0.5rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    color: ${({ theme }) => theme.aquamarine};
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    font-size: 2rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    font-size: 2.2rem;
  }
`;

export const StyledImage = styled.img`
  height: 100%;
`;
