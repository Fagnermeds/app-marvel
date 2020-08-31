import styled from 'styled-components';

export const Container = styled.div`
  width: 290px;
  height: 220px;
  border: 1px solid #d8dde6;
  border-bottom: 2px solid #ed1d24;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 22px 10px;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const HeroName = styled.strong`
  margin-top: 2px;
  size: 16px;
  line-height: 23px;
  color: #4a4a4a;
`;

export const ActorName = styled.span`
  margin-top: 14px;
  size: 14px;
  line-height: 23px;
  color: #ed1d24;
`;

export const Description = styled.p`
  text-align: center;
  width: 248px;
  height: 44px;
  margin: 36px 0 10px;
  size: 14px;
  color: #4a4a4a;
  line-height: 23px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;