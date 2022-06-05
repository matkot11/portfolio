import Main from './components/Main/Main';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './assets/styles/globalStyle';
import theme from './assets/styles/mainTheme';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </ThemeProvider>
  </>
);

export default App;
