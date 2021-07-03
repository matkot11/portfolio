import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../assets/styles/globalStyle';
import theme from '../assets/styles/mainTheme';
import Navbar from '../components/Navbar/Navbar-component';

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
    </ThemeProvider>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
