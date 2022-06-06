import React from 'react';
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
  StyledWrapper
} from './Projects.styles';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <>
      <StyledTitle id="projects">My projects</StyledTitle>
      {projects.map((item) => (
        <StyledWrapper key={item.id}>
          <StyledInnerWrapper>
            <StyledProjectName>{item.title}</StyledProjectName>
            <StyledParagraph>{item.paragraph}</StyledParagraph>
            <StyledRowWrapper>
              {item.technologies.map((svg) => (
                <StyledSVGWrapper key={svg.id}>
                  <StyledSVG src={svg.url} alt={svg.name} />
                  <span>{svg.name}</span>
                </StyledSVGWrapper>
              ))}
            </StyledRowWrapper>
            <>
              <StyledLink href={item.pageLink} target="_blank" rel="noreferrer">
                Visit page
              </StyledLink>
              <StyledLink href={item.githubLink} target="_blank" rel="noreferrer">
                Check out code
              </StyledLink>
            </>
          </StyledInnerWrapper>
          <a href={item.pageLink} target="_blank" rel="noreferrer">
            <StyledImage src={item.image} alt="project" />
          </a>
        </StyledWrapper>
      ))}
    </>
  );
};

export default Projects;
