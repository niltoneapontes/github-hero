import SEO from '../components/SEO'
import { Container, Title } from '../styles/pages'

export default function Repositories() {
  return (
    <>
      <SEO
        title="Repositórios" 
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
