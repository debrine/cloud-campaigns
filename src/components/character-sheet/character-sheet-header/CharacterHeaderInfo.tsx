import { Flex } from '@chakra-ui/react';
import React from 'react';
import { LabelledInput } from '../../custom-components/LabelledInput';
import { LabelledSelect } from '../../custom-components/LabelledSelect';
import {
  CharacterClass,
  CharacterRace,
} from '../../../enums/character-sheet-enums';

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
        <LabelledSelect
          stateValue={characterClass}
          setStateValue={setCharacterClass}
          label='Class'
          options={Object.values(CharacterClass)}
          mb={'16px'}
        />
        <LabelledInput
          stateValue={background}
          setStateValue={setBackground}
          label='Background'
          mb={'16px'}
        />
      </Flex>

      <Flex flexDirection={'column'} mx={'16px'}>
        <LabelledSelect
          stateValue={race}
          setStateValue={setRace}
          label='Race'
          options={Object.values(CharacterRace)}
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
