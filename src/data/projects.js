import SociafyImage from '../assets/images/project/sociafy.jpg';
import BrandlyImage from '../assets/images/project/brandly.jpg';
import ArchitectPortfolioImage from '../assets/images/project/architectPortfolio.jpg';
import NextJSSkill from '../assets/images/skills/nextjs.svg';
import MongoDBSkill from '../assets/images/skills/mongodb.svg';
import NextAuthSkill from '../assets/images/skills/nextauth.svg';
import CloudinarySkill from '../assets/images/skills/cloudinary.svg';
import StyledComponentsSkill from '../assets/images/skills/styled-components.svg';
import ReactSkill from '../assets/images/skills/react.svg';
import ReduxSkill from '../assets/images/skills/redux.svg';
import StorybookSkill from '../assets/images/skills/storybook.png';
import GatsbySkill from '../assets/images/skills/gatsby.svg';
import GraphqlSkill from '../assets/images/skills/graphql.png';
import DatoCMSSKill from '../assets/images/skills/datocms.png';

export const projects = [
  {
    id: 1,
    image: SociafyImage,
    title: 'Sociafy',
    paragraph:
      'Sociafy is a social media app.  User is able to authorise with NextAuth. App provides functionality such as adding friends, creating posts and events.All data is stored in MongoDB.Saving images is handled by Cloudinary, service which stores images.In order toimplement design atomic design method was used as well as Storybook and Styled Components.',
    technologies: [
      {
        id: 1.1,
        url: NextJSSkill,
        name: 'NextJS'
      },
      {
        id: 1.2,
        url: MongoDBSkill,
        name: 'MongoDB'
      },
      {
        id: 1.3,
        url: NextAuthSkill,
        name: 'NextAuth'
      },
      {
        id: 1.4,
        url: CloudinarySkill,
        name: 'Cloudinary'
      },
      {
        id: 1.5,
        url: StyledComponentsSkill,
        name: 'Styled Components'
      }
    ],
    pageLink: 'https://sociafy.vercel.app/',
    githubLink: 'https://github.com/matkot11/sociafy'
  },
  {
    id: 2,
    image: BrandlyImage,
    title: 'Brandly',
    paragraph:
      'Brandly is a fake store page. It is made in React. Website use FakeStoreAPI to get products. Authorisation and saving items in cart are made with Firebase. Messages are handled with Redux. In order to implement design atomic design method was used as well as Storybook and Styled Components.',
    technologies: [
      {
        id: 2.1,
        url: ReactSkill,
        name: 'React'
      },
      {
        id: 2.2,
        url: ReduxSkill,
        name: 'Redux'
      },
      {
        id: 2.3,
        url: StyledComponentsSkill,
        name: 'Styled Components'
      },
      {
        id: 2.4,
        url: StorybookSkill,
        name: 'Storybook'
      }
    ],
    pageLink: 'https://brandlyshop.netlify.app/#/',
    githubLink: 'https://github.com/matkot11/brandly'
  },
  {
    id: 3,
    image: ArchitectPortfolioImage,
    title: 'Architect Portfolio',
    paragraph:
      'This is a portfolio page for imaginary architect. Page is made in Gatsby. Articles are stored in DatoCMS. Layout is made with Styled Components.',
    technologies: [
      {
        id: 3.1,
        url: GatsbySkill,
        name: 'Gatsby'
      },
      {
        id: 3.2,
        url: GraphqlSkill,
        name: 'GraphQL'
      },
      {
        id: 3.3,
        url: DatoCMSSKill,
        name: 'DatoCMS'
      },
      {
        id: 3.4,
        url: StyledComponentsSkill,
        name: 'Styled Components'
      }
    ],
    pageLink: 'https://architect-portfolio.netlify.app/',
    githubLink: 'https://github.com/matkot11/architect-page'
  }
];
