import styled from 'styled-components';

export const Container = styled.main`
  background: ${({theme}) => theme.gradients.primary};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.mode.dark.color};
  font-family: ${({theme}) => theme.fonts.title};
  font-size: 24px;
`;