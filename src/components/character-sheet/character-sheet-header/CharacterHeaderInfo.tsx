import { Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { LabelledInput } from '../../custom-components/LabelledInput';

type Props = {
  classAndLevel: string;
  setClassAndLevel: (classAndLevel: string) => void;
  race: string;
  setRace: (race: string) => void;
  background: string;
  setBackground: (background: string) => void;
  alignment: string;
  setAlignment: (alignment: string) => void;
  experiencePoints: number;
  setExperiencePoints: (experiencePoints: number) => void;
  playerName: string;
  setPlayerName: (playerName: string) => void;
} & { [stylingProp: string]: any };

// TODO change these stylings to be variants
export const CharacterHeaderInfo = ({
  classAndLevel,
  setClassAndLevel,
  race,
  setRace,
  background,
  setBackground,
  alignment,
  setAlignment,
  experiencePoints,
  setExperiencePoints,
  playerName,
  setPlayerName,
  ...stylingProps
}: Props) => {
  return (
    <Flex {...stylingProps}>
      <Flex flexDirection={'column'}>
        <LabelledInput
          stateValue={classAndLevel}
          setStateValue={setClassAndLevel}
          label='Class & Level'
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

      <Flex flexDirection={'column'} mx={'16px'}>
        <LabelledInput
          stateValue={playerName}
          setStateValue={setPlayerName}
          label='Player Name'
          mb={'16px'}
        />

        <LabelledInput
          stateValue={experiencePoints}
          setStateValue={setExperiencePoints}
          label='Experience Points'
        />
      </Flex>
    </Flex>
  );
};
