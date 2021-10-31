import { Components } from '@mui/material/styles';
import color from 'styles/color';
import spacing from 'styles/spacing';

export default {
  MuiAccordion: {
    styleOverrides: {
      root: {
        color: color.white,
        backgroundColor: 'transparent',
        '&.Mui-expanded': {
          margin: 0,
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        color: color.blue,
        textDecoration: 'underline',
        minHeight: 'unset',
        width: 'fit-content',
        padding: 0,
        'text-decoration': 'none',
        '&.Mui-expanded': {
          minHeight: 'unset',
        },
      },
      content: {
        margin: 0,
        '&.Mui-expanded': {
          margin: 0,
        },
      },
      expandIcon: {
        padding: `0 ${spacing(1)}`,
        color: color.blue,
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        flexDirection: 'column',
        backgroundColor: color.darkGrey,
        position: 'relative',
        marginTop: spacing(1),
      },
    },
  },
} as Components;
