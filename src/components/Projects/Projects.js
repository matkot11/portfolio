import React from 'react';
import styled from 'styled-components';
import Project from '../Project/Project';
import Foodey from '../../assets/images/projects/foodey.jpg';

const StyledInnerWrapper = styled.div`
  & > * {
    margin: 50px 0;
  }
`;

const StyledTitle = styled.h2`
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.aquamarine};
`;

const Projects = () => (
  <>
    <StyledTitle>My projects</StyledTitle>
    <StyledInnerWrapper>
      <Project
        image={Foodey}
        title="Foodey"
        paragraph=" In that page I used Firebase's technologies to make secure
    signing components. I used database to store data of notes and at the
    end I connected to page Firebase storage to store images added to
    notes. In start page I used GSAP to animate page name and entry
    buttons."
        pageLink="https://foodey-page.netlify.app/#/"
        githubLink="https://github.com/matkot11/foodey"
      />
      <Project
        image={Foodey}
        title="Foodey"
        paragraph=" In that page I used Firebase's technologies to make secure
    signing components. I used database to store data of notes and at the
    end I connected to page Firebase storage to store images added to
    notes. In start page I used GSAP to animate page name and entry
    buttons."
        pageLink="https://foodey-page.netlify.app/#/"
        githubLink="https://github.com/matkot11/foodey"
      />
    </StyledInnerWrapper>
  </>
);

export default Projects;
