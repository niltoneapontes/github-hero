import React, { useCallback, useState } from 'react'
import api from '../services/api';
import { Container, Input } from '../styles/components/SearchModal'
import Card from './Card';
import { FiSearch } from 'react-icons/fi';

const SearchModal = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = useCallback(
    () => {
      api.get(`/${query}`).then(response => setResults([...results, response.data])).catch(err => console.error(err))
      console.log(results);
    },
    [query],
  )

  return (
    <Container>
      <Input>
        <input type="text" name="query" placeholder="Pesquise por um usuário" onChange={(e) => setQuery(e.target.value)}/>
        <button type="button" onClick={() => handleSearch()}><FiSearch size={24}/></button>
      </Input>
      {results.length !== 0 && (
        results.map(user => (
          <Card key={user.id} name={user.login} imageUrl={user.avatar_url} repos={user.public_repos}></Card>
        ))
      )}
    </Container>
  )
}

export default SearchModal
