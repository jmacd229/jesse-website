import { createTheme } from '@material-ui/core/styles';
import color from 'styles/color';
import accordion from './accordion';
import button from './button';

export default createTheme({
  palette: {
    primary: {
      main: color.purple,
    },
    secondary: {
      main: color.blue,
    },
  },

  overrides: {
    ...accordion,
    ...button
  },
});
