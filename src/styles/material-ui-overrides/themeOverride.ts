import { createTheme } from '@mui/material/styles';
import Color from 'styles/color';
import dialog from 'styles/material-ui-overrides/dialog';
import accordion from './accordion';
import button from './button';

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Color.PURPLE,
    },
    secondary: {
      main: Color.BLUE,
    },
    background: {
      paper: Color.GREY,
    },
  },

  components: {
    ...accordion,
    ...button,
    ...dialog,
  },
});
