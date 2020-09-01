import React from 'react';

import changeHeroName from '../../utils/changeHeroName';

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

  const { firstName, secondName } = changeHeroName(heroesData.name);

  return (
    <Container>
      <Avatar src={imgUrl} alt="Avatar" />
      <HeroName>{firstName ? firstName : heroesData.name}</HeroName>
      <ActorName>{secondName ? secondName : heroesData.name}</ActorName>
      <Description>{heroesData.description ? heroesData.description : 'No description.'}</Description>
    </Container>
  );
}

export default Card;