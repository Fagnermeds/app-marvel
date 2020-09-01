import React, { 
  useEffect, 
  useState, 
  useCallback,
  FormEvent 
} from 'react';

import api from '../../services/api';
import Input from '../../components/Input';
import marvelLogo from '../../assets/marvel-logo.png';
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

const initialPage = 1;

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [heroes, setHeroes] = useState<Heroes[]>([]);
  const [totalHeroes, setTotalHeroes] = useState(0);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [heroesPerPage] = useState(12)
  const [name, setName] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [changeOrder, setChangeOrder] = useState(false);

  const { timestamp, apiKey, hash } = apiConfig;


  useEffect(() => {
    const loadHeroes = async () => {
      setLoading(true);
      const response = 
        await api.get(`/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=100&orderBy=${orderBy}name`);
      
      const { data: { results } } = response.data;
      
      setTotalHeroes(results.length);
      setHeroes(results);
      setLoading(false);
    }
  
    loadHeroes();
  }, [apiKey, hash, orderBy, timestamp]);

  const handleSearch = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    const response = 
      await api.get(`/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}`);

    const { data: { results } } = response.data;

    setCurrentPage(initialPage);
    setTotalHeroes(results.length);
    setHeroes(results);
  }, [apiKey, hash, name, timestamp]);

  const paginate = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  const toggleOrder = useCallback(() => {
    setChangeOrder(!changeOrder);

    if (orderBy.length < 1) {
      setOrderBy('-');
    } else {
      setOrderBy('');
    }
  }, [changeOrder, orderBy]);

  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  const currentHeroes = heroes.slice(indexOfFirstHero, indexOfLastHero);

  return (
    <Container>
      <Header>
        <img src={marvelLogo} alt="Marvel" />
      </Header>

      <Main>
        <Title>Character</Title>

        <SearchForm onSubmit={handleSearch}>
          <Input 
            placeholder="Characters" 
            value={name} 
            onChange={(event) => setName(event.target.value)}  
          />
          <button type="submit">
            <img src={filterImg} alt="Filter"/>
          </button>
          <span>{ !changeOrder ? 'A-Z' : 'Z-A'}</span>
          <img onClick={toggleOrder} src={arrowDown} alt="Arrow"/>
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