import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Container from '../Container/Container';
import BackgroundImage from '../../assets/images/backgroundPizza.png';

const StyledWrapper = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledTitle = styled.h2`
  margin: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.aquamarine};

  @media only screen and (max-width: ${({ theme }) => theme.size.s}) {
    width: min-content;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 1rem 0;
  }
`;

const StyledInput = styled.input`
  min-width: 45rem;
  height: 5rem;
  font-family: 'Montserrat';
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;
  padding: 5px;

  :focus {
    outline: none;
    border-bottom: solid 3px ${({ theme }) => theme.aquamarine};
  }
`;

const StyledTextarea = styled.textarea`
  width: 45rem;
  min-height: 15rem;
  font-family: 'Montserrat';
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;
  padding: 5px;

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

const Contact = () => {
  const [email, getEmail] = useState('');
  const [message, getMessage] = useState('');
  const [buttonName, getButtonName] = useState('Send');
  const [sent, isSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userKey = 'user_tPStdyKOwe6kyDMiTNeOC';
    getButtonName('Sending...');
    emailjs
      .send(
        'default_service',
        'template_q6fwykp',
        { from_name: email, message },
        userKey,
      )
      .then(
        () => {
          getButtonName('Send');
          isSent(true);
        },
        () => {
          getButtonName("Couldn't send the message");
        },
      );
  };

  return (
    <StyledWrapper id="contact">
      <Container>
        {!sent ? (
          <>
            <StyledTitle>Get in touch</StyledTitle>
            <StyledForm onSubmit={handleSubmit}>
              <StyledInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => getEmail(e.target.value)}
                required
              />
              <StyledTextarea
                placeholder="Message"
                value={message}
                onChange={(e) => getMessage(e.target.value)}
                required
              />
              <StyledButton type="submit">{buttonName}</StyledButton>
            </StyledForm>
          </>
        ) : (
          <>
            <StyledTitle>Thank you for message</StyledTitle>
            <StyledButton onClick={() => isSent(false)}>
              Send message again
            </StyledButton>
          </>
        )}
      </Container>
    </StyledWrapper>
  );
};
export default Contact;
