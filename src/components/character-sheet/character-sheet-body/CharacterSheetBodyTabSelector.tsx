import React from 'react';
import { StyledFlexPanel } from '../../custom-components/StyledFlexPanel';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { CharacterSheetBodySkillDetails } from './CharacterSheetBodySkillDetails';

type Props = {
  proficiencyBonus: number;
};

export const CharacterSheetBodyTabSelector = (props: Props) => {
  return (
    <StyledFlexPanel mx={'16px'}>
      <Tabs width={'100%'} align='center'>
        <TabList width={'fit-content'} color={'text.primary'}>
          <Tab>Skills</Tab>
          <Tab>Combat</Tab>
          <Tab>Inventory</Tab>
          <Tab>Notes</Tab>
          <Tab>Character</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CharacterSheetBodySkillDetails
              proficiencyBonus={props.proficiencyBonus}
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
        </TabPanels>
      </Tabs>
    </StyledFlexPanel>
  );
};
