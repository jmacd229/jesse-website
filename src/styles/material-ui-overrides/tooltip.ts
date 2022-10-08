import { Components } from '@mui/material/styles';
import spacing from '../spacing';

export default {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        fontSize: spacing(1.5),
        lineHeight: spacing(1.5),
      },
    },
  },
} as Components;
