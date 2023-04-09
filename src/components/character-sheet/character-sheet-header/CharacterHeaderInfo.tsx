import { Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { LabelledInput } from '../../custom-components/LabelledInput';
import { LabelledNumberInput } from '../../custom-components/LabelledNumberInput';

type Props = {
  characterClass: string;
  setCharacterClass: (classAndLevel: string) => void;
  race: string;
  setRace: (race: string) => void;
  background: string;
  setBackground: (background: string) => void;
  alignment: string;
  setAlignment: (alignment: string) => void;
  experiencePoints: number;
  setExperiencePoints: (experiencePoints: number) => void;
} & { [stylingProp: string]: any };

// TODO change these stylings to be variants
export const CharacterHeaderInfo = ({
  characterClass,
  setCharacterClass,
  race,
  setRace,
  background,
  setBackground,
  alignment,
  setAlignment,
  experiencePoints,
  setExperiencePoints,
  ...stylingProps
}: Props) => {
  return (
    <Flex {...stylingProps}>
      <Flex flexDirection={'column'}>
        <LabelledInput
          stateValue={characterClass}
          setStateValue={setCharacterClass}
          label='Class'
          mb={'16px'}
        />
        <LabelledInput stateValue={race} setStateValue={setRace} label='Race' />
      </Flex>

      <Flex flexDirection={'column'} mx={'16px'}>
        <LabelledInput
          stateValue={background}
          setStateValue={setBackground}
          label='Background'
          mb={'16px'}
        />
        <LabelledInput
          stateValue={alignment}
          setStateValue={setAlignment}
          label='Alignment'
        />
      </Flex>
    </Flex>
  );
};
