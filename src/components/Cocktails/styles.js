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

export const Price = styled.p`
  font-size: 26px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  padding-top: 1rem;
`;
