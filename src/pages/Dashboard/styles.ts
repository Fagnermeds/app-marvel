import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
`;

export const Header = styled.header`
  width: 100%;
  height: 95px;
  background-color: #ed1d24;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 1318px;
  height: 100%;
  max-height: 1040px;
  background-color: #FFF;

  margin: 36px auto 0;
  padding: 34px 36px;
`;


export const Title = styled.h1`
  color: #ed1d24;
`;

export const SearchForm = styled.div`
  margin-top: 16px;

  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    margin-left: 38px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.5;
    }
  }

  span {
    size: 14px;
    color: #4a4a4a;
    margin-left: 10px;
  }
`;

export const CardsContainer = styled.div`
  margin-top: 30px;
  
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(3,1fr);
  grid-gap: 30px;
`;

export const Footer = styled.footer`
  margin-top: 36px;
  height: 222px;
  background-color: #edeef0;
  border-top: 4px solid #ed1d24;
  position: relative;

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #e6e7e8;
    height: 105px;
    width: 100%;  

    display: flex;
    align-items: center;
    justify-content: center;

    p {
      size: 14px;
      color: #4a4a4a;
      max-width: 668px;
    }
  }
`;