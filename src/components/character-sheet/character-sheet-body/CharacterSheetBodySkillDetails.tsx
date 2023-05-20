import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { SkillOptionList } from './skills/SkillOptionList';
import {
  AbilityScores,
  Skills,
} from '../../../models/character-sheet-models/ability-scores.model';
import { SavingThrowsList } from './skills/SavingThrowsList';

type Props = {
  proficiencyBonus: number;
  skills: Skills;
  control: any;
  abilityScores: AbilityScores;
};

export const CharacterSheetBodySkillDetails = ({
  proficiencyBonus,
  skills,
  control,
  abilityScores,
}: Props) => {
  return (
    <Flex>
      <SkillOptionList
        proficiencyBonus={proficiencyBonus}
        control={control}
        skills={skills}
        abilityScores={abilityScores}
        mr={'32px'}
      />
      <SavingThrowsList abilityScores={abilityScores} control={control} />
    </Flex>
  );
};
