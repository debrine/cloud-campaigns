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
import { Controller } from 'react-hook-form';

type Props = {
  abilityScore: number;
  abilityModifier: number;
  setAbilityScore: (value: number) => void;
  label: string;
} & { [stylingProp: string]: any };

export const AbilityScoreInputWithModifier = ({
  abilityScore,
  setAbilityScore,
  label,
  abilityModifier,
  ...stylingProps
}: Props) => {
  console.log('ability score', abilityScore);
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
        color={getTextColourForPositiveNegativeNumber(abilityModifier)}
        fontWeight={900}>
        {abilityModifier > 0 ? '+' : ''}
        {abilityModifier}
      </Text>
    </Flex>
  );
};

export const ControlledAbilityScoreWithModifier = ({
  name,
  control,
}: {
  name: string;
  control: any;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <AbilityScoreInputWithModifier
          abilityScore={value.abilityScore}
          label={value.abilityName}
          abilityModifier={value.abilityModifier}
          setAbilityScore={(newValue: number) =>
            onChange({
              abilityScore: newValue,
              abilityModifier: calculateModifierFromAbilityScore(newValue),
            })
          }
        />
      )}
    />
  );
};
