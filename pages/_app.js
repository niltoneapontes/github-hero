import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/Footer';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer />
    </>
  );
}
