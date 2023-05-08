import { Box, Flex, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';
import { CharacterSheetName } from './CharacterSheetName';
import { CharacterHeaderInfo } from './CharacterHeaderInfo';
import { EditableImage } from '../../custom-components/CharacterHeaderPhoto';
import { StyledFlexPanel } from '../../custom-components/StyledFlexPanel';
import { CharacterHeaderLevel } from './CharacterHeaderLevel';
import {
  CharacterClass,
  CharacterRace,
  LevellingType,
} from '../../../enums/character-sheet-enums';
import { LabelledNumberInput } from '../../custom-components/LabelledNumberInput';
import { CharacterSheet } from '../../../models/character-sheet-models/character-sheet.model';
import { ControlledLabelledInput } from '../../custom-components/LabelledInput';
import { calculateProficiencyBonus } from '../../../utils/calculation-utils';

type Props = {
  control: any; // TODO - type this
  level: number;
  levelUp: () => void;
};

export const CharacterSheetHeader = ({ control, level, levelUp }: Props) => {
  const proficiencyBonus = calculateProficiencyBonus(level);

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
            <ControlledLabelledInput
              label='Character Name'
              name='characterName'
              control={control}
            />
            <CharacterHeaderLevel
              levelType={LevellingType.Milestone}
              level={level}
              levelUp={levelUp}
            />
          </Flex>
          <Flex flexDirection={'column'} m={'16px'}>
            {/* <LabelledNumberInput
              label={'Inspiration'}
              stateValue={props.inspiration}
              setStateValue={props.getUpdaterForField('inspiration')}
              mb={'16px'}
            /> */}
            <Box>
              <Stat color='text.secondary'>
                <StatLabel>Proficiency Bonus</StatLabel>
                <StatNumber textAlign={'left'} color={'positive'}>
                  {proficiencyBonus > 0
                    ? `+${proficiencyBonus}`
                    : proficiencyBonus}
                </StatNumber>
              </Stat>
            </Box>
          </Flex>
        </Flex>
        <CharacterHeaderInfo my={'16px'} control={control} />
      </StyledFlexPanel>
    </>
  );
};
