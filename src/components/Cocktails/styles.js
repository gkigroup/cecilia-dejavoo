import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/images/bg.png');
  height: 100vh;
  max-height: 1080px;
  max-width: 1920px;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  background-size: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  column-gap: 60px;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: 20%;
  cursor: pointer;
`;

export const CocktailImage = styled.img`
  height: 510px;
  width: 100%;
`;
export const TextImage = styled.img``;
