import React from 'react';
import {
  Ability,
  AbilityClass,
} from '../../../../models/character-sheet-models/ability.model';
import { useForm } from 'react-hook-form';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Switch,
  Textarea,
} from '@chakra-ui/react';
import { theme } from '../../../../theme/theme';
import { CooldownPeriods } from '../../../../enums/character-sheet-enums';
import { ActiveButton } from '../../../custom-components/buttons/ActiveButton';
import { FormState } from '../../../../enums/form-enums';

type Props = {
  addNewAbility: (newAbility: any) => void;
  onClose: () => void;
  formState: FormState;
  editAbilityByName: (abilityId: string, updatedAbility: any) => void;
  currentAbilityDetails?: Ability;
};

interface NewAbilityFormValues {
  name: string;
  description: string;
  abilityClass: AbilityClass;
  isCombat: boolean;
  isActive: boolean;

  cooldown?: string;
  duration?: string;
  range?: string;
  charges?: string;
  damageDice?: string;
  damageType?: string;
}

export const NewAbilityForm = ({
  addNewAbility,
  onClose,
  formState,
  editAbilityByName,
  currentAbilityDetails,
}: Props) => {
  const initialValues: NewAbilityFormValues = currentAbilityDetails ?? {
    name: '',
    description: '',
    abilityClass: AbilityClass.Class,
    isCombat: false,
    isActive: false,
  };

  const { register, handleSubmit, watch } = useForm<NewAbilityFormValues>({
    defaultValues: initialValues,
  });

  // ability should have ID?
  const onSubmit = (values: NewAbilityFormValues) => {
    if (formState === FormState.New) {
      addNewAbility(values);
      onClose();
    } else {
      editAbilityByName(currentAbilityDetails?.name ?? '', values);
      onClose();
    }
  };

  const isActiveFormValue = watch('isActive');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex m={'16px'} flexDirection={'column'} color={'text.secondary'}>
        <Box mb='16px'>
          <FormControl>
            <FormLabel>Ability Name</FormLabel>
            <Input color='text.primary' {...register('name')} />
          </FormControl>
        </Box>

        <Box mb='16px'>
          <FormControl>
            <FormLabel>Ability Type</FormLabel>
            <Select color='text.primary' {...register('abilityClass')}>
              {Object.values(AbilityClass).map((abilityClass) => (
                <option key={abilityClass} value={abilityClass}>
                  {abilityClass}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box mb='16px'>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea color='text.primary' {...register('description')} />
          </FormControl>
        </Box>

        <Flex mb='16px' justifyContent={'space-around'}>
          <Box>
            <FormControl>
              <FormLabel>Combat Ability</FormLabel>
              <Switch {...register('isCombat')} />
            </FormControl>
          </Box>

          <Box>
            <FormControl>
              <FormLabel>Active Ability</FormLabel>
              <Switch {...register('isActive')} />
            </FormControl>
          </Box>
        </Flex>

        {isActiveFormValue && (
          <>
            <Box mb='16px'>
              <FormControl>
                <FormLabel>Range</FormLabel>
                <Input color='text.primary' {...register('range')} />
              </FormControl>
            </Box>
            {/* TODO add in option to match current proficiency bonus */}
            <Box mb='16px'>
              <FormControl>
                <FormLabel>Charges</FormLabel>
                <Input color='text.primary' {...register('charges')} />
              </FormControl>
            </Box>
            {/* TODO add in custom cooldown periods */}
            <Box mb='16px'>
              <FormControl>
                <FormLabel>Cooldown</FormLabel>
                <Select
                  color='text.primary'
                  {...register('cooldown')}
                  style={{ background: theme.colors.background.app }}>
                  {Object.values(CooldownPeriods).map((cooldownPeriod) => (
                    <option key={cooldownPeriod} value={cooldownPeriod}>
                      {cooldownPeriod}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box mb='16px'>
              <FormControl>
                <FormLabel>Duration</FormLabel>
                <Input color='text.primary' {...register('duration')} />
              </FormControl>
            </Box>
            <Box mb='16px'>
              <FormControl>
                <FormLabel>Damage Dice</FormLabel>
                <Input color='text.primary' {...register('damageDice')} />
              </FormControl>
            </Box>
            {/* TODO make this a dropdown */}
            <Box mb='16px'>
              <FormControl>
                <FormLabel>Damage Type</FormLabel>
                <Input color='text.primary' {...register('damageType')} />
              </FormControl>
            </Box>
          </>
        )}
        <Flex justifyContent={'flex-end'}>
          <ActiveButton width={'fit-content'} mt={4} type='submit'>
            Submit
          </ActiveButton>
        </Flex>
      </Flex>
    </form>
  );
};
