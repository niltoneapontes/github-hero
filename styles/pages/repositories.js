import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.main`
  background: ${({theme}) => theme.gradients.complementary};
  width: 100%;
  min-height: calc(100vh - 104px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 0;
  justify-content: center;
`;

export const UserImage = styled(Image)`
  border-radius: 50%;
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.mode.light.color};
  font-family: ${({theme}) => theme.fonts.title};
  font-size: 24px;
  text-align: center;

  ${({theme}) => theme.breakpoints.breakpoint_sm} {
    font-size: 52px;
  }
`;