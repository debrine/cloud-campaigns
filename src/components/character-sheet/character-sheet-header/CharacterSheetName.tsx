import { Flex, Text, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { LabelledInput } from '../../custom-components/LabelledInput';

type Props = {
  characterName: string;
  setCharacterName: (value: string) => void;
} & { [stylingProp: string]: any };

export const CharacterSheetName = ({
  characterName,
  setCharacterName,
  ...stylingProps
}: Props) => {
  return (
    <LabelledInput
      label={'Character Name'}
      stateValue={characterName}
      setStateValue={setCharacterName}
      {...stylingProps}
    />
  );
};
