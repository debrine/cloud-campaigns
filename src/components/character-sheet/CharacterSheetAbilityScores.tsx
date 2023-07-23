import React from 'react';
import { StyledFlexPanel } from '../custom-components/StyledFlexPanel';
import { ControlledAbilityScoreWithModifier } from '../custom-components/AbilityScoreWithModifier';
import { Divider } from '@chakra-ui/react';

type Props = {
  control: any; // TODO type this to control function
};

export const CharacterSheetAbilityScores = ({ control }: Props) => {
  return (
    <StyledFlexPanel
      flexDirection={'column'}
      width={'fit-content'}
      height={'fit-content'}>
      <ControlledAbilityScoreWithModifier
        name={'abilityScores.strength'}
        control={control}
      />
      <Divider my={'8px'} />
      <ControlledAbilityScoreWithModifier
        name={'abilityScores.dexterity'}
        control={control}
      />
      <Divider my={'8px'} />

      <ControlledAbilityScoreWithModifier
        name={'abilityScores.constitution'}
        control={control}
      />
      <Divider my={'8px'} />

      <ControlledAbilityScoreWithModifier
        name={'abilityScores.intelligence'}
        control={control}
      />
      <Divider my={'8px'} />

      <ControlledAbilityScoreWithModifier
        name={'abilityScores.wisdom'}
        control={control}
      />
      <Divider my={'8px'} />

      <ControlledAbilityScoreWithModifier
        name={'abilityScores.charisma'}
        control={control}
      />
    </StyledFlexPanel>
  );
};
