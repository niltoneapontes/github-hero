import React from 'react'
import api from '../../services/api'
import { Container } from '../../styles/pages/owner';
import SEO from '../../components/SEO';

const Login = ({repositories}) => {
  console.info(repositories)
  const repos = [
  ]
  return(
    <>
    <SEO
    title={`Repositórios`} 
    image="githubImage.jpg" 
    shouldExcludeTitleSuffix={false}
    shouldIndexPage/>
    <Container>
    </Container>
    </>
  )
}

export default Login

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