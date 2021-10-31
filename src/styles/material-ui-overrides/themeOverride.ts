import { adaptV4Theme, createTheme } from '@material-ui/core/styles';
import color from 'styles/color';
import dialog from 'styles/material-ui-overrides/dialog';
import accordion from './accordion';
import button from './button';

export default createTheme(
  adaptV4Theme({
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

    overrides: {
      ...accordion,
      ...button,
      ...dialog,
    },
  })
);
