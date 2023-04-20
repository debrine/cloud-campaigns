import React from 'react';
import { CharacterSheetPartyMemberListItem } from './CharacterSheetPartyMemberListItem';
import { Accordion } from '@chakra-ui/react';
import { CharacterSummaryModel } from '../../../../../models/character-sheet-models/character-summary.model';

type Props = {
  partyMembers: CharacterSummaryModel[];
  removePartyMember: (
    partyMemberIdToRemove: CharacterSummaryModel['id']
  ) => void;
  openEditPartyMemberModal: (partyMemberToEdit: CharacterSummaryModel) => void;
};

export const CharacterSheetPartyMemberList = (props: Props) => {
  return (
    <Accordion allowMultiple>
      {props.partyMembers.map((partyMember) => {
        return (
          <CharacterSheetPartyMemberListItem
            {...partyMember}
            removePartyMember={props.removePartyMember}
            openEditPartyMemberModal={props.openEditPartyMemberModal}
          />
        );
      })}
    </Accordion>
  );
};
