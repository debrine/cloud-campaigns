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
import { FormState } from '../../../../enums/form-enums';

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
  const [formState, setFormState] = useState<FormState>(FormState.New);
  const [currentPartyMemberDetailsToEdit, setCurrentPartyMemberDetailsToEdit] =
    useState<CharacterSummaryModel | undefined>(undefined);
  const addNewPartyMember = (newPartyMember: CharacterSummaryModel) => {
    setPartyMembers([...partyMembers, newPartyMember]);
  };

  const removePartyMember = (
    partyMemberIdToRemove: CharacterSummaryModel['id']
  ) => {
    setPartyMembers(
      partyMembers.filter(
        (partyMember) => partyMember.id !== partyMemberIdToRemove
      )
    );
  };

  const editPartyMemberById = (
    partyMemberIdToEdit: CharacterSummaryModel['id'],
    updatedPartyMember: Partial<CharacterSummaryModel>
  ) => {
    setPartyMembers(
      partyMembers.map((partyMember) => {
        if (partyMember.id === partyMemberIdToEdit) {
          return {
            ...partyMember,
            ...updatedPartyMember,
          };
        }
        return partyMember;
      })
    );
  };

  const openNewPartyMemberModal = () => {
    setFormState(FormState.New);
    setCurrentPartyMemberDetailsToEdit(undefined);
    onOpen();
  };

  const openEditPartyMemberModal = (
    partyMemberToEdit: CharacterSummaryModel
  ) => {
    setFormState(FormState.Edit);
    setCurrentPartyMemberDetailsToEdit(partyMemberToEdit);
    onOpen();
  };

  return (
    <>
      <NewPartyMemberModal
        isOpen={isOpen}
        onClose={onClose}
        addNewPartyMember={addNewPartyMember}
        formState={formState}
        currentPartyMemberDetails={currentPartyMemberDetailsToEdit}
        editPartyMemberById={editPartyMemberById}
      />
      <Flex width='100%' flexDirection={'column'}>
        <Flex justifyContent='flex-end' width='100%' mb={'16px'}>
          <ActiveButton onClick={openNewPartyMemberModal}>
            Add Member
          </ActiveButton>
        </Flex>
        <CharacterSheetPartyMemberList
          partyMembers={partyMembers}
          removePartyMember={removePartyMember}
          openEditPartyMemberModal={openEditPartyMemberModal}
        />
      </Flex>
    </>
  );
};
