import styled from 'styled-components';

export const Container = styled.main`
  /* background: ${({ theme }) => theme.mode.light.background}; */
  border-radius: 8px;
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.breakpoint_sm} {
    width: 50%;
  }
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
`;

export const Input = styled.section`
  background: ${({ theme }) => theme.mode.light.background};
  border: 2px solid ${({ theme }) => theme.mode.light.background};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 48px;
  color: ${({ theme }) => theme.mode.light.color};
  font-size: 16px;
  width: 100%;
  box-shadow: ${({ theme }) => theme.mode.light.boxShadow};
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.complementary};
  }

  input {
    background: ${({ theme }) => theme.mode.light.background};
    border-radius: 48px;
    border: none;
    color: ${({ theme }) => theme.mode.light.color};
    padding: 24px 0 24px 24px;
    font-size: 16px;
    width: 100%;

    ${({ theme }) => theme.breakpoints.breakpoint_sm} {
      flex: 1;
    }
  }
  button {
    background-color: ${({ theme }) => theme.mode.light.background};
    color: ${({ theme }) => theme.mode.light.color};
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

export const Error = styled.span`
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 8px;
  color: ${({ theme }) => theme.mode.light.background};
  position: absolute;
  top: -52px;
  padding: 12px 24px;
  left: 24px;
  animation: appear 0.3s ease-in-out;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 80px;
  width: 100%;
  left: 0;
`;
