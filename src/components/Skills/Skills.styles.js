import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 5rem 0 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
  margin: 1rem;
  justify-content: center;
  flex-direction: column;

  img {
    width: 3rem;
    height: 3rem;
    margin: 0.5rem;

    @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
      width: 5rem;
      height: 5rem;
    }

    @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
      width: 6rem;
      height: 6rem;
      margin: 1.5rem;
    }
  }

  span {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.white};
    width: min-content;
    text-align: center;
    font-weight: ${({ theme }) => theme.bold};

    @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
      font-size: 1.5rem;
    }

    @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;
