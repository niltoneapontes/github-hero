import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.article`
  background: ${({theme}) => theme.mode.dark.background};
  border-radius: 8px;
  display: flex;
  border: none;
  color: ${({theme}) => theme.mode.dark.color};
  padding: 12px 24px;
  font-size: 16px;
  width: 80%;
  height: 64px;
  box-shadow: ${({theme}) => theme.mode.dark.boxShadow};
  margin-top: 24px;
  
  & + article {
    margin-top: 12px;
  }
`;

export const ProfilePicture = styled(Image)`
  border-radius: 50%;
  overflow: hidden;
`;
