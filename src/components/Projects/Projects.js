import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10rem;

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

const StyledRowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSVGWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;

  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.white};
    width: min-content;
    text-align: center;
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
  max-width: 4rem;
  max-height: 4rem;
  margin: 1rem;
`;

const StyledLink = styled.a`
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

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsProject {
        nodes {
          image {
            fluid(maxWidth: 700) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          title
          paragraph
          technologies {
            svg {
              url
            }
            svgName
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
        <StyledWrapper key={item.title}>
          <a href={item.pageLink}>
            <StyledImage fluid={item.image.fluid} alt="project" />
          </a>
          <StyledInnerWrapper>
            <StyledProjectName>{item.title}</StyledProjectName>
            <StyledParagraph>{item.paragraph}</StyledParagraph>
            <StyledRowWrapper>
              {item.technologies.map((svg) => (
                <StyledSVGWrapper key={svg.svg.url}>
                  <StyledSVG src={svg.svg.url} alt={svg.svgName} />
                  <span>{svg.svgName}</span>
                </StyledSVGWrapper>
              ))}
            </StyledRowWrapper>
            <>
              <StyledLink href={item.pageLink}>Link to page</StyledLink>
              <StyledLink href={item.githubLink}>Link to Github</StyledLink>
            </>
          </StyledInnerWrapper>
        </StyledWrapper>
      ))}
    </>
  );
};

export default Projects;
