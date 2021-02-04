import React from 'react'
import api from '../services/api'
import { Container, GoBack, InfoContainer, Title, UserImage, Aditional, InfoList, Info, Contact } from '../styles/pages/login';
import {FaTwitter, FaMailBulk, FaBlog, FaChevronLeft} from 'react-icons/fa';
import SEO from '../components/SEO';
import {ButtonContainer, Button} from '../components/Button';
import theme from '../styles/theme';
import Link from 'next/link';

const Login = ({userData}) => {
  console.info(userData)
  return(
    <>
    <SEO
    title={`${userData.login}`} 
    image="githubImage.jpg" 
    shouldExcludeTitleSuffix={false}
    shouldIndexPage/>
    <Container>
      <InfoContainer>
        <GoBack href=".."><FaChevronLeft size={24} color={theme.mode.light.color}></FaChevronLeft></GoBack>
        <UserImage src={userData.avatar_url} width={120} height={120} alt={userData.name}></UserImage>
        <Title>{userData.name}</Title>
        <p>@{userData.login}</p>
        <p><em>{userData.bio}</em></p>

        <Aditional>
        <InfoList>
        <Info>
          <h1>Followers</h1>
          <p>{userData.followers}</p>
        </Info>
        <Info>
          <h1>Following</h1>
          <p>{userData.followers}</p>
        </Info>
        <Info>
          <h1>Repositories</h1>
          <p>{userData.public_repos}</p>
        </Info>
        </InfoList>
        <Contact>
          <li>
            <a href={`${userData.twitter_username}`} target="_blank" alt="Twitter" title="Twitter"><FaTwitter size={32} color={theme.mode.light.color}></FaTwitter></a>
          </li>
          <li>
            <a href={`${userData.email}`} target="_blank" alt="E-mail" title="E-mail"><FaMailBulk size={32} color={theme.mode.light.color}></FaMailBulk></a>
          </li>
          <li>
            <a href={`${userData.blog}`} target="_blank" alt="Blog" title="Blog"><FaBlog size={32} color={theme.mode.light.color}></FaBlog></a>   
          </li>
        </Contact>
        </Aditional>
        <ButtonContainer>
          <Link href={`/repositories/${userData.login}`}><Button type="secondary">Ver repositórios</Button></Link>
          <Link href={`/starred/${userData.login}`}><Button type="primary">Mais visitados</Button></Link>
        </ButtonContainer>
      </InfoContainer>
    </Container>
    </>
  )
}

export default Login

export const getServerSideProps = async(context) => {
  const {params: {login}} = context;
  try {
    const response = await api.get(`/${login}`);
    const userData = response.data;
    return {
      props: {
        userData
      }, // will be passed to the page component as props
    }
  } catch(error) {
    console.error('Error: ', error);
  }
  return {
    props: {
      userData: {}
    }
  }
}