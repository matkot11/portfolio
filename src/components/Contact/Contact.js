import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
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

const Contact = () => {
  const [name, getName] = useState('');
  const [message, getMessage] = useState('');
  const [buttonName, getButtonName] = useState('Send');
  const [sent, isSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userKey = 'user_tPStdyKOw6kyDMiTNeOC';
    getButtonName('Sending...');
    emailjs
      .send(
        'default_service',
        'template_q6fwykp',
        { from_name: name, message },
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
    <StyledWrapper>
      <Container>
        {!sent ? (
          <>
            <StyledTitle>Get in touch</StyledTitle>
            <StyledForm onSubmit={handleSubmit}>
              <StyledInput
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => getName(e.target.value)}
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
            <StyledTitle>Thank you for contact</StyledTitle>
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
