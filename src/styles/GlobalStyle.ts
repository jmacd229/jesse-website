import { createGlobalStyle } from 'styled-components';
import color from 'styles/color';
import spacing from 'styles/spacing';
import focus from './focus';
import link from './link';

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

  body {
    margin:0;
    font-size: ${spacing(2)};
    background-color: ${color.grey};
    color: ${color.white};
  }

  *:focus {
    ${focus}
}

a {
  ${link}
}
`;
