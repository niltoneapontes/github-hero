import styled from 'styled-components';

export const ButtonContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 0;

  ${({ theme }) => theme.breakpoints.breakpoint_sm} {
    flex-direction: row;
    margin-top: 52px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  border: none;
  background-color: ${({ theme, type }) => theme.colors[type]};
  color: ${({ theme }) => theme.mode.light.background};
  font-weight: bold;
  margin-top: 24px;
  transition: all 0.3s ease-in-out;

  ${({ theme }) => theme.breakpoints.breakpoint_sm} {
    margin-top: 0;
    max-width: 160px;
  }

  &:hover {
    filter: brightness(80%);
  }
`;
