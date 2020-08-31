import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width:  148px;
  margin: 48px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    size: 14px;
    color: #c2cbd2;
  }
`;

export const LeftButton = styled.button`
  background-color: transparent;
  width: 22px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #c2cbd2;

  &:disabled {
    cursor: default;
  }
`;

export const Page = styled.div`
  width: 40px;
  height: 26px;
  border-radius: 4px;
  border-bottom: 1px solid #9b9b9b;
  size: 14px;
  color: #4a4a4a;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightButton = styled.button`
  background-color: transparent;
  width: 22px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #c2cbd2;
`;