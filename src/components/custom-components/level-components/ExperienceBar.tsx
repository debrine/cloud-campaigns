import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import {
  calculateExperienceNeededForNextLevel,
  getExperienceNeededForLevelUp,
} from '../../../utils/calculation-utils';

type Props = {
  level: number;
  currentExperiencePoints: number;
} & { [stylingProp: string]: any };

export const ExperienceBar = ({
  level,
  currentExperiencePoints,
  ...stylingProps
}: Props) => {
  const nextLevel = level + 1 < 20 ? level + 1 : 20;

  const { remainingExperienceForNextLevel, currentLevelProgressPercentage } =
    calculateExperienceNeededForNextLevel(level, currentExperiencePoints);

  const experienceNeededToLevelUp = getExperienceNeededForLevelUp(level);

  console.log(
    'remainingExperienceForNextLevel',
    remainingExperienceForNextLevel
  );
  console.log('currentLevelProgressPercentage', experienceNeededToLevelUp);
  return (
    <Flex {...stylingProps}>
      <Text>{level}</Text>
      <Box
        width={'200px'}
        height={'8px'}
        bg={'theme.background.experienceBar'}
        borderRadius={10}>
        <Box
          width={`${currentLevelProgressPercentage}%`}
          bg={'theme.experienceBar'}></Box>
      </Box>

      <Text>{nextLevel}</Text>
    </Flex>
  );
};
