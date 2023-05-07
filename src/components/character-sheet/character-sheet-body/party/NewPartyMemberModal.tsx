import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { NewPartyMemberForm } from './NewPartyMemberForm';
import { FormState } from '../../../../enums/form-enums';
import { CharacterSummaryModel } from '../../../../models/character-sheet-models/character-summary.model';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  addNewPartyMember: (newPartyMember: any) => void;
  formState: FormState;
  editPartyMemberById: (partyMemberId: string, updatedPartyMember: any) => void;
  currentPartyMemberDetails?: CharacterSummaryModel;
};

export const NewPartyMemberModal = ({
  isOpen,
  onClose,
  addNewPartyMember,
  currentPartyMemberDetails,
  editPartyMemberById,
  formState = FormState.New,
}: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay backdropFilter='blur(3px)' />
        <ModalContent bg='background.panel'>
          <ModalHeader color='text.secondary'>
            {formState === FormState.New ? 'Add New' : 'Edit'} Party Member
          </ModalHeader>
          <ModalCloseButton color={'text.lightBlue'} />
          <ModalBody>
            <NewPartyMemberForm
              addNewPartyMember={addNewPartyMember}
              onClose={onClose}
              formState={formState}
              currentPartyMemberDetails={currentPartyMemberDetails}
              editPartyMemberById={editPartyMemberById}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
