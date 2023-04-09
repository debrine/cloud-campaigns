import { Button } from '@chakra-ui/react';
import React from 'react';

// TODO convert this to a button theme/variant
type Props = { [prop: string]: any };

export const ActiveButton = (props: Props) => {
  return (
    <Button
      bg={'button.primary.background'}
      color={'button.primary.text'}
      _hover={{
        bg: 'button.primary.hover.background',
      }}
      _active={{
        bg: 'button.primary.active.background',
      }}
      {...props}>
      {props.children}
    </Button>
  );
};
