import styled from 'styled-components';
import Image from 'next/image';

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
  height: 64px;
  box-shadow: ${({ theme }) => theme.mode.light.boxShadow};
  margin-top: 24px;
  transition: all 0.2s ease-in-out;
  animation: fadeLeft 0.6s ease-in-out;

  @keyframes fadeLeft {
    0% {
      transform: translateX(20%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  & + article {
    margin-top: 12px;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.complementary};
  }
`;

export const ProfilePicture = styled(Image)`
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;

  p {
    font-size: 14px;
  }
`;
