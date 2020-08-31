import React from 'react';

import { Container, 
  Avatar, 
  HeroName, 
  ActorName, 
  Description 
} from './styles';

interface CardProps {
  heroesData: {
    id: string;
    name: string;
    thumbnail: {
      extension: string;
      path: string;
    }
    description: string;
  }
}

const Card: React.FC<CardProps> = ({ heroesData }) => {
  const imgUrl = `${heroesData.thumbnail.path}/standard_medium.${heroesData.thumbnail.extension}`;  
  
  return (
    <Container>
      <Avatar src={imgUrl} alt="Avatar" />
      <HeroName>{heroesData.name}</HeroName>
      <ActorName>Peter Parker</ActorName>
      <Description>{heroesData.description ? heroesData.description : 'No description.'}</Description>
    </Container>
  );
}

export default Card;