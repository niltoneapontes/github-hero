import SEO from '../components/SEO'
import { Container, Title } from '../styles/pages'

export default function UserDetails() {
  return (
    <>
      <SEO
        title="Usuário" 
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
