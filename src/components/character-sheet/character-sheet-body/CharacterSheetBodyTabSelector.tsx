import React from 'react';
import { StyledFlexPanel } from '../../custom-components/StyledFlexPanel';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { CharacterSheetBodySkillDetails } from './CharacterSheetBodySkillDetails';
import { CharacterSheetBodyPartyDetails } from './party/CharacterSheetBodyPartyDetails';
import { AbilityProficiency } from '../../../models/character-sheet-models/ability-scores.model';

// should all skill stuff be in a type?
type Props = {
  proficiencyBonus: number;

  dexterityModifier: number;
  strengthModifier: number;
  constitutionModifier: number;
  intelligenceModifier: number;
  wisdomModifier: number;
  charismaModifier: number;

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

export const CharacterSheetBodyTabSelector = (props: Props) => {
  return (
    <StyledFlexPanel ml={'16px'}>
      <Tabs width={'100%'} align='center'>
        <TabList width={'fit-content'} color={'text.primary'}>
          <Tab>Skills</Tab>
          <Tab>Combat</Tab>
          <Tab>Inventory</Tab>
          <Tab>Notes</Tab>
          <Tab>Character</Tab>
          <Tab>Party</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CharacterSheetBodySkillDetails
              proficiencyBonus={props.proficiencyBonus}
              dexterityModifier={props.dexterityModifier}
              strengthModifier={props.strengthModifier}
              constitutionModifier={props.constitutionModifier}
              intelligenceModifier={props.intelligenceModifier}
              wisdomModifier={props.wisdomModifier}
              charismaModifier={props.charismaModifier}
              acrobaticsModifier={props.acrobaticsModifier}
              animalHandlingModifier={props.animalHandlingModifier}
              arcanaModifier={props.arcanaModifier}
              athleticsModifier={props.athleticsModifier}
              deceptionModifier={props.deceptionModifier}
              historyModifier={props.historyModifier}
              insightModifier={props.insightModifier}
              intimidationModifier={props.intimidationModifier}
              investigationModifier={props.investigationModifier}
              medicineModifier={props.medicineModifier}
              natureModifier={props.natureModifier}
              perceptionModifier={props.perceptionModifier}
              performanceModifier={props.performanceModifier}
              persuasionModifier={props.persuasionModifier}
              religionModifier={props.religionModifier}
              sleightOfHandModifier={props.sleightOfHandModifier}
              stealthModifier={props.stealthModifier}
              survivalModifier={props.survivalModifier}
              setAcrobaticsModifier={props.setAcrobaticsModifier}
              setAnimalHandlingModifier={props.setAnimalHandlingModifier}
              setArcanaModifier={props.setArcanaModifier}
              setAthleticsModifier={props.setAthleticsModifier}
              setDeceptionModifier={props.setDeceptionModifier}
              setHistoryModifier={props.setHistoryModifier}
              setInsightModifier={props.setInsightModifier}
              setIntimidationModifier={props.setIntimidationModifier}
              setInvestigationModifier={props.setInvestigationModifier}
              setMedicineModifier={props.setMedicineModifier}
              setNatureModifier={props.setNatureModifier}
              setPerceptionModifier={props.setPerceptionModifier}
              setPerformanceModifier={props.setPerformanceModifier}
              setPersuasionModifier={props.setPersuasionModifier}
              setReligionModifier={props.setReligionModifier}
              setSleightOfHandModifier={props.setSleightOfHandModifier}
              setStealthModifier={props.setStealthModifier}
              setSurvivalModifier={props.setSurvivalModifier}
            />
          </TabPanel>
          <TabPanel>
            <p>Combat</p>
          </TabPanel>
          <TabPanel>
            <p>Inventory</p>
          </TabPanel>
          <TabPanel>
            <p>Notes</p>
          </TabPanel>
          <TabPanel>
            <p>Character</p>
          </TabPanel>
          <TabPanel>
            <CharacterSheetBodyPartyDetails />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </StyledFlexPanel>
  );
};
