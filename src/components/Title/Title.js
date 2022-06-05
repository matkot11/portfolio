import styled from 'styled-components';

const Title = styled.h2`
  margin-bottom: 3rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.aquamarine};
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export default Title;
