import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import api from '../../services/api';
import {
  Container,
  UserImage,
  Title,
  GoBack,
  ScrollDown,
} from '../../styles/pages/repositories';
import SEO from '../../components/SEO';
import RepositoryCard from '../../components/RepositoryCard';
import theme from '../../styles/theme';

const UserRepositories = ({ repositories }) => (
  <>
    <SEO
      title={`Repositórios | ${repositories[0].owner.login}`}
      image="githubImage.jpg"
      shouldExcludeTitleSuffix={false}
      shouldIndexPage
    />
    <Container>
      <ScrollDown>Deslize para ver mais</ScrollDown>

      <GoBack href="..">
        <FaChevronLeft size={24} color={theme.mode.light.color} />
      </GoBack>
      <UserImage
        src={repositories[0].owner.avatar_url}
        width={120}
        height={120}
        alt={repositories[0].owner.login}
      />
      <Title>{repositories[0].owner.login}</Title>
      {repositories &&
        repositories.map(repository => (
          <RepositoryCard
            href={repository.html_url}
            name={repository.name}
            description={repository.description}
            stars={repository.stargazers_count}
            forks={repository.forks_count}
            language={repository.language}
          />
        ))}
    </Container>
  </>
);

export default UserRepositories;

export const getServerSideProps = async context => {
  const {
    params: { owner },
  } = context;
  try {
    const response = await api.get(`/${owner}/repos`);
    const repositories = response.data;
    return {
      props: {
        repositories,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error: ', error);
  }
  return {
    props: {
      repositories: [],
    },
  };
};
