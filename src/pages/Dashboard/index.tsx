import React, { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';
import Input from '../../components/Input';
import filterImg from '../../assets/filter.svg';
import arrowDown from '../../assets/arrow-down-copy-7.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

import { 
  Container, 
  Header, 
  Main,
  Title,
  SearchForm,
  CardsContainer,
  Pagination,
  LeftButton,
  RightButton, 
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

const Dashboard: React.FC = () => {
  const timestamp = 1598837521220;
  const apiKey = 'e176f4aba17a0471a4143ccae4e2aae0';
  const hash = '012f1f41833a46442b234fe9eceffca3';

  const [heroes, setHeroes] = useState<Heroes[]>([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const loadHeroes = async () => {
      const response = 
        await api.get(`/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=9 `);
      
      const { data: { results } } = response.data;

      setHeroes(results);
    }
  
    loadHeroes();
  }, []);

  const handleSearch = useCallback(async () => {
    const response = 
      await api.get(`/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}`);

    const { data: { results } } = response.data;

    setHeroes(results);
  }, [name]);

  return (
    <Container>
      <Header>
      </Header>

      <Main>
        <Title>Character</Title>

        <SearchForm>
          <Input 
            placeholder="Characters" 
            value={name} 
            onChange={(event) => setName(event.target.value)}  
          />
          <img onClick={handleSearch} src={filterImg} alt="Filter"/>
          <span>A-Z</span>
          <img src={arrowDown} alt="Arrow"/>
        </SearchForm>

        <CardsContainer>
          {heroes.map(heroe => <Card key={heroe.id} heroesData={heroe} />)}
        </CardsContainer>

        <Pagination>
          <LeftButton>
            <img src={arrowLeft} alt="Previous" />
          </LeftButton>
          <RightButton>
            <img src={arrowRight} alt="Next" />
          </RightButton>
        </Pagination>
      </Main>

      <Footer>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam natus dolore vitae labore illum fugit explicabo aspernatur dignissimos quidem sunt iure nam tempore sapiente non tenetur praesentium, molestiae perspiciatis?</p>
        </div>
      </Footer>
    </Container>
  );
}

export default Dashboard;