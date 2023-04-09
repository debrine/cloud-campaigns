import { Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { ActiveButton } from '../buttons/ActiveButton';

// TODO type levelUp function
type Props = { level: number; levelUp: any } & { [stylingProp: string]: any };

export const MilestoneLevelComponent = ({ level, ...stylingProps }: Props) => {
  return (
    <Flex flexDirection={'column'} width={'fit-content'} {...stylingProps}>
      <Heading my={'16px'} color={'experienceBar'}>
        Level: {level}
      </Heading>
      <ActiveButton>Level Up</ActiveButton>
    </Flex>
  );
};
