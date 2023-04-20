import { Box, Flex, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';
import { ActiveButton } from '../buttons/ActiveButton';

// TODO type levelUp function
type Props = { level: number; levelUp: any } & { [stylingProp: string]: any };

export const MilestoneLevelComponent = ({
  level,
  levelUp,
  ...stylingProps
}: Props) => {
  return (
    <Flex mt={'16px'} alignItems={'center'} {...stylingProps}>
      {/* <Heading my={'16px'} color={'experienceBar'}>
        Level: {level}
      </Heading> */}
      <Box width='fit-content' mr={'64px'}>
        <Stat color={'experienceBar'}>
          <StatLabel>Level</StatLabel>
          <StatNumber>{level}</StatNumber>
        </Stat>
      </Box>
      <ActiveButton onClick={() => levelUp()}>Level Up</ActiveButton>
    </Flex>
  );
};
