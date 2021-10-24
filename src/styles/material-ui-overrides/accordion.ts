import { Overrides } from '@material-ui/core/styles/overrides';
import color from 'styles/color';
import spacing from 'styles/spacing';

export default {
  MuiAccordion: {
    root: {
      color: color.white,
      backgroundColor: 'transparent',
      '&$expanded': {
        margin: 0,
      },
    },
  },
  MuiAccordionSummary: {
    root: {
      color: color.blue,
      textDecoration: 'underline',
      minHeight: null,
      width: 'fit-content',
      padding: 0,
      'text-decoration': 'none',
      '&$expanded': {
        minHeight: null,
      },
    },
    content: {
      margin: 0,
      '&$expanded': {
        margin: 0,
      },
    },
    expandIcon: {
      padding: `0 ${spacing(1)}`,
      color: color.blue,
    },
  },
  MuiAccordionDetails: {
    root: {
      flexDirection: 'column',
      backgroundColor: color.darkGrey,
      position: 'relative',
      marginTop: spacing(1),
    },
  },
} as Overrides;
