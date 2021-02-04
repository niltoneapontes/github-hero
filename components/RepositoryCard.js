import React from 'react'
import { Container, ProfileText } from '../styles/components/RepositoryCard';

const RepositoryCard = ({href, name, owner, description, stars, forks, language}) => {
  return (
      <Container href={href} target="_blank">
        <ProfileText>
          <h3>{name}</h3>
          {owner &&           <strong>@{owner}</strong>
}
          <p>{description}</p>
          <p>Stars: {stars}</p>
          <p>Forks: {forks}</p>
          <p>{language}</p>
        </ProfileText>
      </Container>
  )
}

export default RepositoryCard;
