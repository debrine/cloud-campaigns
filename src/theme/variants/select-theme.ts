import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    color: 'text.primary',
  },
  icon: {
    color: 'text.mutedDark',
  },
});

export const selectTheme = defineMultiStyleConfig({ baseStyle });
