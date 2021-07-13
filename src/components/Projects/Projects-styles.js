import styled from 'styled-components';
import Image from 'gatsby-image';

export const StyledWrapper = styled.div`
  margin: 5rem 0 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    flex-direction: row-reverse;
    margin: 1rem;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    margin-bottom: 3rem;
  }
`;

export const StyledRowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSVGWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;

  span {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.white};
    width: min-content;
    text-align: center;

    @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
      font-size: 1.5rem;
      height: 5rem;
    }
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 5px;
  width: 90vw;
  object-fit: contain;
  margin-bottom: 5rem;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 50vw;
  }
`;

export const StyledTitle = styled.h3`
  margin-bottom: 6rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.aquamarine};
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StyledProjectName = styled.h3`
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  color: ${({ theme }) => theme.aquamarine};
`;

export const StyledParagraph = styled.p`
  width: 90vw;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.white};

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 30vw;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    font-size: 2.1rem;
  }
`;

export const StyledSVG = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 4rem;
    height: 4rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    width: 5rem;
    height: 5rem;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.aquamarine};
  width: max-content;
  margin: 1rem;

  :hover {
    color: ${({ theme }) => theme.red};
  }
`;
