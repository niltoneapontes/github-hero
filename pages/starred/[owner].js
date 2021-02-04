import React from 'react'
import api from '../../services/api'
import { Container, UserImage, Title } from '../../styles/pages/starred';
import SEO from '../../components/SEO';
import RepositoryCard from '../../components/RepositoryCard';

const UserStarred = ({repositories, userData}) => {
  console.info(repositories, userData)
  const repos = [
  ]
  return(
    <>
    <SEO
    title={`Mais visitados | ${userData.login}`} 
    image="githubImage.jpg" 
    shouldExcludeTitleSuffix={false}
    shouldIndexPage/>
    <Container>
      <UserImage src={userData.avatar_url} width={120} height={120} alt={userData.login}></UserImage>
      <Title>{userData.login}</Title>
      {repositories && repositories.map(repository => (
              <RepositoryCard href={repository.html_url} name={repository.name} owner={repository.owner.login} description={repository.description} stars={repository.stargazers_count} forks={repository.forks_count} language={repository.language}></RepositoryCard>

      ))}
    </Container>
    </>
  )
}

export default UserStarred;

export const getServerSideProps = async(context) => {
  const {params: {owner}} = context;
  try {
    const user = await api.get(`/${owner}`);
    const userData = {
      login: user.data.login,
      avatar_url: user.data.avatar_url
    }
    const response = await api.get(`/${owner}/starred`);
    const repositories = response.data;
    return {
      props: {
        repositories,
        userData
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