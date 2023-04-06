import { Flex } from '@chakra-ui/react';
import React from 'react';
import { CharacterSheetName } from './CharacterSheetName';
import { CharacterHeaderInfo } from './CharacterHeaderInfo';
import { CharacterHeaderPhoto } from './CharacterHeaderPhoto';

type Props = {
  characterName: string;
  setCharacterName: (name: string) => void;
  classAndLevel: string;
  setClassAndLevel: (classAndLevel: string) => void;
  race: string;
  setRace: (race: string) => void;
  background: string;
  setBackground: (background: string) => void;
  alignment: string;
  setAlignment: (alignment: string) => void;
  playerName: string;
  setPlayerName: (playerName: string) => void;
  experiencePoints: number;
  setExperiencePoints: (experiencePoints: number) => void;
};

export const CharacterSheetHeader = (props: Props) => {
  return (
    <Flex
      bg='background.panel'
      borderRadius={10}
      p='8px'
      width={'100%'}
      justifyContent={'space-evenly'}>
      <CharacterSheetName
        characterName={props.characterName}
        setCharacterName={props.setCharacterName}
        pr={'16px'}
      />
      <CharacterHeaderInfo
        classAndLevel={props.classAndLevel}
        setClassAndLevel={props.setClassAndLevel}
        race={props.race}
        setRace={props.setRace}
        background={props.background}
        setBackground={props.setBackground}
        alignment={props.alignment}
        setAlignment={props.setAlignment}
        experiencePoints={props.experiencePoints}
        setExperiencePoints={props.setExperiencePoints}
        playerName={props.playerName}
        setPlayerName={props.setPlayerName}
      />
    </Flex>
  );
};
