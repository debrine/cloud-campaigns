import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { SkillOptionItem } from './skills/SkillOptionItem';
import { SkillOptionList } from './skills/SkillOptionList';
import {
  AbilityScoreModifiers,
  Skills,
} from '../../../models/character-sheet-models/ability-scores.model';

type Props = {
  proficiencyBonus: number;
  skills: Skills;
  control: any;
  abilityScoreModifiers: AbilityScoreModifiers;
};

export const CharacterSheetBodySkillDetails = (props: Props) => {
  return (
    <Flex>
      <SkillOptionList
        proficiencyBonus={props.proficiencyBonus}
        control={props.control}
        skills={props.skills}
        abilityScoreModifiers={props.abilityScoreModifiers}
      />
    </Flex>
  );
};
