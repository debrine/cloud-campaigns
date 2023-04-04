import { Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

type Props = { [stylingProp: string]: any };

// TODO change these stylings to be variants
export const CharacterHeaderInfo = (stylingProps: Props) => {
  return (
    <Flex {...stylingProps}>
      <Flex flexDirection={'column'}>
        <Text
          color={'text.secondary'}
          fontFamily={'Tahoma'}
          fontSize={'2xl'}
          textAlign={'center'}>
          Class & Level
        </Text>
        <Input
          width={'200px'}
          color={'text.primary'}
          focusBorderColor='text.secondary'
          variant={'flushed'}
          mb={'16px'}
        />
        <Text
          color={'text.secondary'}
          fontFamily={'Tahoma'}
          fontSize={'2xl'}
          textAlign={'center'}>
          Race
        </Text>
        <Input
          width={'200px'}
          color={'text.primary'}
          focusBorderColor='text.secondary'
          variant={'flushed'}
          mb={'16px'}
        />
      </Flex>

      <Flex flexDirection={'column'} mx={'16px'}>
        <Text
          color={'text.secondary'}
          fontFamily={'Tahoma'}
          fontSize={'2xl'}
          textAlign={'center'}>
          Background
        </Text>
        <Input
          width={'200px'}
          color={'text.primary'}
          focusBorderColor='text.secondary'
          variant={'flushed'}
          mb={'16px'}
        />
        <Text
          color={'text.secondary'}
          fontFamily={'Tahoma'}
          fontSize={'2xl'}
          textAlign={'center'}>
          Alignment
        </Text>
        <Input
          width={'200px'}
          color={'text.primary'}
          focusBorderColor='text.secondary'
          variant={'flushed'}
          mb={'16px'}
        />
      </Flex>

      <Flex flexDirection={'column'} mx={'16px'}>
        <Text
          color={'text.secondary'}
          fontFamily={'Tahoma'}
          fontSize={'2xl'}
          textAlign={'center'}>
          Player Name
        </Text>
        <Input
          width={'200px'}
          color={'text.primary'}
          focusBorderColor='text.secondary'
          variant={'flushed'}
          mb={'16px'}
        />
        <Text
          color={'text.secondary'}
          fontFamily={'Tahoma'}
          fontSize={'2xl'}
          textAlign={'center'}>
          Experience Points
        </Text>
        <Input
          width={'200px'}
          color={'text.primary'}
          focusBorderColor='text.secondary'
          variant={'flushed'}
          mb={'16px'}
        />
      </Flex>
    </Flex>
  );
};
