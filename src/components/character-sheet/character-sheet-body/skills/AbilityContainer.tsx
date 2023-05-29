import React, { useState } from 'react';
import {
  Ability,
  AbilityClass,
} from '../../../../models/character-sheet-models/ability.model';
import { Flex, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { StyledFlexPanel } from '../../../custom-components/StyledFlexPanel';
import { AbilityList } from './AbilityList';
import {
  faMagicWandSparkles,
  faPeopleGroup,
  faLockOpen,
  faFlask,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActiveButton } from '../../../custom-components/buttons/ActiveButton';
import { NewAbilityModal } from './NewAbilityModal';
import { FormState } from '../../../../enums/form-enums';

type Props = {
  racialAbilities: Ability[];
  classAbilities: Ability[];
  feats: Ability[];
  items: Ability[];
  setValue: any;
} & { [stylingProp: string]: any };

export const AbilityContainer = ({
  racialAbilities,
  classAbilities,
  feats,
  items,
  setValue,
  ...stylingProps
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formState, setFormState] = useState<FormState>(FormState.New);
  // const [currentAbilityToEdit, setCurrentAbilityToEdit] = useState<
  //   Ability | undefined
  // >(undefined);

  const addRacialAbility = (newAbility: Ability) => {
    setValue('abilities.racial', [...racialAbilities, newAbility]);
  };

  const addClassAbility = (newAbility: Ability) => {
    setValue('abilities.class', [...classAbilities, newAbility]);
  };

  const addFeat = (newAbility: Ability) => {
    setValue('abilities.feat', [...feats, newAbility]);
  };

  const addItem = (newAbility: Ability) => {
    setValue('abilities.item', [...items, newAbility]);
  };

  const addNewAbility = (newAbility: Ability) => {
    switch (newAbility.abilityClass) {
      case AbilityClass.Racial:
        addRacialAbility(newAbility);
        break;
      case AbilityClass.Class:
        addClassAbility(newAbility);
        break;
      case AbilityClass.Feat:
        addFeat(newAbility);
        break;
      case AbilityClass.Item:
        addItem(newAbility);
        break;
    }
  };

  const getUpdatedAbilityArrayFromEdit = (
    abilityName: string,
    updatedAbility: Ability,
    currentAbilities: Ability[]
  ) => {
    const updatedAbilities = currentAbilities.map((ability) => {
      if (ability.name === abilityName) {
        return updatedAbility;
      }
      return ability;
    });
    return updatedAbilities;
  };

  const editAbilityByName = (abilityName: string, updatedAbility: Ability) => {
    switch (updatedAbility.abilityClass) {
      case AbilityClass.Racial:
        const updatedRacialAbilities = getUpdatedAbilityArrayFromEdit(
          abilityName,
          updatedAbility,
          racialAbilities
        );
        setValue('abilities.racial', updatedRacialAbilities);
        break;
      case AbilityClass.Class:
        const updatedClassAbilities = getUpdatedAbilityArrayFromEdit(
          abilityName,
          updatedAbility,
          classAbilities
        );
        setValue('abilities.class', updatedClassAbilities);
        break;
      case AbilityClass.Feat:
        const updatedFeatAbilities = getUpdatedAbilityArrayFromEdit(
          abilityName,
          updatedAbility,
          feats
        );
        setValue('abilities.feat', updatedFeatAbilities);
        break;
      case AbilityClass.Item:
        const updatedItemAbilities = getUpdatedAbilityArrayFromEdit(
          abilityName,
          updatedAbility,
          items
        );
        setValue('abilities.item', updatedItemAbilities);
        break;
    }
  };

  return (
    <>
      <NewAbilityModal
        isOpen={isOpen}
        onClose={onClose}
        formState={formState}
        addNewAbility={addNewAbility}
        editAbilityByName={editAbilityByName}
      />
      <Flex flexDirection={'column'} {...stylingProps}>
        <Flex justifyContent={'space-between'}>
          <Heading color={'text.secondary'} textAlign={'left'}>
            Abilities
          </Heading>
          <ActiveButton
            onClick={() => {
              setFormState(FormState.New);
              onOpen();
            }}>
            Add Ability
          </ActiveButton>
        </Flex>

        <StyledFlexPanel
          flexDirection={'column'}
          bg='background.container'
          width='fit-content'>
          {racialAbilities.length > 0 && (
            <Flex flexDirection={'column'}>
              <Flex color={'text.secondary'} my='8px'>
                <FontAwesomeIcon
                  icon={getAbilityIconNameFromAbilityClass[AbilityClass.Racial]}
                  size='2xl'
                  width={'40px'}
                  height={'40px'}
                />
                <Text pl={'8px'} fontWeight={700} fontSize={20}>
                  Racial Abilities
                </Text>
              </Flex>
              <AbilityList abilities={racialAbilities} />
            </Flex>
          )}
          {classAbilities.length > 0 && (
            <Flex flexDirection={'column'}>
              <Flex color={'text.secondary'} my='8px'>
                <FontAwesomeIcon
                  icon={getAbilityIconNameFromAbilityClass[AbilityClass.Class]}
                  size='2xl'
                  width={'40px'}
                  height={'40px'}
                />
                <Text pl={'8px'} fontWeight={700} fontSize={20}>
                  Class Abilities
                </Text>
              </Flex>
              <AbilityList abilities={classAbilities} />
            </Flex>
          )}
          {feats.length > 0 && (
            <Flex flexDirection={'column'}>
              <Flex color={'text.secondary'} my='8px'>
                <FontAwesomeIcon
                  icon={getAbilityIconNameFromAbilityClass[AbilityClass.Feat]}
                  size='2xl'
                  width={'40px'}
                  height={'40px'}
                />
                <Text pl={'8px'} fontWeight={700} fontSize={20}>
                  Feats
                </Text>
              </Flex>
              <AbilityList abilities={feats} />
            </Flex>
          )}
          {items.length > 0 && (
            <Flex flexDirection={'column'}>
              <Flex color={'text.secondary'} my={'8px'}>
                <FontAwesomeIcon
                  icon={getAbilityIconNameFromAbilityClass[AbilityClass.Item]}
                  size='2xl'
                  width={'40px'}
                  height={'40px'}
                />
                <Text pl={'8px'} fontWeight={700} fontSize={20}>
                  Items
                </Text>
              </Flex>
              <AbilityList abilities={items} />
            </Flex>
          )}
        </StyledFlexPanel>
      </Flex>
    </>
  );
};

const getAbilityIconNameFromAbilityClass: Record<AbilityClass, IconDefinition> =
  {
    [AbilityClass.Class]: faMagicWandSparkles,
    [AbilityClass.Racial]: faPeopleGroup,
    [AbilityClass.Feat]: faLockOpen,
    [AbilityClass.Item]: faFlask,
  };
