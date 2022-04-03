import { Components } from '@mui/material/styles';
import Color from 'styles/color';
import spacing from 'styles/spacing';

export default {
  MuiAccordion: {
    styleOverrides: {
      root: {
        color: Color.WHITE,
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
        color: Color.BLUE,
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
        color: Color.BLUE,
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        flexDirection: 'column',
        backgroundColor: Color.DARK_GREY,
        position: 'relative',
        marginTop: spacing(1),
      },
    },
  },
} as Components;
