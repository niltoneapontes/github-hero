import styled from 'styled-components';

export const Container = styled.a`
  background: ${({ theme }) => theme.mode.light.background};
  border: 2px solid ${({ theme }) => theme.mode.light.background};
  border-radius: 8px;
  font-style: normal;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.mode.light.color};
  padding: 12px 24px;
  font-size: 16px;
  width: 80%;
  box-shadow: ${({ theme }) => theme.mode.light.boxShadow};
  margin-top: 24px;
  transition: all 0.2s ease-in-out;

  & + article {
    margin-top: 12px;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  width: 100%;
  word-break: break-all;

  p {
    font-size: 16px;
  }

  strong {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
