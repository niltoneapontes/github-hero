import React from 'react';
import SearchModal from '../components/SearchModal';
import SEO from '../components/SEO';
import { Container, LogoContainer, Title } from '../styles/pages';
import Icon from '../components/Icon';
import theme from '../styles/theme';

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        image="githubImage.jpg"
        shouldExcludeTitleSuffix={false}
        shouldIndexPage
      />
      <Container>
        <LogoContainer>
          <Icon size={104} color={theme.mode.light.background} />
          <Title>Github Hero</Title>
        </LogoContainer>
        <SearchModal />
      </Container>
    </>
  );
}
