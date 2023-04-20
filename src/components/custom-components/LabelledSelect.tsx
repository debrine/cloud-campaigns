import React, { ChangeEvent } from 'react';
import { Flex, Input, Select, Text } from '@chakra-ui/react';
import { theme } from '../../theme/theme';

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
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStateValue(event.target.value);
  };

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
          colorScheme={'gray'}
          focusBorderColor='text.secondary'
          variant={'flushed'}
          value={stateValue}
          onChange={handleChange}>
          {options.map((option) => (
            <option
              key={option}
              value={option}
              style={
                {
                  background: theme.colors.background.app,
                  color: theme.colors.text.primary,
                } as React.CSSProperties
              }>
              {option}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
};
