import React from 'react';

import Input from '../../components/Input';
import filterImg from '../../assets/filter.svg';

import { 
  Container, 
  Header, 
  Main, 
  Title,
  Search,
  Footer 
} from './styles';
import Card from '../../components/Card';

const Dashboard = () => {
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

        <Card />
      </Main>

      <Footer>

      </Footer>
    </Container>
  );
}

export default Dashboard;