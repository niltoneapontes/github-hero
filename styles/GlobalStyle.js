import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    width: 100%;
    height: 100%;
  }
`;
