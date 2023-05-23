import React from 'react';
import {
  Ability,
  AbilityClass,
} from '../../../../models/character-sheet-models/ability.model';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { StyledFlexPanel } from '../../../custom-components/StyledFlexPanel';
import { AbilityListItem } from './AbilityListItem';
import { AbilityList } from './AbilityList';
import {
  faMagicWandSparkles,
  faPeopleGroup,
  faLockOpen,
  faFlask,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  racialAbilities: Ability[];
  classAbilities: Ability[];
  feats: Ability[];
  items: Ability[];
} & { [stylingProp: string]: any };

export const AbilityContainer = ({
  racialAbilities,
  classAbilities,
  feats,
  items,
  ...stylingProps
}: Props) => {
  return (
    <Flex flexDirection={'column'} {...stylingProps}>
      <Heading color={'text.secondary'} textAlign={'left'}>
        Abilities
      </Heading>
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
  );
};

const getAbilityIconNameFromAbilityClass: Record<AbilityClass, IconDefinition> =
  {
    [AbilityClass.Class]: faMagicWandSparkles,
    [AbilityClass.Racial]: faPeopleGroup,
    [AbilityClass.Feat]: faLockOpen,
    [AbilityClass.Item]: faFlask,
  };
