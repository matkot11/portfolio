import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Container from '../Container/Container';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.size.xxl}) {
    flex-direction: column-reverse;
  }
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${({ theme }) => theme.size.xxl}) {
    align-items: center;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 5px;
  width: 70rem !important;
  margin-right: 2rem;
  object-fit: contain;

  @media only screen and (max-width: ${({ theme }) => theme.size.xxl}) {
    margin: 2rem 0 0 0;
  }

  @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
    max-width: 50rem;
  }
`;

const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.aquamarine};
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledProjectName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.aquamarine};
`;

const StyledParagraph = styled.p`
  max-width: 40rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.white};
`;

const StyledSVG = styled.img`
  max-width: 7rem;
  max-height: 7rem;
  margin: 1rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.aquamarine};
  width: max-content;

  :hover {
    color: ${({ theme }) => theme.red};
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsProject {
        nodes {
          image {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          title
          paragraph
          technologies {
            svg {
              url
            }
          }
          pageLink
          githubLink
        }
      }
    }
  `);
  return (
    <>
      <StyledTitle id="projects">My projects</StyledTitle>
      {data.allDatoCmsProject.nodes.map((item) => (
        <Container key={item.title}>
          <StyledWrapper>
            <a href={item.pageLink}>
              <StyledImage fluid={item.image.fluid} />
            </a>
            <StyledInnerWrapper>
              <StyledProjectName>{item.title}</StyledProjectName>
              <StyledParagraph>{item.paragraph}</StyledParagraph>
              <div>
                {item.technologies.map((svg) => (
                  <StyledSVG key={svg.svg.url} src={svg.svg.url} />
                ))}
              </div>
              <>
                <StyledLink href={item.pageLink}>Link to page</StyledLink>
                <StyledLink href={item.githubLink}>Link to Github</StyledLink>
              </>
            </StyledInnerWrapper>
          </StyledWrapper>
        </Container>
      ))}
    </>
  );
};

export default Projects;
