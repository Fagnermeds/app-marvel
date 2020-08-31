import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import Input from '../../components/Input';
import filterImg from '../../assets/filter.svg';

import { 
  Container, 
  Header, 
  Main,
  CardsContainer, 
  Title,
  Search,
  Footer 
} from './styles';
import Card from '../../components/Card';

interface Heroes {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  }
  description: string;
}

const Dashboard = () => {
  const timestamp = 1598837521220;
  const apiKey = 'e176f4aba17a0471a4143ccae4e2aae0';
  const hash = '012f1f41833a46442b234fe9eceffca3';

  const [heroes, setHeroes] = useState<Heroes[]>([]);

  useEffect(() => {
    const loadHeroes = async () => {
      const response = await api.get(`/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=6`);
      
      const { data: { results } } = response.data;

      setHeroes(results);
    }
  
    loadHeroes();
  }, []);

  return (
    <Container>
      <Header>
      </Header>

      <Main>
        <Title>Character</Title>

        <Search>
          <Input placeholder="Characters" />
          <img src={filterImg} alt="Filter"/>
        </Search>

        <CardsContainer>
          {heroes.map(heroe => <Card key={heroe.id} heroesData={heroe} />)}
        </CardsContainer>
      </Main>

      <Footer>

      </Footer>
    </Container>
  );
}

export default Dashboard;