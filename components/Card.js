import React from 'react'
import { Container, ProfilePicture, ProfileText } from '../styles/components/Card';

const Card = ({href, name, imageUrl, repos, followers, following}) => {
  console.info(imageUrl)
  return (
      <Container href={href}>
        <>
          <ProfilePicture src={imageUrl} width={60} height={60} alt={name} />
          <ProfileText>
            <h3>{name}</h3>
            <p>Repos: {repos}</p>
            <p>Followers: {followers} | Following: {following}</p>
          </ProfileText>
        </>
      </Container>
  )
}

export default Card
