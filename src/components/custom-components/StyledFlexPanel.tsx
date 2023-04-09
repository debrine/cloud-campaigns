import { Flex } from '@chakra-ui/react';
import React from 'react';

type Props = { [stylingProp: string]: any };

// TODO seperate styling props from other props
export const StyledFlexPanel = (props: Props) => {
  return (
    <Flex
      bg='background.panel'
      borderRadius={10}
      p='8px'
      width={'100%'}
      justifyContent={'space-evenly'}
      {...props}>
      {props.children}
    </Flex>
  );
};
