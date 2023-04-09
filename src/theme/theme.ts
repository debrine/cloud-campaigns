import { RAW_COLOURS } from './RAW_COLOURS';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    background: {
      app: RAW_COLOURS.greys[5],
      panel: RAW_COLOURS.blues[3],
      experienceBar: RAW_COLOURS.purples[2],
    },
    experienceBar: RAW_COLOURS.purples[1],
    text: {
      primary: RAW_COLOURS.whites[0],
      secondary: RAW_COLOURS.blues[0],
    },
    negative: RAW_COLOURS.reds[0],
    action: RAW_COLOURS.blues[0],
    button: {
      primary: {
        background: RAW_COLOURS.blues[0],
        text: RAW_COLOURS.whites[0],
        hover: {
          background: RAW_COLOURS.blues[4],
        },
        active: {
          background: RAW_COLOURS.blues[5],
        },
      },
    },
  },
});
