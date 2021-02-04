import React from 'react';
import SEO from '../components/SEO';
import { Container, Title } from '../styles/pages';

export default function Starred() {
  return (
    <>
      <SEO
        title="Starred"
        image="githubImage.jpg"
        shouldExcludeTitleSuffix={false}
        shouldIndexPage
      />
      <Container>
        <Title>Github Hero</Title>
      </Container>
    </>
  );
}
