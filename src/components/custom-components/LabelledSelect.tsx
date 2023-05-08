import React, { ChangeEvent } from 'react';
import { Flex, Select, Text } from '@chakra-ui/react';
import { theme } from '../../theme/theme';
import { Controller } from 'react-hook-form';

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

type ControlledProps = {
  name: string;
  control: any;
  label: string;
  options: string[];
} & { [stylingProp: string]: any };

export const ControlledLabelledSelect = ({
  name,
  label,
  control,
  options,
  ...stylingProps
}: ControlledProps) => {
  return (
    <Flex {...stylingProps}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <LabelledSelect
            width={'200px'}
            color={'text.primary'}
            focusBorderColor='text.secondary'
            variant={'flushed'}
            setStateValue={onChange}
            label={label}
            stateValue={value}
            options={options}
          />
        )}
      />
    </Flex>
  );
};
