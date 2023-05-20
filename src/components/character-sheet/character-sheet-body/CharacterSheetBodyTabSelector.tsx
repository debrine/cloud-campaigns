import React from 'react';
import { StyledFlexPanel } from '../../custom-components/StyledFlexPanel';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { CharacterSheetBodySkillDetails } from './CharacterSheetBodySkillDetails';
import { CharacterSheetBodyPartyDetails } from './party/CharacterSheetBodyPartyDetails';
import {
  AbilityScores,
  Skills,
} from '../../../models/character-sheet-models/ability-scores.model';

// should all skill stuff be in a type?
type Props = {
  proficiencyBonus: number;
  skills: Skills;
  control: any;
  abilityScores: AbilityScores;
};

export const CharacterSheetBodyTabSelector = ({
  proficiencyBonus,
  skills,
  control,
  abilityScores,
}: Props) => {
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
              proficiencyBonus={proficiencyBonus}
              skills={skills}
              control={control}
              abilityScores={abilityScores}
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
