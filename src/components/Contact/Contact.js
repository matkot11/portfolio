import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';

const StyledWrapper = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
`;

const StyledTitle = styled.h2`
  margin: 10px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.aquamarine};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 10px 0;
  }
`;

const StyledInput = styled.input`
  width: 450px;
  height: 50px;
  font-family: 'Montserrat';
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;

  :focus {
    outline: none;
    border-bottom: solid 3px ${({ theme }) => theme.aquamarine};
  }
`;

const StyledTextarea = styled.textarea`
  width: 450px;
  min-height: 150px;
  font-family: 'Montserrat';
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;

  :focus {
    outline: none;
    border-bottom: solid 3px ${({ theme }) => theme.aquamarine};
  }
`;

const StyledButton = styled.button`
  border: none;
  width: max-content;
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.red};
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    color: ${({ theme }) => theme.aquamarine};
  }
`;

const Contact = () => (
  <StyledWrapper>
    <Container>
      <StyledTitle>Get in touch</StyledTitle>
      <StyledForm>
        <StyledInput type="email" placeholder="Email" required />
        <StyledTextarea placeholder="Message" required />
        <StyledButton type="submit">Send</StyledButton>
      </StyledForm>
    </Container>
  </StyledWrapper>
);

export default Contact;
