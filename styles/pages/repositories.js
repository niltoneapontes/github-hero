import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.main`
  background: ${({ theme }) => theme.gradients.complementary};
  width: 100%;
  min-height: calc(100vh - 104px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 0;
  justify-content: center;
`;

export const GoBack = styled.a`
  text-decoration: none;
  position: absolute;
  top: 24px;
  left: 24px;

  &:hover {
    opacity: 0.8;
  }
`;

export const UserImage = styled(Image)`
  border-radius: 50%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.mode.light.color};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 24px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.breakpoint_sm} {
    font-size: 52px;
  }
`;

export const ScrollDown = styled.span`
  background-color: ${({ theme }) => theme.mode.light.background};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.mode.light.color};
  font-weight: bold;
  padding: 8px;
  position: fixed;
  top: 90vh;
  animation: move 1s ease-in-out infinite;
  z-index: 1;
  box-shadow: ${({ theme }) => theme.mode.dark.boxShadow};

  svg {
    margin-bottom: 8px;
  }

  @keyframes move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(8px);
    }
  }
`;
