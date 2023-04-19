import React from 'react';
import {
  Flex,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

type Props = {
  label: string;
  stateValue: number;
  setStateValue: (value: any) => void;
  max?: number;
} & { [stylingProp: string]: any };

export const LabelledNumberInput = ({
  label,
  stateValue,
  setStateValue,
  max,
  ...stylingProps
}: Props) => {
  return (
    <Flex {...stylingProps}>
      <Flex flexDirection={'column'}>
        <NumberInput
          width={'200px'}
          color={'text.primary'}
          focusBorderColor='text.secondary'
          variant={'flushed'}
          onChange={(e) => setStateValue(parseInt(e))}
          value={stateValue}
          max={max}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper border={'none'} />
            <NumberDecrementStepper border={'none'} />
          </NumberInputStepper>
        </NumberInput>
        <Text
          color={'text.secondary'}
          fontFamily={'Tahoma'}
          fontSize={'12px'}
          textAlign={'left'}
          fontWeight={700}>
          {label}
        </Text>
      </Flex>
    </Flex>
  );
};
