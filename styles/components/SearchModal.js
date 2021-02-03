import styled from 'styled-components';

export const Container = styled.main`
  /* background: ${({theme}) => theme.mode.dark.background}; */
  border-radius: 8px;
  margin-top: 24px;
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;

  ${({theme}) => theme.breakpoints.breakpoint_sm} {
    width: 50%;
  }
`;

export const Input = styled.section`
  background: ${({theme}) => theme.mode.dark.background};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 48px;
  border: none;
  color: ${({theme}) => theme.mode.dark.color};
  font-size: 16px;
  width: 100%;
  box-shadow: ${({theme}) => theme.mode.dark.boxShadow};

  input {
    background: ${({theme}) => theme.mode.dark.background};
    border-radius: 48px;
    border: none;
    color: ${({theme}) => theme.mode.dark.color};
    padding: 24px 24px;
    font-size: 16px;
    flex: 1;
  }
  button {
    background-color: ${({theme}) => theme.mode.dark.background};
    color: ${({theme}) => theme.mode.dark.color};
    cursor: pointer;
    border: none;
    border-radius: 24px;
    height: 48px;
    margin-right: 12px;
    width: 48px;
    transition: all 0.5s ease-in-out;

    &:hover {
      filter: brightness(80%);
    }
  }
`;