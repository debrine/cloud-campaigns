import React from 'react';
import { Flex, Input, Select, Text } from '@chakra-ui/react';

type Props = {
  label: string;
  stateValue: string | number;
  setStateValue: (value: any) => void;
  options: string[];
} & { [stylingProp: string]: any };

export const LabelledSelect = ({
  label,
  stateValue,
  setStateValue,
  options,
  ...stylingProps
}: Props) => {
  return (
    <Flex {...stylingProps}>
      <Flex flexDirection={'column'}>
        <Text
          color={'text.secondary'}
          fontFamily={'Tahoma'}
          fontSize={'12px'}
          textAlign={'left'}
          fontWeight={700}>
          {label}
        </Text>
        <Select
          width={'200px'}
          color={'text.primary'}
          focusBorderColor='text.secondary'
          variant={'flushed'}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
};
