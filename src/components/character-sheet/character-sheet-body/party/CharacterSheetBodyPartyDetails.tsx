import { Flex, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ActiveButton } from '../../../custom-components/buttons/ActiveButton';
import { NewPartyMemberModal } from './NewPartyMemberModal';
import { CharacterSheetPartyMemberList } from './party-list/CharacterSheetPartyMemberList';
import {
  CharacterRace,
  CharacterClass,
} from '../../../../enums/character-sheet-enums';
import { CharacterSummaryModel } from '../../../../models/character-sheet-models/character-summary.model';

type Props = {};

const mockPartyMembers: CharacterSummaryModel[] = [
  {
    characterName: 'WAAP',
    playerName: 'Dylan Brine',
    characterRace: CharacterRace.Warforged,
    characterClass: CharacterClass.Artificer,
    characterLevel: 1,
    id: '1',
  },
  {
    characterName: 'K-33',
    playerName: 'Carson Sampson',
    characterRace: CharacterRace.Warforged,
    characterClass: CharacterClass.Fighter,
    characterLevel: 1,
    id: '2',
  },
  {
    characterName: 'Dathlil',
    playerName: 'Madison Fancey',
    characterRace: CharacterRace.Human,
    characterClass: CharacterClass.Druid,
    characterLevel: 1,
    id: '3',
  },
  {
    characterName: 'Echo',
    playerName: 'Ryan Sampson',
    characterRace: CharacterRace.Kenku,
    characterClass: CharacterClass.Warlock,
    characterLevel: 1,
    id: '4',
  },
];

export const CharacterSheetBodyPartyDetails = (props: Props) => {
  const [partyMembers, setPartyMembers] = useState(mockPartyMembers);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addNewPartyMember = (newPartyMember: CharacterSummaryModel) => {
    setPartyMembers([...partyMembers, newPartyMember]);
  };
  return (
    <>
      <NewPartyMemberModal
        isOpen={isOpen}
        onClose={onClose}
        addNewPartyMember={addNewPartyMember}
      />
      <Flex width='100%' flexDirection={'column'}>
        <Flex justifyContent='flex-end' width='100%' mb={'16px'}>
          <ActiveButton onClick={onOpen}>Add Member</ActiveButton>
        </Flex>
        <CharacterSheetPartyMemberList partyMembers={partyMembers} />
      </Flex>
    </>
  );
};
