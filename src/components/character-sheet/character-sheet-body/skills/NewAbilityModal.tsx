import React from 'react';
import { FormState } from '../../../../enums/form-enums';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { NewAbilityForm } from './NewAbilityForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  addNewAbility: (newAbility: any) => void;
  formState: FormState;
  editAbilityByName: (abilityName: string, updatedAbility: any) => void;
  currentAbilityDetails?: any;
};

// TODO should make a styled modal component
export const NewAbilityModal = ({
  isOpen,
  onClose,
  addNewAbility,
  editAbilityByName,
  formState = FormState.New,
  currentAbilityDetails,
}: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay backdropFilter='blur(3px)' />
        <ModalContent bg='background.panel'>
          <ModalHeader color='text.secondary'>
            {formState === FormState.New ? 'Add New' : 'Edit'} Ability
          </ModalHeader>
          <ModalCloseButton color={'text.lightBlue'} />
          <ModalBody>
            <NewAbilityForm
              currentAbilityDetails={currentAbilityDetails}
              addNewAbility={addNewAbility}
              onClose={onClose}
              formState={formState}
              editAbilityByName={editAbilityByName}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
