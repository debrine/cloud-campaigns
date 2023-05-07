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
import { Formik, Form, Field, FieldProps } from 'formik';
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

// TODO - Add validation, clean this up. Can I make this more generic?
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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        if (formState === FormState.New) {
          addNewPartyMember(values);
          onClose();
        } else {
          editPartyMemberById(currentPartyMemberDetails?.id ?? '', values);
          onClose();
        }
      }}>
      <Form>
        <Flex m={'16px'} flexDirection={'column'} color={'text.secondary'}>
          <Box mb='16px'>
            <Field name='characterName'>
              {({ field, form }: FieldProps) => (
                <FormControl>
                  <FormLabel>Character Name</FormLabel>
                  <Input color='text.primary' {...field} />
                </FormControl>
              )}
            </Field>
          </Box>
          <Box mb='16px'>
            <Field name='playerName'>
              {({ field, form }: FieldProps) => (
                <FormControl>
                  <FormLabel>Player Name</FormLabel>
                  <Input color='text.primary' {...field} />
                </FormControl>
              )}
            </Field>
          </Box>
          <Box mb='16px'>
            <Field name='characterRace'>
              {({ field, form }: FieldProps) => (
                <FormControl>
                  <FormLabel>Character Race</FormLabel>
                  <Select {...field}>
                    {Object.values(CharacterRace).map((race) => {
                      return (
                        <option
                          value={race}
                          key={race}
                          style={{ background: theme.colors.background.app }}>
                          {race}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              )}
            </Field>
          </Box>
          <Box mb='16px'>
            <Field name='characterClass'>
              {({ field, form }: FieldProps) => (
                <FormControl>
                  <FormLabel>Character Class</FormLabel>
                  <Select {...field}>
                    {Object.values(CharacterClass).map((characterClass) => {
                      return (
                        <option
                          value={characterClass}
                          key={characterClass}
                          style={{ background: theme.colors.background.app }}>
                          {characterClass}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              )}
            </Field>
          </Box>
          <Flex justifyContent={'flex-end'}>
            {' '}
            <ActiveButton
              width={'fit-content'}
              mt={4}
              // isLoading={props.isSubmitting}
              type='submit'>
              Submit
            </ActiveButton>
          </Flex>
        </Flex>
      </Form>
    </Formik>
  );
};
