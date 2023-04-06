import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  abilityScore: number;
  setAbilityScore: (value: number) => void;
  label: string;
} & { [stylingProp: string]: any };

export const AbilityScoreWithModifier = ({
  abilityScore,
  setAbilityScore,
  ...stylingProps
}: Props) => {
  return <Box {...stylingProps}></Box>;
};
