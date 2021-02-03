import SearchModal from '../components/SearchModal'
import SEO from '../components/SEO'
import { Container, Title } from '../styles/pages'
import Image from 'next/image';
import Icon from '../components/Icon';
import theme from '../styles/theme';

export default function Home() {
  return (
    <>
      <SEO
        title="Home" 
        image="githubImage.jpg" 
        shouldExcludeTitleSuffix={false}
        shouldIndexPage/>
      <Container>
        <Icon size={104} color={theme.mode.dark.color}></Icon>
        <Title>
          Github Hero
        </Title>
        <SearchModal></SearchModal>
      </Container>
    </>
  )
}
