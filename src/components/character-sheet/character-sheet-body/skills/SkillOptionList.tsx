import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { SkillOptionItem } from './SkillOptionItem';
import { StyledFlexPanel } from '../../../custom-components/StyledFlexPanel';
import { ProficiencyListItem } from '../../../custom-components/list-components/ProficiencyItem';
import { AbilityProficiency } from '../../../../models/character-sheet-models/ability-scores.model';
import { calculateTotalSkillModifier } from '../../../../utils/calculation-utils';
import { SkillProficiencyLevel } from '../../../../enums/character-sheet-enums';

type Props = {
  proficiencyBonus: number;

  dexterityModifier: number;
  strengthModifier: number;
  constitutionModifier: number;
  intelligenceModifier: number;
  wisdomModifier: number;
  charismaModifier: number;

  // skill modifiers and setters
  acrobaticsModifier: AbilityProficiency;
  animalHandlingModifier: AbilityProficiency;
  arcanaModifier: AbilityProficiency;
  athleticsModifier: AbilityProficiency;
  deceptionModifier: AbilityProficiency;
  historyModifier: AbilityProficiency;
  insightModifier: AbilityProficiency;
  intimidationModifier: AbilityProficiency;
  investigationModifier: AbilityProficiency;
  medicineModifier: AbilityProficiency;
  natureModifier: AbilityProficiency;
  perceptionModifier: AbilityProficiency;
  performanceModifier: AbilityProficiency;
  persuasionModifier: AbilityProficiency;
  religionModifier: AbilityProficiency;
  sleightOfHandModifier: AbilityProficiency;
  stealthModifier: AbilityProficiency;
  survivalModifier: AbilityProficiency;
  setAcrobaticsModifier: (value: AbilityProficiency) => void;
  setAnimalHandlingModifier: (value: AbilityProficiency) => void;
  setArcanaModifier: (value: AbilityProficiency) => void;
  setAthleticsModifier: (value: AbilityProficiency) => void;
  setDeceptionModifier: (value: AbilityProficiency) => void;
  setHistoryModifier: (value: AbilityProficiency) => void;
  setInsightModifier: (value: AbilityProficiency) => void;
  setIntimidationModifier: (value: AbilityProficiency) => void;
  setInvestigationModifier: (value: AbilityProficiency) => void;
  setMedicineModifier: (value: AbilityProficiency) => void;
  setNatureModifier: (value: AbilityProficiency) => void;
  setPerceptionModifier: (value: AbilityProficiency) => void;
  setPerformanceModifier: (value: AbilityProficiency) => void;
  setPersuasionModifier: (value: AbilityProficiency) => void;
  setReligionModifier: (value: AbilityProficiency) => void;
  setSleightOfHandModifier: (value: AbilityProficiency) => void;
  setStealthModifier: (value: AbilityProficiency) => void;
  setSurvivalModifier: (value: AbilityProficiency) => void;
};

