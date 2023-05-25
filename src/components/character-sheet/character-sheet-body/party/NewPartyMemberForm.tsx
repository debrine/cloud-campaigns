import React from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import {
  CharacterClass,
  CharacterRace,
} from '../../../../enums/character-sheet-enums';
import { useForm } from 'react-hook-form';
import { theme } from '../../../../theme/theme';
import { ActiveButton } from '../../../custom-components/buttons/ActiveButton';
import { FormState } from '../../../../enums/form-enums';
import { CharacterSummaryModel } from '../../../../models/character-sheet-models/character-summary.model';

type Props = {
  addNewPartyMember: (newPartyMember: any) => void;
  onClose: () => void;
  formState: FormState;
  editPartyMemberById: (partyMemberId: string, updatedPartyMember: any) => void;
  currentPartyMemberDetails?: CharacterSummaryModel;
};

interface NewPartyMemberFormValues {
  characterName: string;
  playerName: string;
  characterRace: CharacterRace;
  characterClass: CharacterClass;
}

export const NewPartyMemberForm = ({
  addNewPartyMember,
  onClose,
  formState,
  currentPartyMemberDetails,
  editPartyMemberById,
}: Props) => {
  const initialValues: NewPartyMemberFormValues = currentPartyMemberDetails ?? {
    characterName: '',
    playerName: '',
    characterRace: CharacterRace.Human,
    characterClass: CharacterClass.Barbarian,
  };

  const { register, handleSubmit } = useForm<NewPartyMemberFormValues>({
    defaultValues: initialValues,
  });

  const onSubmit = (values: NewPartyMemberFormValues) => {
    if (formState === FormState.New) {
      addNewPartyMember(values);
      onClose();
    } else {
      editPartyMemberById(currentPartyMemberDetails?.id ?? '', values);
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex m={'16px'} flexDirection={'column'} color={'text.secondary'}>
        <Box mb='16px'>
          <FormControl>
            <FormLabel>Character Name</FormLabel>
            <Input color='text.primary' {...register('characterName')} />
          </FormControl>
        </Box>
        <Box mb='16px'>
          <FormControl>
            <FormLabel>Player Name</FormLabel>
            <Input color='text.primary' {...register('playerName')} />
          </FormControl>
        </Box>
        <Box mb='16px'>
          <FormControl>
            <FormLabel>Character Race</FormLabel>
            <Select {...register('characterRace')}>
              {Object.values(CharacterRace).map((race) => (
                <option
                  value={race}
                  key={race}
                  style={{ background: theme.colors.background.app }}>
                  {race}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box mb='16px'>
          <FormControl>
            <FormLabel>Character Class</FormLabel>
            <Select {...register('characterClass')}>
              {Object.values(CharacterClass).map((characterClass) => (
                <option
                  value={characterClass}
                  key={characterClass}
                  style={{ background: theme.colors.background.app }}>
                  {characterClass}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Flex justifyContent={'flex-end'}>
          <ActiveButton width={'fit-content'} mt={4} type='submit'>
            Submit
          </ActiveButton>
        </Flex>
      </Flex>
    </form>
  );
};
