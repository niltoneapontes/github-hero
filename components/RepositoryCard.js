import React from 'react';
import AOS from 'aos';
import { Container, ProfileText } from '../styles/components/RepositoryCard';
import 'aos/dist/aos.css';

const RepositoryCard = ({
  href,
  name,
  owner,
  description,
  stars,
  forks,
  language,
}) => {
  AOS.init();
  return (
    <Container data-aos="fade-left" href={href} target="_blank">
      <ProfileText>
        <h3>{name}</h3>
        {owner && <strong>@{owner}</strong>}
        <p>{description}</p>
        <p>Stars: {stars}</p>
        <p>Forks: {forks}</p>
        <p>{language}</p>
      </ProfileText>
    </Container>
  );
};

export default RepositoryCard;
