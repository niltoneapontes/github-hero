import SEO from '../components/SEO'
import { Container, Title } from '../styles/pages'

export default function Home() {
  return (
    <>
      <SEO
        title="Home" 
        image="githubImage.jpg" 
        shouldExcludeTitleSuffix={false}
        shouldIndexPage/>
      <Container>
        <Title>
          Github Hero
        </Title>

      </Container>
    </>
  )
}
