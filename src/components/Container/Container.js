import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.lightBlue};
  width: max-content;
  padding: 25px 50px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 40px;
`;

const Container = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

Container.propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
