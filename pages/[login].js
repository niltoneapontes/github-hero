import React from 'react'
import api from '../services/api'
import { Container, InfoContainer, Title, UserImage } from '../styles/pages/login';

const Login = ({userData}) => {
  return(
    <Container>
      <InfoContainer>
        <UserImage src={userData.avatar_url} width={120} height={120} alt={userData.name}></UserImage>
        <Title>{userData.login}</Title>
      </InfoContainer>
    </Container>
  )
}

export default Login

export const getServerSideProps = async(context) => {
  const {params: {login}} = context;
  const response = await api.get(`/${login}`);
  const userData = response.data;
  return {
    props: {
      userData
    }, // will be passed to the page component as props
  }
}