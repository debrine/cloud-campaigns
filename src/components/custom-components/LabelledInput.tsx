import React from 'react';
import { Flex, Input, Text } from '@chakra-ui/react';

type Props = {
  label: string;
  stateValue: string | number;
  setStateValue: (value: any) => void;
} & { [stylingProp: string]: any };

export const LabelledInput = ({
  label,
  stateValue,
  setStateValue,
  ...stylingProps
}: Props) => {
  return (
    <Flex {...stylingProps}>
      <Flex flexDirection={'column'}>
        <Input
          width={'200px'}
          color={'text.primary'}
          focusBorderColor='text.secondary'
          variant={'flushed'}
          onChange={(e) => setStateValue(e.target.value)}
          value={stateValue}
        />
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
