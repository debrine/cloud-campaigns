import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { SkillOptionList } from './skills/SkillOptionList';
import {
  AbilityScores,
  Skills,
} from '../../../models/character-sheet-models/ability-scores.model';
import { SavingThrowsList } from './skills/SavingThrowsList';
import { AbilityContainer } from './skills/AbilityContainer';
import { CharacterSheet } from '../../../models/character-sheet-models/character-sheet.model';

type Props = {
  proficiencyBonus: number;
  skills: Skills;
  control: any;
  abilityScores: AbilityScores;
  abilities: CharacterSheet['abilities'];
};

export const CharacterSheetBodySkillDetails = ({
  proficiencyBonus,
  skills,
  control,
  abilityScores,
  abilities,
}: Props) => {
  return (
    <Flex>
      <AbilityContainer
        racialAbilities={abilities.racial}
        classAbilities={abilities.class}
        feats={abilities.feat}
        items={abilities.item}
        mr={'32px'}
      />
      <Flex flexDirection={'column'}>
        <SavingThrowsList
          abilityScores={abilityScores}
          control={control}
          mb={'16px'}
        />
        <SkillOptionList
          proficiencyBonus={proficiencyBonus}
          control={control}
          skills={skills}
          abilityScores={abilityScores}
        />
      </Flex>
    </Flex>
  );
};
