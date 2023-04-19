import React, { useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { CharacterSheetHeader } from '../components/character-sheet/character-sheet-header/CharacterSheetHeader';
import { MAX_LEVEL } from '../constants/experience-points';
import { CharacterSheetAbilityScores } from '../components/character-sheet/CharacterSheetAbilityScores';
import { CharacterSheetBodyTabSelector } from '../components/character-sheet/character-sheet-body/CharacterSheetBodyTabSelector';

type Props = {};

export const CharacterSheetContainer = (props: Props) => {
  const [characterName, setCharacterName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [race, setRace] = useState('');
  const [background, setBackground] = useState('');
  const [alignment, setAlignment] = useState('');
  const [level, setLevel] = useState(0); // TODO: [level, setLevel
  const [experiencePoints, setExperiencePoints] = useState(0);

  const [strength, setStrength] = useState(1);
  const [dexterity, setDexterity] = useState(1);
  const [constitution, setConstitution] = useState(1);
  const [intelligence, setIntelligence] = useState(1);
  const [wisdom, setWisdom] = useState(1);
  const [charisma, setCharisma] = useState(1);

  const [proficiencyBonus, setProficiencyBonus] = useState(0);
  const [inspiration, setInspiration] = useState(0);

  console.log(setProficiencyBonus);

  // update this to be a backend function call
  const levelUp = (): void => {
    const newLevel = level + 1 <= MAX_LEVEL ? level + 1 : MAX_LEVEL;
    setLevel(newLevel);
  };

  return (
    <>
      <Flex>
        <CharacterSheetHeader
          characterName={characterName}
          setCharacterName={setCharacterName}
          characterClass={characterClass}
          setCharacterClass={setCharacterClass}
          race={race}
          setRace={setRace}
          background={background}
          setBackground={setBackground}
          alignment={alignment}
          setAlignment={setAlignment}
          experiencePoints={experiencePoints}
          setExperiencePoints={setExperiencePoints}
          level={level}
          setLevel={setLevel}
          levelUp={levelUp}
          proficiencyBonus={proficiencyBonus}
          inspiration={inspiration}
          setInspiration={setInspiration}
        />
      </Flex>
      <Flex>
        <CharacterSheetAbilityScores
          strength={strength}
          setStrength={setStrength}
          dexterity={dexterity}
          setDexterity={setDexterity}
          constitution={constitution}
          setConstitution={setConstitution}
          intelligence={intelligence}
          setIntelligence={setIntelligence}
          wisdom={wisdom}
          setWisdom={setWisdom}
          charisma={charisma}
          setCharisma={setCharisma}
        />
        <CharacterSheetBodyTabSelector proficiencyBonus={proficiencyBonus} />
      </Flex>
    </>
  );
};
