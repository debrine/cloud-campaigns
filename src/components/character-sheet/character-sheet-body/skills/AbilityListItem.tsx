import React from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  Ability,
  AbilityClass,
} from '../../../../models/character-sheet-models/ability.model';
import { IconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';
import {
  faMagicWandSparkles,
  faPeopleGroup,
  faLockOpen,
  faFlask,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
  ability: Ability;
  showIcon?: boolean;
};

export const AbilityListItem = ({ ability, showIcon = false }: Props) => {
  return (
    <AccordionItem borderColor={'background.divider'}>
      {({ isExpanded }) => (
        <>
          <AccordionButton>
            <Flex my={'4px'} justifyContent={'space-between'} width='100%'>
              <Flex>
                <Box
                  color='text.secondary'
                  display={showIcon ? 'block' : 'none'}>
                  <FontAwesomeIcon
                    icon={
                      getAbilityIconNameFromAbilityClass[ability.abilityClass]
                    }
                    size='2xl'
                    width={'40px'}
                    height={'40px'}
                  />
                </Box>
                <Text
                  whiteSpace={'nowrap'}
                  fontWeight={700}
                  mx='8px'
                  color={'text.primary'}>
                  {ability.name}
                </Text>
              </Flex>
              {!isExpanded && (
                <Text
                  color={'text.mutedDark'}
                  noOfLines={1}
                  maxHeight={'24px'}
                  width={'fit-content'}>
                  {ability.description}
                </Text>
              )}
              <AccordionIcon />
            </Flex>
          </AccordionButton>
          <AccordionPanel pb={4} color='text.primary'>
            {!ability.isPassive && (
              <Flex flexDirection={'column'} mb='16px'>
                {ability.range != null && (
                  <Flex>
                    <Text fontWeight={'bold'}>Range: </Text>
                    <Text>{ability.range}</Text>
                  </Flex>
                )}
                {ability.duration != null && (
                  <Flex>
                    <Text fontWeight={'bold'}>Duration: </Text>
                    <Text>{ability.duration}</Text>
                  </Flex>
                )}
                {ability.cooldown != null && ability.charges != null && (
                  <Flex>
                    <Text fontWeight={'bold'}>Uses: </Text>
                    <Text>
                      {ability.charges} per {ability.cooldown}
                    </Text>
                  </Flex>
                )}
                {ability.isCombat && (
                  <Flex>
                    <Text fontWeight={'bold'}>Combat: </Text>
                    <Text>
                      To-Do make an icon for combat spells. Next to name? A
                      sword?
                    </Text>
                  </Flex>
                )}
                {ability.damage != null && ability.damageType != null && (
                  <Flex>
                    <Text fontWeight={'bold'}>Damage Roll: </Text>
                    <Text>
                      {ability.damage} {ability.damageType} damage
                    </Text>
                  </Flex>
                )}
              </Flex>
            )}
            <Text textAlign={'left'}>{ability.description}</Text>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

const getAbilityIconNameFromAbilityClass: Record<AbilityClass, IconDefinition> =
  {
    [AbilityClass.Class]: faMagicWandSparkles,
    [AbilityClass.Racial]: faPeopleGroup,
    [AbilityClass.Feat]: faLockOpen,
    [AbilityClass.Item]: faFlask,
  };