export const SkillOptionList = (props: Props) => {
  // TODO: refactor this to be more DRY aka this is shit
  const pairedSkillsWithSetters = [
    {
      skillName: 'Acrobatics',
      modifierLabel: 'Dex',
      abilityScoreModifier: props.dexterityModifier,
      skillModifier: props.acrobaticsModifier.abilityModifier,
      setSkillModifier: props.setAcrobaticsModifier,
      proficiencyLevel: props.acrobaticsModifier.proficiencyLevel,
    },
    {
      skillName: 'Animal Handling',
      modifierLabel: 'Wis',
      abilityScoreModifier: props.wisdomModifier,
      skillModifier: props.animalHandlingModifier.abilityModifier,
      setSkillModifier: props.setAnimalHandlingModifier,
      proficiencyLevel: props.animalHandlingModifier.proficiencyLevel,
    },
    {
      skillName: 'Arcana',
      modifierLabel: 'Int',
      abilityScoreModifier: props.intelligenceModifier,
      skillModifier: props.arcanaModifier.abilityModifier,
      setSkillModifier: props.setArcanaModifier,
      proficiencyLevel: props.arcanaModifier.proficiencyLevel,
    },
    {
      skillName: 'Athletics',
      modifierLabel: 'Str',
      abilityScoreModifier: props.strengthModifier,
      skillModifier: props.athleticsModifier.abilityModifier,
      setSkillModifier: props.setAthleticsModifier,
      proficiencyLevel: props.athleticsModifier.proficiencyLevel,
    },
    {
      skillName: 'Deception',
      modifierLabel: 'Cha',
      abilityScoreModifier: props.charismaModifier,
      skillModifier: props.deceptionModifier.abilityModifier,
      setSkillModifier: props.setDeceptionModifier,
      proficiencyLevel: props.deceptionModifier.proficiencyLevel,
    },
    {
      skillName: 'History',
      modifierLabel: 'Int',
      abilityScoreModifier: props.intelligenceModifier,
      skillModifier: props.historyModifier.abilityModifier,
      setSkillModifier: props.setHistoryModifier,
      proficiencyLevel: props.historyModifier.proficiencyLevel,
    },
    {
      skillName: 'Insight',
      modifierLabel: 'Wis',
      abilityScoreModifier: props.wisdomModifier,
      skillModifier: props.insightModifier.abilityModifier,
      setSkillModifier: props.setInsightModifier,
      proficiencyLevel: props.insightModifier.proficiencyLevel,
    },
    {
      skillName: 'Intimidation',
      modifierLabel: 'Cha',
      abilityScoreModifier: props.charismaModifier,
      skillModifier: props.intimidationModifier.abilityModifier,
      setSkillModifier: props.setIntimidationModifier,
      proficiencyLevel: props.intimidationModifier.proficiencyLevel,
    },
    {
      skillName: 'Investigation',
      modifierLabel: 'Int',
      abilityScoreModifier: props.intelligenceModifier,
      skillModifier: props.investigationModifier.abilityModifier,
      setSkillModifier: props.setInvestigationModifier,
      proficiencyLevel: props.investigationModifier.proficiencyLevel,
    },
    {
      skillName: 'Medicine',
      modifierLabel: 'Wis',
      abilityScoreModifier: props.wisdomModifier,
      skillModifier: props.medicineModifier.abilityModifier,
      setSkillModifier: props.setMedicineModifier,
      proficiencyLevel: props.medicineModifier.proficiencyLevel,
    },
    {
      skillName: 'Nature',
      modifierLabel: 'Int',
      abilityScoreModifier: props.intelligenceModifier,
      skillModifier: props.natureModifier.abilityModifier,
      setSkillModifier: props.setNatureModifier,
      proficiencyLevel: props.natureModifier.proficiencyLevel,
    },
    {
      skillName: 'Perception',
      modifierLabel: 'Wis',
      abilityScoreModifier: props.wisdomModifier,
      skillModifier: props.perceptionModifier.abilityModifier,
      setSkillModifier: props.setPerceptionModifier,
      proficiencyLevel: props.perceptionModifier.proficiencyLevel,
    },
    {
      skillName: 'Performance',
      modifierLabel: 'Cha',
      abilityScoreModifier: props.charismaModifier,
      skillModifier: props.performanceModifier.abilityModifier,
      setSkillModifier: props.setPerformanceModifier,
      proficiencyLevel: props.performanceModifier.proficiencyLevel,
    },
    {
      skillName: 'Persuasion',
      modifierLabel: 'Cha',
      abilityScoreModifier: props.charismaModifier,
      skillModifier: props.persuasionModifier.abilityModifier,
      setSkillModifier: props.setPersuasionModifier,
      proficiencyLevel: props.persuasionModifier.proficiencyLevel,
    },
    {
      skillName: 'Religion',
      modifierLabel: 'Int',
      abilityScoreModifier: props.intelligenceModifier,
      skillModifier: props.religionModifier.abilityModifier,
      setSkillModifier: props.setReligionModifier,
      proficiencyLevel: props.religionModifier.proficiencyLevel,
    },
    {
      skillName: 'Sleight of Hand',
      modifierLabel: 'Dex',
      abilityScoreModifier: props.dexterityModifier,
      skillModifier: props.sleightOfHandModifier.abilityModifier,
      setSkillModifier: props.setSleightOfHandModifier,
      proficiencyLevel: props.sleightOfHandModifier.proficiencyLevel,
    },
    {
      skillName: 'Stealth',
      modifierLabel: 'Dex',
      abilityScoreModifier: props.dexterityModifier,
      skillModifier: props.stealthModifier.abilityModifier,
      setSkillModifier: props.setStealthModifier,
      proficiencyLevel: props.stealthModifier.proficiencyLevel,
    },
    {
      skillName: 'Survival',
      modifierLabel: 'Wis',
      abilityScoreModifier: props.wisdomModifier,
      skillModifier: props.survivalModifier.abilityModifier,
      setSkillModifier: props.setSurvivalModifier,
      proficiencyLevel: props.survivalModifier.proficiencyLevel,
    },
  ];

  const getSetProficiencyLevel = (setSkillModifier: (newValue: AbilityProficiency)) => {
    
    


  return (
    <Flex flexDirection={'column'}>
      <Heading color={'text.secondary'} textAlign={'left'}>
        Skills
      </Heading>
      <StyledFlexPanel
        flexDirection={'column'}
        bg='background.container'
        width='fit-content'>
        {pairedSkillsWithSetters.map((skillDetails) => {
          return (
            <ProficiencyListItem
              key={skillDetails.skillName}

              skillName={skillDetails.skillName}
              value={calculateTotalSkillModifier(
                skillDetails.abilityScoreModifier,
                props.proficiencyBonus,
                skillDetails.proficiencyLevel,
                skillDetails.skillModifier
              )}
              setValue=
              modifierLabel={skillDetails.modifierLabel}
              setSkillModifier={skillDetails.setSkillModifier}
              proficiencyBonus={props.proficiencyBonus}
              
            />
          );
        })}
      </StyledFlexPanel>
    </Flex>
  );
};
