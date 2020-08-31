import React from 'react';

import { Container, 
  Avatar, 
  HeroName, 
  ActorName, 
  Description 
} from './styles';

interface CardProps {
  avatar: string;
  heroName: string;
  actorName: string;
  description: string;
}

const Card: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlDHczOxqK_NdG2Eq43fpH89ugAwGW7F8uRQ&usqp=CAU" alt="Avatar" />
      <HeroName>Spider Man</HeroName>
      <ActorName>Peter Parker</ActorName>
      <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Description>
    </Container>
  );
}

export default Card;