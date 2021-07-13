import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  StyledImage,
  StyledInnerWrapper,
  StyledLink,
  StyledParagraph,
  StyledProjectName,
  StyledRowWrapper,
  StyledSVG,
  StyledSVGWrapper,
  StyledTitle,
  StyledWrapper,
} from './Projects-styles';

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsProject {
        nodes {
          myid
          title
          paragraph
          image {
            fluid(maxWidth: 700) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
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
      {data.allDatoCmsProject.nodes
        .sort((a, b) => (a.myid > b.myid ? 1 : -1))
        .map((item) => (
          <StyledWrapper key={item.title}>
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
                <StyledLink href={item.pageLink} target="_blank">
                  Link to page
                </StyledLink>
                <StyledLink href={item.githubLink} target="_blank">
                  Link to Github
                </StyledLink>
              </>
            </StyledInnerWrapper>
            <a href={item.pageLink} target="_blank">
              <StyledImage fluid={item.image.fluid} alt="project" />
            </a>
          </StyledWrapper>
        ))}
    </>
  );
};

export default Projects;
