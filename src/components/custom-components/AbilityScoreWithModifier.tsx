import {
  Flex,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from '@chakra-ui/react';
import React from 'react';
import { calculateModifierFromAbilityScore } from '../../utils/calculation-utils';
import { getTextColourForPositiveNegativeNumber } from '../../utils/colour-utils';

type Props = {
  abilityScore: number;
  setAbilityScore: (value: number) => void;
  label: string;
} & { [stylingProp: string]: any };

export const AbilityScoreWithModifier = ({
  abilityScore,
  setAbilityScore,
  label,
  ...stylingProps
}: Props) => {
  const modifier = calculateModifierFromAbilityScore(abilityScore);

  return (
    <Flex {...stylingProps} flexDirection={'column'} alignItems={'center'}>
      <Text color={'text.secondary'} fontWeight={700}>
        {label}
      </Text>
      <NumberInput
        value={abilityScore}
        onChange={(e) => setAbilityScore(parseInt(e))}
        width={'80px'}
        color='text.primary'
        max={30}
        min={1}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper border={'none'} color={'text.mutedDark'} />
          <NumberDecrementStepper border={'none'} color={'text.mutedDark'} />
        </NumberInputStepper>
      </NumberInput>
      <Text
        fontSize={'l'}
        color={getTextColourForPositiveNegativeNumber(modifier)}
        fontWeight={900}>
        {modifier > 0 ? '+' : ''}
        {modifier}
      </Text>
    </Flex>
  );
};
