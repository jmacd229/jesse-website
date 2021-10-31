import { createTheme } from '@mui/material/styles';
import color from 'styles/color';
import dialog from 'styles/material-ui-overrides/dialog';
import accordion from './accordion';
import button from './button';

export default createTheme({
  palette: {
    mode: 'dark',
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

  components: {
    ...accordion,
    ...button,
    ...dialog,
  },
});
