import React from 'react'
import { Container, ProfilePicture } from '../styles/components/Card';

const SearchModal = ({name, imageUrl, repos}) => {
  console.info(imageUrl)
  return (
    <Container>
      <ProfilePicture src={imageUrl} width={60} height={60} alt={name} />
      <h3>{name}</h3>
      <p>{repos}</p>
    </Container>
  )
}

export default SearchModal
