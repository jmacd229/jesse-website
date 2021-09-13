import { createGlobalStyle } from 'styled-components';
import focus from './focus';

export default createGlobalStyle`
:root {
    font-family: 'Raleway', sans-serif;
    font-size: 8px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
  h1,h2,h3,h4,h5,h6 {
    margin: unset;
  }

  *:focus {
    ${focus}
}
`;
