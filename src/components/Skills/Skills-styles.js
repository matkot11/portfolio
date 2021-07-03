import styled from 'styled-components';

export const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
export const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin: 0.5rem 0.5rem;
`;

export const StyledSVGWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-left: 1rem; */

  img {
    width: 3rem;
    height: 3rem;
    margin: 0.5rem;
  }

  span {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.white};
    width: min-content;
    text-align: center;
    font-weight: ${({ theme }) => theme.bold};
  }
`;

export const StyledTitle = styled.h2`
  /* margin: 1rem; */
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  color: ${({ theme }) => theme.aquamarine};
  width: max-content;
`;
