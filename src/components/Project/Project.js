import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Container from '../Container/Container';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled(Image)`
  border-radius: 5px;
  max-width: 700px;
  margin-right: 20px;
`;

const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.aquamarine};
  text-align: center;
  margin-bottom: 10px;
`;

const StyledProjectName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.aquamarine};
`;

const StyledParagraph = styled.p`
  max-width: 400px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.white};
`;

const StyledSVG = styled.img`
  max-width: 70px;
  max-height: 70px;
  margin: 10px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.aquamarine};

  :hover {
    color: ${({ theme }) => theme.red};
  }
`;

const Project = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsProject {
        nodes {
          image {
            fixed(width: 700) {
              ...GatsbyDatoCmsFixed_tracedSVG
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
      <StyledTitle>My projects</StyledTitle>
      {data.allDatoCmsProject.nodes.map((item) => (
        <Container key={item.title}>
          <StyledWrapper>
            <a href={item.pageLink}>
              <StyledImage fixed={item.image.fixed} />
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

// Project.propTypes = {

// };

export default Project;
