import { RAW_COLOURS } from './RAW_COLOURS';
import { extendTheme } from '@chakra-ui/react';
import { selectTheme } from './variants/select-theme';

// TODO add in button theme

export const theme = extendTheme({
  colors: {
    background: {
      app: RAW_COLOURS.greys[5],
      panel: RAW_COLOURS.blues[3],
      experienceBar: RAW_COLOURS.blues[6],
      divider: RAW_COLOURS.blues[0],
      container: RAW_COLOURS.greys[7],
    },
    experienceBar: RAW_COLOURS.blues[6],
    text: {
      primary: RAW_COLOURS.whites[0],
      secondary: RAW_COLOURS.blues[6],
      mutedDark: RAW_COLOURS.greys[6],
      lightBlue: RAW_COLOURS.blues[0],
    },
    negative: RAW_COLOURS.reds[0],
    positive: RAW_COLOURS.greens[0],
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
  components: { Select: selectTheme },
});
