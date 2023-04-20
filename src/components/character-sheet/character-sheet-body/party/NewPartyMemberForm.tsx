import React from 'react';
import {
  Box,
  Button,
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
type Props = {
  addNewPartyMember: (newPartyMember: any) => void;
  onClose: () => void;
};

interface NewPartyMemberFormValues {
  characterName: string;
  playerName: string;
  characterRace: CharacterRace;
  characterClass: CharacterClass;
  notes: string;
}

// TODO - Add validation, clean this up. Can I make this more generic?
export const NewPartyMemberForm = ({ addNewPartyMember, onClose }: Props) => {
  const initialValues: NewPartyMemberFormValues = {
    characterName: '',
    playerName: '',
    characterRace: CharacterRace.Human,
    characterClass: CharacterClass.Barbarian,
    notes: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        addNewPartyMember(values);
        onClose();
      }}>
      <Form>
        <Flex m={'16px'} flexDirection={'column'}>
          <Box mb='16px'>
            <Field name='characterName'>
              {({ field, form }: FieldProps) => (
                <FormControl>
                  <FormLabel>Character Name</FormLabel>
                  <Input {...field} />
                </FormControl>
              )}
            </Field>
          </Box>
          <Box mb='16px'>
            <Field name='playerName'>
              {({ field, form }: FieldProps) => (
                <FormControl>
                  <FormLabel>Player Name</FormLabel>
                  <Input {...field} />
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
                        <option value={race} key={race}>
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
                        <option value={characterClass} key={characterClass}>
                          {characterClass}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              )}
            </Field>
          </Box>
          <Button
            width={'fit-content'}
            mt={4}
            // isLoading={props.isSubmitting}
            type='submit'>
            Submit
          </Button>
        </Flex>
      </Form>
    </Formik>
  );
};
