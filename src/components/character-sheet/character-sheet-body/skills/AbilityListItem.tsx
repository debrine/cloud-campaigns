import React from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  Ability,
  AbilityClass,
} from '../../../../models/character-sheet-models/ability.model';
import { AbilityType } from '../../../../enums/character-sheet-enums';
import { IconName } from '@fortawesome/fontawesome-svg-core';

type Props = {
  ability: Ability;
};

export const AbilityListItem = ({ ability }: Props) => {
  return (
    <AccordionItem borderColor={'background.divider'}>
      {({ isExpanded }) => (
        <>
          <AccordionButton>
            <Flex color='text.primary' my={'4px'}>
              <FontAwesomeIcon
                icon={icon({
                  name: getAbilityIconNameFromAbilityClass[
                    ability.abilityClass
                  ],
                  style: 'solid',
                })}
                size='2xl'
              />
              <Text>{ability.name}</Text>
              {!isExpanded && (
                <Text ml={'auto'} color={'text.secondary'} noOfLines={1}>
                  {ability.description}
                </Text>
              )}
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} color='text.primary'>
            <Flex flexDirection={'column'} mb='16px'>
              {!ability.isPassive && (
                <>
                  {ability.range != null && (
                    <Flex>
                      <Text fontWeight={'bold'}>Range: </Text>
                      <Text>{ability.range}</Text>
                    </Flex>
                  )}
                </>
              )}
            </Flex>
            <Textarea />
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

const getAbilityIconNameFromAbilityClass: Record<AbilityClass, IconName> = {
  [AbilityClass.Class]: 'wand-magic-sparkles',
  [AbilityClass.Racial]: 'people-group',
  [AbilityClass.Feat]: 'lock-open',
  [AbilityClass.Item]: 'flask',
};
