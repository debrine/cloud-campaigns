import { Flex, Text, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

type Props = { [propName: string]: any };

export const CharacterSheetName = (stylingProps: Props) => {
  return (
    <Flex flexDirection={'column'} {...stylingProps}>
      <Text
        color={'text.secondary'}
        fontFamily={'Tahoma'}
        fontSize={'2xl'}
        textAlign={'center'}>
        Character Name
      </Text>
      <Input
        width={'200px'}
        color={'text.primary'}
        focusBorderColor='text.secondary'
        variant={'flushed'}
      />
    </Flex>
  );
};
