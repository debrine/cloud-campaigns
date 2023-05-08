import React from 'react';
import { StyledFlexPanel } from '../custom-components/StyledFlexPanel';
import {
  AbilityScoreWithModifier,
  ControlledAbilityScoreWithModifier,
} from '../custom-components/AbilityScoreWithModifier';
import { Divider } from '@chakra-ui/react';

type Props = {
  control: any; // TODO type this to control function
};

export const CharacterSheetAbilityScores = ({ control }: Props) => {
  return (
    <StyledFlexPanel flexDirection={'column'} width={'fit-content'}>
      <ControlledAbilityScoreWithModifier
        name={'abilityScores.strength'}
        label={'Strength'}
        control={control}
      />
      <Divider my={'8px'} />
      <ControlledAbilityScoreWithModifier
        name={'abilityScores.dexterity'}
        control={control}
        label={'Dexterity'}
      />
      <Divider my={'8px'} />

      <ControlledAbilityScoreWithModifier
        name={'abilityScores.constitution'}
        control={control}
        label={'Constitution'}
      />
      <Divider my={'8px'} />

      <ControlledAbilityScoreWithModifier
        name={'abilityScores.intelligence'}
        control={control}
        label={'Intelligence'}
      />
      <Divider my={'8px'} />

      <ControlledAbilityScoreWithModifier
        label={'Wisdom'}
        name={'abilityScores.wisdom'}
        control={control}
      />
      <Divider my={'8px'} />

      <ControlledAbilityScoreWithModifier
        label={'Charisma'}
        name={'abilityScores.charisma'}
        control={control}
      />
    </StyledFlexPanel>
  );
};
