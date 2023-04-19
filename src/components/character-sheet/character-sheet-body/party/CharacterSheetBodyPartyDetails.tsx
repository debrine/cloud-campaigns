import { Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { ActiveButton } from '../../../custom-components/buttons/ActiveButton';
import { NewPartyMemberModal } from './NewPartyMemberModal';
import { CharacterSheetPartyMemberList } from './party-list/CharacterSheetPartyMemberList';
import {
  CharacterRace,
  CharacterClass,
} from '../../../../enums/character-sheet-enums';

type Props = {};

const mockPartyMembers = [
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NewPartyMemberModal isOpen={isOpen} onClose={onClose} />
      <Flex width='100%' flexDirection={'column'}>
        <Flex justifyContent='flex-end' width='100%' mb={'16px'}>
          <ActiveButton onClick={onOpen}>Add Member</ActiveButton>
        </Flex>
        <CharacterSheetPartyMemberList partyMembers={mockPartyMembers} />
      </Flex>
    </>
  );
};
