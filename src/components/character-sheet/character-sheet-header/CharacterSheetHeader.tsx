import { Box, Flex, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';
import { CharacterSheetName } from './CharacterSheetName';
import { CharacterHeaderInfo } from './CharacterHeaderInfo';
import { EditableImage } from '../../custom-components/CharacterHeaderPhoto';
import { ExperienceBar } from '../../custom-components/level-components/ExperienceBar';
import { StyledFlexPanel } from '../../custom-components/StyledFlexPanel';
import { CharacterHeaderLevel } from './CharacterHeaderLevel';
import { LevellingType } from '../../../enums/character-sheet-enums';
import { LabelledNumberInput } from '../../custom-components/LabelledNumberInput';

type Props = {
  characterName: string;
  setCharacterName: (name: string) => void;
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
  level: number;
  setLevel: (level: number) => void;
  levelUp: any; // TODO type this to level up function
  proficiencyBonus: number;
  inspiration: number;
  setInspiration: (inspiration: number) => void;
};

export const CharacterSheetHeader = (props: Props) => {
  return (
    <>
      <StyledFlexPanel mb={'16px'} justifyContent={'space-between'}>
        <Flex justifyContent={'space-evenly'}>
          <EditableImage
            src={'https://i.imgur.com/AMM5laD.jpeg'}
            height={'200px'}
            mx='16px'
          />
          <Flex flexDirection={'column'} m={'16px'}>
            <CharacterSheetName
              characterName={props.characterName}
              setCharacterName={props.setCharacterName}
              pr={'16px'}
            />
            <CharacterHeaderLevel
              levelType={LevellingType.Milestone}
              level={props.level}
              experience={props.experiencePoints}
              levelUp={props.levelUp}
            />
          </Flex>
          <Flex flexDirection={'column'} m={'16px'}>
            <LabelledNumberInput
              label={'Inspiration'}
              stateValue={props.inspiration}
              setStateValue={props.setInspiration}
              mb={'16px'}
            />
            <Box>
              <Stat color='text.secondary'>
                <StatLabel>Proficiency Bonus</StatLabel>
                <StatNumber textAlign={'left'}>
                  {props.proficiencyBonus > 0
                    ? `+${props.proficiencyBonus}`
                    : props.proficiencyBonus}
                </StatNumber>
              </Stat>
            </Box>
          </Flex>
        </Flex>
        <CharacterHeaderInfo
          my={'16px'}
          characterClass={props.characterClass}
          setCharacterClass={props.setCharacterClass}
          race={props.race}
          setRace={props.setRace}
          background={props.background}
          setBackground={props.setBackground}
          alignment={props.alignment}
          setAlignment={props.setAlignment}
          experiencePoints={props.experiencePoints}
          setExperiencePoints={props.setExperiencePoints}
        />
      </StyledFlexPanel>
    </>
  );
};
