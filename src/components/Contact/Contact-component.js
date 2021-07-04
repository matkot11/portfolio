import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledMessageTitle,
  StyledTextarea,
  StyledTitle,
  StyledWrapper,
} from './Contact-styles';

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
