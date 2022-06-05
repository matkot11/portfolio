import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 5rem 0 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledMessageTitle = styled.h2`
  margin: 1rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.aquamarine};

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.xl}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 1rem 0;
  }
`;

export const StyledInput = styled.input`
  width: 90vw;
  height: 5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;
  padding: 5px;
  border: none;

  :focus {
    outline: none;
    border-bottom: solid 3px ${({ theme }) => theme.aquamarine};
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    width: 60vw;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    width: 55rem;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 90vw;
  min-height: 15rem;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;
  padding: 5px;
  border: none;

  :focus {
    outline: none;
    border-bottom: solid 3px ${({ theme }) => theme.aquamarine};
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    width: 60vw;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    height: 20rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    width: 55rem;
  }
`;

export const StyledButton = styled.button`
  border: none;
  width: max-content;
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.red};
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    color: ${({ theme }) => theme.aquamarine};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.aquamarine};

      :hover {
        color: ${({ theme }) => theme.aquamarine};
        cursor: default;
      }
    `} @media only screen and(min-width: ${({ theme }) => theme.size.s}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
