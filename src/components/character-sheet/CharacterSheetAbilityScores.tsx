import React from 'react';
import { StyledFlexPanel } from '../custom-components/StyledFlexPanel';
import { AbilityScoreWithModifier } from '../custom-components/AbilityScoreWithModifier';
import { Divider } from '@chakra-ui/react';

type Props = {
  strength: number;
  setStrength: (value: number) => void;
  dexterity: number;
  setDexterity: (value: number) => void;
  constitution: number;
  setConstitution: (value: number) => void;
  intelligence: number;
  setIntelligence: (value: number) => void;
  wisdom: number;
  setWisdom: (value: number) => void;
  charisma: number;
  setCharisma: (value: number) => void;
};

export const CharacterSheetAbilityScores = ({
  strength,
  setStrength,
  dexterity,
  setDexterity,
  constitution,
  setConstitution,
  intelligence,
  setIntelligence,
  wisdom,
  setWisdom,
  charisma,
  setCharisma,
}: Props) => {
  return (
    <StyledFlexPanel flexDirection={'column'} width={'fit-content'}>
      <AbilityScoreWithModifier
        abilityScore={strength}
        setAbilityScore={setStrength}
        label={'Strength'}
      />
      <Divider my={'8px'} />
      <AbilityScoreWithModifier
        abilityScore={dexterity}
        setAbilityScore={setDexterity}
        label={'Dexterity'}
      />
      <Divider my={'8px'} />

      <AbilityScoreWithModifier
        abilityScore={constitution}
        setAbilityScore={setConstitution}
        label={'Constitution'}
      />
      <Divider my={'8px'} />

      <AbilityScoreWithModifier
        abilityScore={intelligence}
        setAbilityScore={setIntelligence}
        label={'Intelligence'}
      />
      <Divider my={'8px'} />

      <AbilityScoreWithModifier
        abilityScore={wisdom}
        setAbilityScore={setWisdom}
        label={'Wisdom'}
      />
      <Divider my={'8px'} />

      <AbilityScoreWithModifier
        abilityScore={charisma}
        setAbilityScore={setCharisma}
        label={'Charisma'}
      />
    </StyledFlexPanel>
  );
};
