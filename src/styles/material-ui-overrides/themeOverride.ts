import { createTheme } from '@material-ui/core/styles';
import color from 'styles/color';
import accordion from './accordion';
import button from './button';

export default createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: color.purple,
    },
    secondary: {
      main: color.blue,
    },
    background: {
      paper: color.grey,
    },
  },

  overrides: {
    ...accordion,
    ...button,
  },
});
