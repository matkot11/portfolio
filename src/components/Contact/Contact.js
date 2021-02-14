import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import emailjs from 'emailjs-com';
import BackgroundImage from '../../assets/images/backgroundPizza.jpg';

const StyledWrapper = styled.div`
  min-height: 100vh;
  min-width: calc(100vw - 160px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: ${({ theme }) => theme.size.xl}) {
    width: calc(100vw - 2rem);
  }

  @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
    background-image: none;
  }
`;

const StyledTitle = styled.h2`
  margin: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.aquamarine};
`;

const StyledMessageTitle = styled.h2`
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
  border: none;

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
  border: none;

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

  ${({ disabled }) => disabled && css`
      color: ${({ theme }) => theme.aquamarine};

      :hover  {
        color: ${({ theme }) => theme.aquamarine};
        cursor: default;
      }
    `}
`;

const Contact = () => {
  const [email, getEmail] = useState('');
  const [message, getMessage] = useState('');
  const [buttonData, getButtonData] = useState(false);
  const [sent, isSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userKey = 'user_tPStdyKOwe6kyDMiTNeOC';
    getButtonData(true);
    emailjs
      .send(
        'default_service',
        'template_q6fwykp',
        { from_name: email, message },
        userKey,
      )
      .then(() => {
        getButtonData(false);
        isSent(true);
      });
  };

  return (
    <StyledWrapper id="contact">
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
            <StyledButton type="submit" disabled={buttonData}>
              {!buttonData ? 'Send' : 'Sending...'}
            </StyledButton>
          </StyledForm>
        </>
      ) : (
        <>
          <StyledMessageTitle>Thank you for message</StyledMessageTitle>
          <StyledButton onClick={() => isSent(false)}>
            Send message again
          </StyledButton>
        </>
      )}
    </StyledWrapper>
  );
};
export default Contact;
