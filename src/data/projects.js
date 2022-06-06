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
    // paragraph:
    //   'Sociafy is a social media app.  User is able to authorise with NextAuth. App provides
    // functionality such as adding friends, creating posts and events.All data is stored in
    // MongoDB.Saving images is handled by Cloudinary, service which stores images.In order
    // toimplement design atomic design method was used as well as Storybook and Styled
    // Components.',
    paragraph:
      'Writing website thought me about connecting backend to frontend, how to store data in database and how to implement properly authentication. I have also found out how powerful NextJS is. Main obstacle was implementing backend as it was first time, I did that. Next step would be implementing chat functionality.',
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
    // paragraph:
    //   'Brandly is a fake store page. It is made in React. Website use FakeStoreAPI to get
    // products. Authorisation and saving items in cart are made with Firebase. Messages are
    // handled with Redux. In order to implement design atomic design method was used as well
    // as Storybook and Styled Components.',
    paragraph:
      'Creating online store thought me how to create rest API calls to fetch products and use Firebase, which was used to implement simple authentication and store cart data. Redux was implemented to keep track of displayed messages. Main obstacle was implementing atomic design. At first, I was not sure to which folders put components, but after the while I figured it out. I am sure it is the best way to implement interfaces. Next step would be adding real payments, but to make that happen I would have to make backend.',
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
      'This website was built to learn implementing simple portfolio websites with Gatsby. I learned about fetching data with GraphQL and keep content in headless CMS. Main obstacle was quickly rendering images. Thankfully to Gatsby it optimizes images very well, so before loading image it display SVG of that image which make user experience much better.',
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
