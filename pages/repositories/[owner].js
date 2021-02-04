import React from 'react'
import api from '../../services/api'
import { Container, UserImage, Title } from '../../styles/pages/repositories';
import SEO from '../../components/SEO';
import RepositoryCard from '../../components/RepositoryCard';

const UserRepositories = ({repositories}) => {
  console.info(repositories)
  const repos = [
  ]
  return(
    <>
    <SEO
    title={`Repositórios | ${repositories[0].owner.login}`} 
    image="githubImage.jpg" 
    shouldExcludeTitleSuffix={false}
    shouldIndexPage/>
    <Container>
      <UserImage src={repositories[0].owner.avatar_url} width={120} height={120} alt={repositories[0].owner.login}></UserImage>
      <Title>{repositories[0].owner.login}</Title>
      {repositories && repositories.map(repository => (
              <RepositoryCard href={repository.html_url} name={repository.name} description={repository.description} stars={repository.stargazers_count} forks={repository.forks_count} language={repository.language}></RepositoryCard>

      ))}
    </Container>
    </>
  )
}

export default UserRepositories;

export const getServerSideProps = async(context) => {
  const {params: {owner}} = context;
  try {
    const response = await api.get(`/${owner}/repos`);
    const repositories = response.data;
    return {
      props: {
        repositories
      }, // will be passed to the page component as props
    }
  } catch(error) {
    console.error('Error: ', error);
  }
  return {
    props: {
      repositories: []
    }
  }
}