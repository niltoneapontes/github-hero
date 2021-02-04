import styled from 'styled-components';
import theme from '../theme';

export const FooterContainer = styled.footer`
  background: ${theme.mode.light.background};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.mode.light.color};
  font-size: 12px;
`;
