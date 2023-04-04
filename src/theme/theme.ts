import { RAW_COLOURS } from './RAW_COLOURS';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    background: {
      app: RAW_COLOURS.greys[5],
      panel: RAW_COLOURS.blues[3],
    },
    text: {
      primary: RAW_COLOURS.whites[0],
      secondary: RAW_COLOURS.blues[0],
    },
  },
});
