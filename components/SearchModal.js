import React, { useCallback, useEffect, useState } from 'react'
import api from '../services/api';
import { Container, Form, Input, Error, CardContainer } from '../styles/components/SearchModal'
import Card from './Card';
import { FiSearch, FiTrash } from 'react-icons/fi';

export default function SearchModal() {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const localResultsString = localStorage.getItem('@GithubHero:results');
    const localResults = JSON.parse(localResultsString);
    localResults && setResults(localResults);
  }, [])

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      
      if(!query) {
        setError('Digite um username válido');
        setTimeout(() => {
          setError('');
        }, 2000)
        return;
      }

      const foundUser = results.find(result => result.login === query);
      
      if(foundUser) {
        return;
      }

      api.get(`/${query}`).then(response => {
        setResults([...results, response.data])
        setQuery('');
        localStorage.setItem('@GithubHero:results', JSON.stringify([...results, response.data]));
      }).catch(err => {
        setError('Oops... Não consegui encontrar esse usuário')
        setTimeout(() => {
          setError('');
        }, 2000)
      })
    },
    [query],
  )

  const handleClearHistory = useCallback(
    () => {
      localStorage.removeItem('@GithubHero:results');
      setResults([]);
    },
    [],
  )

  return (
    <Container>
      <Form onSubmit={(e) => handleSearch(e)}>
      <Input>
        <input value={query} type="text" name="query" title="Nome de usuário" placeholder="Pesquise por um usuário" onChange={(e) => setQuery(e.target.value)}/>
        <button type="button" title="Excluir histórico" alt="Excluir histórico" onClick={handleClearHistory}><FiTrash size={24}/></button>
        <button type="submit" title="Pesquisar" alt="Pesquisar"><FiSearch size={24}/></button>
      </Input>
      {error && <Error>{error}</Error>}
      </Form>
      <CardContainer>
        {results.length !== 0 && (
          results.map(user => (
            <Card key={user.id} href={`/${user.login}`} name={user.login} imageUrl={user.avatar_url} repos={user.public_repos} followers={user.followers} following={user.following}></Card>
          ))
        )}
      </CardContainer>
    </Container>
  )
}

export const getServerSideProps = (context) => {
  const localResultsString = localStorage.getItem('@GithubHero:results');
  const localResults = JSON.parse(localResultsString);
  console.info(localResults);
  return {
    props: {
      localResults
    }, // will be passed to the page component as props
  }
}