import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { NewPartyMemberForm } from './NewPartyMemberForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const NewPartyMemberModal = ({ isOpen, onClose }: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Party Member</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewPartyMemberForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
