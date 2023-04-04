import React, { useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { CharacterSheetHeader } from '../components/character-sheet/character-sheet-header/CharacterSheetHeader';

type Props = {};

export const CharacterSheetContainer = (props: Props) => {
  const [characterName, setCharacterName] = useState('');
  const [classAndLevel, setClassAndLevel] = useState('Class - 0');
  const [race, setRace] = useState('');
  const [background, setBackground] = useState('');
  const [alignment, setAlignment] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [experiencePoints, setExperiencePoints] = useState(0);

  return (
    <Flex>
      <CharacterSheetHeader
        characterName={characterName}
        setCharacterName={setCharacterName}
        classAndLevel={classAndLevel}
        setClassAndLevel={setClassAndLevel}
        race={race}
        setRace={setRace}
        background={background}
        setBackground={setBackground}
        alignment={alignment}
        setAlignment={setAlignment}
        playerName={playerName}
        setPlayerName={setPlayerName}
        experiencePoints={experiencePoints}
        setExperiencePoints={setExperiencePoints}
      />
    </Flex>
  );
};
