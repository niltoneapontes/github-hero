import styled from 'styled-components';

export const Container = styled.main`
  background: ${({theme}) => theme.gradients.primary};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 52px 0;
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.mode.dark.color};
  font-family: ${({theme}) => theme.fonts.title};
  font-size: 52px;
  text-align: center;
`;