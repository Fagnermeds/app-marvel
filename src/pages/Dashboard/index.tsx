import React, { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';
import Input from '../../components/Input';
import filterImg from '../../assets/filter.svg';
import arrowDown from '../../assets/arrow-down-copy-7.svg';
import apiConfig from '../../config/apiConfig';
import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';

import { 
  Container, 
  Header, 
  Main,
  Title,
  SearchForm,
  CardsContainer,
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
  const [loading, setLoading] = useState(false);
  const [heroes, setHeroes] = useState<Heroes[]>([]);
  const [totalHeroes, setTotalHeroes] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [heroesPerPage] = useState(12)
  const [name, setName] = useState('');

  const { timestamp, apiKey, hash } = apiConfig;

  useEffect(() => {
    const loadHeroes = async () => {
      setLoading(true);
      const response = 
        await api.get(`/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`);
      
      const { data: { results } } = response.data;
      const { data: { total } } = response.data;

      setTotalHeroes(total);
      setHeroes(results);
      setLoading(false);
    }
  
    loadHeroes();
  }, [apiKey, hash, timestamp]);

  const handleSearch = useCallback(async () => {
    const response = 
      await api.get(`/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}`);

    const { data: { results } } = response.data;

    setHeroes(results);
  }, [apiKey, hash, name, timestamp]);

  const paginate = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  const currentHeroes = heroes.slice(indexOfFirstHero, indexOfLastHero);

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

        <CardsContainer isLoading={loading}>
          {loading ? <Loading /> : 
            currentHeroes.map(heroe => <Card key={heroe.id} heroesData={heroe} />)  
          }
        </CardsContainer>

        <Pagination 
          heroesPerPage={heroesPerPage} 
          totalHeroes={totalHeroes}
          paginate={paginate}
          currentPage={currentPage} 
        />
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