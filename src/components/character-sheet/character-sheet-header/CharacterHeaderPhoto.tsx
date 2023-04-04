import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

type Props = { [stylingProp: string]: any };

export const CharacterHeaderPhoto = (props: Props) => {
  return (
    <Flex>
      <Text
        color={'text.secondary'}
        fontFamily={'Tahoma'}
        fontSize={'2xl'}
        textAlign={'center'}>
        Character Photo
      </Text>
    </Flex>
  );
};
