import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: 'Nunito', sans-serif !important;
  width: 100%;
  height: 100vh;
  background: #fff;
  color: #000;
  scroll-behavior: smooth;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
export default GlobalStyle;
