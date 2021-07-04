import styled from 'styled-components';

export const StyledWrapper = styled.nav`
  display: flex;
  /* width: calc(100vw - 160px); */
  margin-top: 2rem;
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
  border-radius: 10px;
  width: max-content;
  padding: .5rem;
`;

export const StyledItem = styled.li`
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
  margin: 0 .5rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    color: ${({ theme }) => theme.aquamarine};
  }
`;
